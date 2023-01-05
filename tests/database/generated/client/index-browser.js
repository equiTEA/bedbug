
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  isVerified: 'isVerified',
  full: 'full',
  line1: 'line1',
  line2: 'line2',
  line3: 'line3',
  city: 'city',
  state: 'state',
  zip: 'zip',
  countryCode: 'countryCode',
  latitude: 'latitude',
  longitude: 'longitude'
});

exports.Prisma.BusinessScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.LandlordScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.PropertyManagementCompanyScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.RatingScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  address: 'address',
  landlordAtDateOfRating: 'landlordAtDateOfRating',
  doingBusinessAsAtDateOfRating: 'doingBusinessAsAtDateOfRating',
  propertyManagementCompanyAtDateOfRating: 'propertyManagementCompanyAtDateOfRating',
  sentiment: 'sentiment',
  rentPrice: 'rentPrice',
  body: 'body',
  tenancyEndDate: 'tenancyEndDate',
  tenancyStartDate: 'tenancyStartDate'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  banned: 'banned',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  isEnrolledInAddressModeration: 'isEnrolledInAddressModeration'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.UserRoleType = makeEnum({
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  TENANT: 'TENANT',
  LANDLORD: 'LANDLORD',
  PROPERTY_MANAGEMENT_COMPANY: 'PROPERTY_MANAGEMENT_COMPANY'
});

exports.Prisma.ModelName = makeEnum({
  Address: 'Address',
  Business: 'Business',
  Landlord: 'Landlord',
  PropertyManagementCompany: 'PropertyManagementCompany',
  Rating: 'Rating',
  User: 'User'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
