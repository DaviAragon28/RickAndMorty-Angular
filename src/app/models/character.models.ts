export interface Character {
 info:    Info;
 results: Result[];
}

export interface Info {
 count: number;
 next:  string;
 pages: number;
 prev:  null;
}

export interface Result {
 created:  string;
 episode:  string[];
 gender:   string;
 id:       number;
 image:    string;
 location: Location;
 name:     string;
 origin:   Location;
 species:  string;
 status:   string;
 type:     string;
 url:      string;
}


export interface Location {
    name: string;
    url:  string;
}

// export enum Gender {
//  Female = "Female",
//  Male = "Male",
//  Unknown = "unknown",
// }
// export enum Species {
//  Alien = "Alien",
//  Human = "Human",
// }

// export enum Status {
//  Alive = "Alive",
//  Dead = "Dead",
//  Unknown = "unknown",
// }
