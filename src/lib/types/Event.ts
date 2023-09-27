export type Subcontractor = {
  name: string;
  rating: number;
};

export interface Event {
  name: string;
  date: string;
  rangeHour: string[];
  client: string;
  subcontractors: Subcontractor[];
}
