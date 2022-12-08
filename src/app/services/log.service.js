// third-party modules
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://c5754bf4251b4bcd9c4dea99da05858c@o4504263695925248.ingest.sentry.io/4504263705231360",
    integrations: [new BrowserTracing()],

    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;
