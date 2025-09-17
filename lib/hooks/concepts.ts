import { Concept } from "../../types";
import { supabase } from "../supabaseClient";

export const createConcept = async ({ title, description }: Concept) => {
  const { error } = await supabase.from("concepts").insert({
    title,
    description,
  });
  if (error) throw new Error(error.message);
  return true;
};
