import { registerApplication } from "single-spa";

const coreApplications = {
  // "@dev-box/styleguide":location => !loginActive(location),
  "@dev-box/login": loginActive,
  "@dev-box/navbar": location => !loginActive(location)
};

function loginActive(location) {
  return (
    location.pathname.startsWith("/login")
  );
}

export function registerAllCoreApplications() {
  Object.keys(coreApplications).forEach(coreAppName => {
    registerApplication(
      coreAppName,
      () => System.import(coreAppName),
      coreApplications[coreAppName]
    );
  });
}

export function registerCoreApplicationsExcept(names) {
  if (!Array.isArray(names) || names.some(name => typeof name !== "string")) {
    throw Error(
      `registerCoreApplicationsExcept must be called with an array of string application names`
    );
  }

  const registeredApps = [];

  Object.keys(coreApplications).forEach(appName => {
    if (!names.includes(appName)) {
      registerApplication(
        appName,
        () => System.import(appName),
        coreApplications[appName]
      );
      registeredApps.push(appName);
    }
  });

  return registeredApps; 
}
