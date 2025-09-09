import React from "react";
import OpenAccount from "../OpenAccount"
import Brockerage from "./Brokerage";
import Hero from "./Hero";
import { useState } from "react";

function PricingPage() {
  return (
    <>
      <Hero/>
      <OpenAccount/>
      <Brockerage/>
    </>
  );
}

export default PricingPage;
