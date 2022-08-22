export interface Episodes {
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
    air_date:   string;
    characters: string[];
    created:    Date;
    episode:    string;
    id:         number;
    name:       string;
    url:        string;
   }
   