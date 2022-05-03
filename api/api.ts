export * from './bankApplications.service';
import { BankApplicationsService } from './bankApplications.service';
export * from './organizationApplications.service';
import { OrganizationApplicationsService } from './organizationApplications.service';
export const APIS = [BankApplicationsService, OrganizationApplicationsService];
