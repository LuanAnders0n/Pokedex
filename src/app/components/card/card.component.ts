import { Component, Input } from '@angular/core';
import { Pokemon } from '../../services/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() pokemons: Pokemon[] = []; // Recebe a lista de Pokémon

  getTypeClass(type: string): string {
    switch (type) {
      case 'normal':
        return 'normal';
      case 'bug':
        return 'bug';
      case 'dark':
        return 'dark';
      case 'dragon':
        return 'dragon';
      case 'electric':
        return 'electric';
      case 'fairy':
        return 'fairy';
      case 'fire':
        return 'fire';
      case 'flying':
        return 'flying';
      case 'ghost':
        return 'ghost';
      case 'grass':
        return 'grass';
      case 'ground':
        return 'ground';
      case 'ice':
        return 'ice';
      case 'poison':
        return 'poison';
      case 'psychic':
        return 'psychic';
      case 'rock':
        return 'rock';
      case 'steel':
        return 'steel';
      case 'water':
        return 'water';
      default:
        return '';
    }
  }
}
