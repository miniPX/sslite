import React, { useEffect, useState } from "react";
import {
  Container,
  Dialog,
  DialogText,
  AudienceInput,
  Title,
  SubmitButton,
  ConceptTitle,
  ConceptDescription,
} from "./style";
import { createConcept } from "../../lib/hooks/concepts";
import { askGemini } from "../../lib/hooks/gemini";
import { useMutation } from "@tanstack/react-query";
import { CustomSelect } from "../../subcomponents/select";
import { Concept } from "../../types";

const createQueryForGemini = (audience: string) =>
  `Create an ad concept targeted for ${audience}`;

const AUDIENCE_OPTIONS = ["monkeys", "rabbits", "cows"];

export const Landing = () => {
  // GeminiAI hook
  const {
    mutate,
    data: geminiData,
    // reset,
    isSuccess: isGeminiSuccess,
    isError: isGeminiError,
    // error: geminiError,
    isPending: isGeminiPending,
  } = useMutation({
    mutationFn: askGemini,
    onSuccess: () => {
      console.log("gemini success!");
    },
  });

  // Supabase insert hook
  const {
    mutate: addConcept,
    // reset,
    isSuccess: isInsertSuccess,
    isError: isInsertError,
  } = useMutation({
    mutationFn: createConcept,
    onSuccess: () => {
      console.log("insert success!");
    },
  });

  // makes sense to have separate variables as may want to combine somehow in the future
  const [optionAudience, setAudienceOption] = useState(AUDIENCE_OPTIONS[0]);
  const [inputAudience, setInputAudience] = useState("");

  const [conceptTitle, setConceptTitle] = useState("");
  const [conceptDescription, setConceptDescription] = useState("");

  const onAudienceOptionChange = (option: string) => {
    setAudienceOption(option);
  };

  const onInputAudience = (input: string) => {
    setInputAudience(input);
  };

  // place to more easily watch the gemini request state
  // could variables as part of ternary for different components
  // i.e. spinning wheels of death, nonactionable components, etc
  useEffect(() => {
    if (isGeminiPending) {
      console.log("Gemini Pending");
    } else if (isGeminiError) {
      console.log("Gemini Pending");
    } else if (isGeminiSuccess) {
      if (geminiData.text) {
        const { title: newTitle, description: newDescription }: Concept =
          JSON.parse(geminiData.text);
        setConceptTitle(newTitle);
        setConceptDescription(newDescription);
        addConcept({ title: newTitle, description: newDescription });
      } else {
        console.log("something strange about the return");
      }
    }
  }, [isGeminiPending, isGeminiSuccess, isGeminiError, geminiData, addConcept]);

  // same caveats as above... sort of
  // i.e. can see there being a save button, so users can choose which concepts to save
  // maybe even star button for REALLY like
  useEffect(() => {
    if (isInsertSuccess) {
      console.log("SUPABASE INSERT SUCCESS");
    } else {
      console.log("SUPABASE INSERT ERROR");
    }
  }, [isInsertSuccess, isInsertError]);

  const onClickSubmit = () => {
    if (!isGeminiPending && !isGeminiError) {
      let audience: string = optionAudience;
      const inputAudienceClean = inputAudience.trim();

      if (inputAudienceClean.length > 0) {
        audience = inputAudienceClean;
      }

      const query = createQueryForGemini(audience);

      mutate(query);
    }
  };

  // if creating a more UX-oriented project...
  // would go deeper into making it clearer to the user when which input type is being used
  return (
    <Container>
      <Title>Ad Concept Generator!</Title>
      <Dialog>
        <DialogText>Select or input an audience:</DialogText>
        <CustomSelect
          selectOptions={AUDIENCE_OPTIONS}
          updateOption={onAudienceOptionChange}
        />
        <AudienceInput onChange={(e) => onInputAudience(e.target.value)} />
        <SubmitButton onClick={onClickSubmit}>Submit</SubmitButton>

        {/* dependency on length is unnecessary but just showing basic concept */}
        {conceptTitle.length > 0 && <ConceptTitle>{conceptTitle}</ConceptTitle>}
        {conceptDescription.length > 0 && (
          <ConceptDescription>{conceptDescription}</ConceptDescription>
        )}
      </Dialog>
    </Container>
  );
};
