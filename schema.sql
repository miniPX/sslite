-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

-- public table with public write permission not ideal! POC only
CREATE TABLE public.concepts (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  title text,
  description text,
  CONSTRAINT concepts_pkey PRIMARY KEY (id)
);