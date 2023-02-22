export type Pet = {
  id: number;
  name: string;
  category: string;
  photoUrl: string[];
  tags: Status;
};

export enum Status {
  available,
  pending,
  sold,
}
