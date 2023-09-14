"use client";

import "regenerator-runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Dispatch, SetStateAction } from "react";

export const VoiceSearch = (setInput: Dispatch<SetStateAction<string>>) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function startListening() {
    SpeechRecognition.startListening({ continuous: true, language: "en-GB" });
  }

  function stopListening() {
    SpeechRecognition.stopListening();
    setInput(transcript);
  }

  return {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    startListening,
    stopListening,
  };
};
