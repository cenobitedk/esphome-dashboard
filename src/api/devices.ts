import { fetchApiJson, fetchApiText } from ".";

export interface ConfiguredDevice {
  name: string;
  configuration: string;
  loaded_integrations: string[];
  deployed_version: string;
  current_version: string;
  path: string;
  comment: string;
  address: string;
  target_platform: string;
}

export interface ImportableDevice {
  name: string;
  package_import_url: string;
  project_name: string;
  project_version: string;
}

export interface ListDevicesResult {
  configured: ConfiguredDevice[];
  importable: ImportableDevice[];
}

export const getDevices = () => fetchApiJson<ListDevicesResult>("./devices");

export const importDevice = (params: ImportableDevice) =>
  fetchApiText("./import", {
    method: "post",
    body: JSON.stringify(params),
  });