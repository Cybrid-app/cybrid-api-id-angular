export * from './bankApplications.service';
import { BankApplicationsService } from './bankApplications.service';
export * from './customerTokens.service';
import { CustomerTokensService } from './customerTokens.service';
export * from './organizationApplications.service';
import { OrganizationApplicationsService } from './organizationApplications.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [BankApplicationsService, CustomerTokensService, OrganizationApplicationsService, UsersService];
