import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { Pokemon, PokemonService } from '../../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(151).subscribe(
      (response) => {
        this.pokemons = response;
        this.filteredPokemons = response;
      },
      (error) => console.error(error)
    );
  }

  searchPokemon(term: string): void {
    if (!term) {
      this.filteredPokemons = this.pokemons;
    } else {
      this.pokemonService.getPokemon(term.toLowerCase()).subscribe(
        (pokemon) => {
          this.filteredPokemons = [pokemon];
        },
        (error) => {
          console.error('Erro ao buscar Pokémon:', error);
          this.filteredPokemons = [];
        }
      );
    }
  }
}
