import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService, Pokemon } from '../../services/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  pokemon!: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemon(id).subscribe(
        (pokemon) => {
          this.pokemon = pokemon;
        },
        (error) => console.error(error)
      );
    }
  }
}
