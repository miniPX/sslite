import React, { useEffect } from "react";
import { Container, Dialog } from "./style";
import { useConcepts } from "../../lib/hooks/concepts";
import { askGemini } from "../../lib/hooks/gemini";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const createQueryForGemini = () => {
  return ""
}

export const Landing = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useConcepts();
  // const { data: aiData, isLoading: isAILoading, error: AIError } = useGeminiAI();

  const { mutate, data: geminiData, reset, isSuccess, isError, error: geminiError, isPending } = useMutation({
    mutationFn: askGemini,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  useEffect(() => {
    if (isLoading) {
      console.log("loading"!)
    }
    else if (error) {
      console.log("ERROR")
    }
    else if (data) {
      console.log({ data })
      // mutate("Give me an ad concept")
    }

  }, [isLoading, error, data])

  useEffect(() => {
    if (isPending) {
      console.log("Gemini Pending")
    }
    else if (isError) {
      console.log("Gemini Pending")
    }
    else if (isSuccess) {
      if (geminiData.text) {
        console.log("Gemini Success")
        console.log({ text: JSON.parse(geminiData.text) })
      }
      else {
        console.log("something strange about the return")
      }
    }

  }, [isPending, isSuccess, isError, geminiData])

  return <Container><Dialog></Dialog></Container>
}
