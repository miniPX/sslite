import { supabase } from "../supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchConcepts = async () => {
    const { data, error } = await supabase.from('concepts').select('*');
    if (error) throw new Error(error.message);
    return data;
};

// await supabase.from('countries').insert({ id: 1, name: 'Mordor' })
const insertConcept = async () => { }

export const useConcepts = () => {
    const queryClient = useQueryClient()
    return useQuery({ queryKey: ['posts'], queryFn: fetchConcepts });
}   