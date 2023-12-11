"use client";
import React from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { useTranslation } from "../i18n/client";

/**
 * Movies list page.
 *
 * ========================================================================
 * In this small-scale example, language translations are passed as props
 * for simplicity. In a larger, more complex application, it would be more
 * appropriate to handle translations through a more robust method, like
 * using a global context or a dedicated translation service.
 * ========================================================================
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.lng - The language parameter.
 * @returns {JSX.Element} The rendered index page.
 */

export default function IndexPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, 'header');

  return (
    <div>
      <Header t={t} lng={lng} />
      <div className="container">
        <MoviesList title={t("allMovies")} noResult={t("noResult")} />
      </div>
    </div>
  );
}
