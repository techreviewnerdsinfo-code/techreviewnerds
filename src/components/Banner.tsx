"use client";
import React from "react";

/**
 * Banner
 *
 * Displays a short notice informing visitors that the site is using mock
 * products. Once Amazon Associates approval is granted and live pricing is
 * implemented, this component can be removed or hidden.
 */
const Banner: React.FC = () => (
  <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm text-center py-2 px-4">
    Demo data in use. Live Amazon pricing will show after Associates approval.
  </div>
);

export default Banner;