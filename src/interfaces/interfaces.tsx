export interface PokemonsResponse{
    pokemonsDetail: PokemonsDetail[]
}

export interface PokemonsDetail {
key: number;
name: string;
url: string;
}

interface Abilities {
    ability: Ability;
  }
  interface Ability {
    name: string;
  }
  interface Move {
    name: string;
  }
  
  interface Moves {
    move: Move;
  }
  interface Stat {
    name: string;
  }
  
  interface Stats {
    base_stat: number;
    stat: Stat;
  }
  interface Types {
    type: Type;
  }
  
  interface Type {
    name: string;
  }
  
  interface sprite {
    front_default: string;
  }
  export interface Pokemon {
    name?: string;
    height?: number;
    id?: number;
    weight?: number;
    sprites?: sprite;
    moves?: Moves[];
    abilities?: Abilities[];
    stats?: Stats[];
    types?: Types[];
  }