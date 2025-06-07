"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LeagueNewScreen } from "@/components/screens/leagues";

export default function NewLeague() {
  return (
    <div>
      <LeagueNewScreen />
    </div>
  );
}
