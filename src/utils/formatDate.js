import { format } from "date-fns";
import { enUS, nl, fr } from "date-fns/locale";

const dateLocale = {
  nl: nl,
  en: enUS,
  fr: fr,
};

const formatDate = (dateString, locale = "nl", pattern = "PPPP") =>
  format(new Date(dateString), pattern, {
    locale: dateLocale[locale],
  });

export default formatDate;
