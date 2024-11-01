import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

// pokemon.model.ts
export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}

export interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Método para obter um único Pokémon
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }

  // Método para obter múltiplos Pokémon
  getPokemons(limit: number = 10, offset: number = 0): Observable<Pokemon[]> {
    return this.http
      .get<{ results: { name: string; url: string }[] }>(
        `${this.apiUrl}?limit=${limit}&offset=${offset}`
      )
      .pipe(
        switchMap((response) => {
          const pokemonDetails = response.results.map((pokemon) =>
            this.http.get<Pokemon>(pokemon.url)
          );
          return forkJoin(pokemonDetails);
        })
      );
  }

  private pokemonsSource = new BehaviorSubject<Pokemon[]>([]);
  pokemons$ = this.pokemonsSource.asObservable();

  searchPokemon(term: string) {
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${term}`)
      .pipe(
        tap((pokemon) => {
          this.pokemonsSource.next([pokemon]);
        })
      );
  }
}
