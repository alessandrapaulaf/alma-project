export type Lead = {
  id: string;
  name: string;
  submitted: string;
  status: "Pending" | "Reached Out";
  country: string;
};
