
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Address
 * 
 */
export type Address = {
  id: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  isDeleted: boolean
  deletedBy: string | null
  isVerified: boolean
  full: string
  line1: string
  line2: string
  line3: string
  city: string
  state: string
  zip: string
  countryCode: string
  latitude: number
  longitude: number
}

/**
 * Model Business
 * 
 */
export type Business = {
  id: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  isDeleted: boolean
  deletedBy: string | null
  name: string
  isVerified: boolean
}

/**
 * Model Landlord
 * 
 */
export type Landlord = {
  id: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  isDeleted: boolean
  deletedBy: string | null
  name: string
  isVerified: boolean
}

/**
 * Model PropertyManagementCompany
 * 
 */
export type PropertyManagementCompany = {
  id: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  isDeleted: boolean
  deletedBy: string | null
  name: string
  isVerified: boolean
}

/**
 * Model Rating
 * 
 */
export type Rating = {
  id: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  isDeleted: boolean
  deletedBy: string | null
  address: string | null
  landlordAtDateOfRating: string | null
  doingBusinessAsAtDateOfRating: string | null
  propertyManagementCompanyAtDateOfRating: string | null
  sentiment: number | null
  rentPrice: number
  body: Prisma.JsonValue | null
  tenancyEndDate: Date | null
  tenancyStartDate: Date | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  username: string
  email: string
  banned: boolean
  password: string
  role: UserRoleType | null
  createdAt: Date | null
  isEnrolledInAddressModeration: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserRoleType: {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  TENANT: 'TENANT',
  LANDLORD: 'LANDLORD',
  PROPERTY_MANAGEMENT_COMPANY: 'PROPERTY_MANAGEMENT_COMPANY'
};

export type UserRoleType = (typeof UserRoleType)[keyof typeof UserRoleType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>;

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<GlobalReject>;

  /**
   * `prisma.landlord`: Exposes CRUD operations for the **Landlord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landlords
    * const landlords = await prisma.landlord.findMany()
    * ```
    */
  get landlord(): Prisma.LandlordDelegate<GlobalReject>;

  /**
   * `prisma.propertyManagementCompany`: Exposes CRUD operations for the **PropertyManagementCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyManagementCompanies
    * const propertyManagementCompanies = await prisma.propertyManagementCompany.findMany()
    * ```
    */
  get propertyManagementCompany(): Prisma.PropertyManagementCompanyDelegate<GlobalReject>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Address: 'Address',
    Business: 'Business',
    Landlord: 'Landlord',
    PropertyManagementCompany: 'PropertyManagementCompany',
    Rating: 'Rating',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgresql?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    Rating: number
  }

  export type AddressCountOutputTypeSelect = {
    Rating?: boolean
  }

  export type AddressCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AddressCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AddressCountOutputType
    : S extends undefined
    ? never
    : S extends AddressCountOutputTypeArgs
    ?'include' extends U
    ? AddressCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
    : AddressCountOutputType
  : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     * 
    **/
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type BusinessCountOutputType
   */


  export type BusinessCountOutputType = {
    Rating: number
    Landlord: number
  }

  export type BusinessCountOutputTypeSelect = {
    Rating?: boolean
    Landlord?: boolean
  }

  export type BusinessCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BusinessCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BusinessCountOutputType
    : S extends undefined
    ? never
    : S extends BusinessCountOutputTypeArgs
    ?'include' extends U
    ? BusinessCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BusinessCountOutputType ? BusinessCountOutputType[P] : never
  } 
    : BusinessCountOutputType
  : BusinessCountOutputType




  // Custom InputTypes

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     * 
    **/
    select?: BusinessCountOutputTypeSelect | null
  }



  /**
   * Count Type LandlordCountOutputType
   */


  export type LandlordCountOutputType = {
    Rating: number
    Business: number
  }

  export type LandlordCountOutputTypeSelect = {
    Rating?: boolean
    Business?: boolean
  }

  export type LandlordCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LandlordCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LandlordCountOutputType
    : S extends undefined
    ? never
    : S extends LandlordCountOutputTypeArgs
    ?'include' extends U
    ? LandlordCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LandlordCountOutputType ? LandlordCountOutputType[P] : never
  } 
    : LandlordCountOutputType
  : LandlordCountOutputType




  // Custom InputTypes

  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LandlordCountOutputType
     * 
    **/
    select?: LandlordCountOutputTypeSelect | null
  }



  /**
   * Count Type PropertyManagementCompanyCountOutputType
   */


  export type PropertyManagementCompanyCountOutputType = {
    Rating: number
  }

  export type PropertyManagementCompanyCountOutputTypeSelect = {
    Rating?: boolean
  }

  export type PropertyManagementCompanyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PropertyManagementCompanyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PropertyManagementCompanyCountOutputType
    : S extends undefined
    ? never
    : S extends PropertyManagementCompanyCountOutputTypeArgs
    ?'include' extends U
    ? PropertyManagementCompanyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PropertyManagementCompanyCountOutputType ? PropertyManagementCompanyCountOutputType[P] : never
  } 
    : PropertyManagementCompanyCountOutputType
  : PropertyManagementCompanyCountOutputType




  // Custom InputTypes

  /**
   * PropertyManagementCompanyCountOutputType without action
   */
  export type PropertyManagementCompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompanyCountOutputType
     * 
    **/
    select?: PropertyManagementCompanyCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Address_Address_createdByToUser: number
    Address_Address_deletedByToUser: number
    Address_Address_updatedByToUser: number
    Business_Business_createdByToUser: number
    Business_Business_deletedByToUser: number
    Business_Business_updatedByToUser: number
    Landlord_Landlord_createdByToUser: number
    Landlord_Landlord_deletedByToUser: number
    Landlord_Landlord_updatedByToUser: number
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser: number
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser: number
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser: number
    Rating_Rating_createdByToUser: number
    Rating_Rating_deletedByToUser: number
    Rating_Rating_updatedByToUser: number
  }

  export type UserCountOutputTypeSelect = {
    Address_Address_createdByToUser?: boolean
    Address_Address_deletedByToUser?: boolean
    Address_Address_updatedByToUser?: boolean
    Business_Business_createdByToUser?: boolean
    Business_Business_deletedByToUser?: boolean
    Business_Business_updatedByToUser?: boolean
    Landlord_Landlord_createdByToUser?: boolean
    Landlord_Landlord_deletedByToUser?: boolean
    Landlord_Landlord_updatedByToUser?: boolean
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: boolean
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: boolean
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: boolean
    Rating_Rating_createdByToUser?: boolean
    Rating_Rating_deletedByToUser?: boolean
    Rating_Rating_updatedByToUser?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    isVerified: boolean | null
    full: string | null
    line1: string | null
    line2: string | null
    line3: string | null
    city: string | null
    state: string | null
    zip: string | null
    countryCode: string | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    isVerified: boolean | null
    full: string | null
    line1: string | null
    line2: string | null
    line3: string | null
    city: string | null
    state: string | null
    zip: string | null
    countryCode: string | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedBy: number
    isVerified: number
    full: number
    line1: number
    line2: number
    line3: number
    city: number
    state: number
    zip: number
    countryCode: number
    latitude: number
    longitude: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    isVerified?: true
    full?: true
    line1?: true
    line2?: true
    line3?: true
    city?: true
    state?: true
    zip?: true
    countryCode?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    isVerified?: true
    full?: true
    line1?: true
    line2?: true
    line3?: true
    city?: true
    state?: true
    zip?: true
    countryCode?: true
    latitude?: true
    longitude?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    isVerified?: true
    full?: true
    line1?: true
    line2?: true
    line3?: true
    city?: true
    state?: true
    zip?: true
    countryCode?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    isDeleted: boolean
    deletedBy: string | null
    isVerified: boolean
    full: string
    line1: string
    line2: string
    line3: string
    city: string
    state: string
    zip: string
    countryCode: string
    latitude: number
    longitude: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedBy?: boolean
    isVerified?: boolean
    full?: boolean
    line1?: boolean
    line2?: boolean
    line3?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    User_Address_createdByToUser?: boolean | UserArgs
    User_Address_deletedByToUser?: boolean | UserArgs
    User_Address_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type AddressInclude = {
    User_Address_createdByToUser?: boolean | UserArgs
    User_Address_deletedByToUser?: boolean | UserArgs
    User_Address_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type AddressGetPayload<
    S extends boolean | null | undefined | AddressArgs,
    U = keyof S
      > = S extends true
        ? Address
    : S extends undefined
    ? never
    : S extends AddressArgs | AddressFindManyArgs
    ?'include' extends U
    ? Address  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User_Address_createdByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Address_deletedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Address_updatedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User_Address_createdByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Address_deletedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Address_updatedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
    : Address
  : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User_Address_createdByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Address_deletedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Address_updatedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Rating<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Throw an Error if a Address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Throw an Error if a Address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Business
   */


  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedBy: number
    name: number
    isVerified: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
    _all?: true
  }

  export type BusinessAggregateArgs = {
    /**
     * Filter which Business to aggregate.
     * 
    **/
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     * 
    **/
    orderBy?: Enumerable<BusinessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs = {
    where?: BusinessWhereInput
    orderBy?: Enumerable<BusinessOrderByWithAggregationInput>
    by: Array<BusinessScalarFieldEnum>
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }


  export type BusinessGroupByOutputType = {
    id: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    isDeleted: boolean
    deletedBy: string | null
    name: string
    isVerified: boolean
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect = {
    id?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedBy?: boolean
    name?: boolean
    isVerified?: boolean
    User_Business_createdByToUser?: boolean | UserArgs
    User_Business_deletedByToUser?: boolean | UserArgs
    User_Business_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    Landlord?: boolean | LandlordFindManyArgs
    _count?: boolean | BusinessCountOutputTypeArgs
  }

  export type BusinessInclude = {
    User_Business_createdByToUser?: boolean | UserArgs
    User_Business_deletedByToUser?: boolean | UserArgs
    User_Business_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    Landlord?: boolean | LandlordFindManyArgs
    _count?: boolean | BusinessCountOutputTypeArgs
  }

  export type BusinessGetPayload<
    S extends boolean | null | undefined | BusinessArgs,
    U = keyof S
      > = S extends true
        ? Business
    : S extends undefined
    ? never
    : S extends BusinessArgs | BusinessFindManyArgs
    ?'include' extends U
    ? Business  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User_Business_createdByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Business_deletedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Business_updatedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends 'Landlord' ? Array < LandlordGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User_Business_createdByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Business_deletedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Business_updatedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends 'Landlord' ? Array < LandlordGetPayload<S['select'][P]>>  :
        P extends '_count' ? BusinessCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Business ? Business[P] : never
  } 
    : Business
  : Business


  type BusinessCountArgs = Merge<
    Omit<BusinessFindManyArgs, 'select' | 'include'> & {
      select?: BusinessCountAggregateInputType | true
    }
  >

  export interface BusinessDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Business'> extends True ? CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>> : CheckSelect<T, Prisma__BusinessClient<Business | null >, Prisma__BusinessClient<BusinessGetPayload<T> | null >>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Business'> extends True ? CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>> : CheckSelect<T, Prisma__BusinessClient<Business | null >, Prisma__BusinessClient<BusinessGetPayload<T> | null >>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessFindManyArgs>(
      args?: SelectSubset<T, BusinessFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Business>>, PrismaPromise<Array<BusinessGetPayload<T>>>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
    **/
    create<T extends BusinessCreateArgs>(
      args: SelectSubset<T, BusinessCreateArgs>
    ): CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>>

    /**
     * Create many Businesses.
     *     @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     *     @example
     *     // Create many Businesses
     *     const business = await prisma.business.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessCreateManyArgs>(
      args?: SelectSubset<T, BusinessCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
    **/
    delete<T extends BusinessDeleteArgs>(
      args: SelectSubset<T, BusinessDeleteArgs>
    ): CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessUpdateArgs>(
      args: SelectSubset<T, BusinessUpdateArgs>
    ): CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessDeleteManyArgs>(
      args?: SelectSubset<T, BusinessDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessUpdateManyArgs>(
      args: SelectSubset<T, BusinessUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessUpsertArgs>(
      args: SelectSubset<T, BusinessUpsertArgs>
    ): CheckSelect<T, Prisma__BusinessClient<Business>, Prisma__BusinessClient<BusinessGetPayload<T>>>

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User_Business_createdByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Business_deletedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Business_updatedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Rating<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    Landlord<T extends LandlordFindManyArgs = {}>(args?: Subset<T, LandlordFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Landlord>>, PrismaPromise<Array<LandlordGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * Throw an Error if a Business can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Business to fetch.
     * 
    **/
    where: BusinessWhereUniqueInput
  }


  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * Throw an Error if a Business can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Business to fetch.
     * 
    **/
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     * 
    **/
    orderBy?: Enumerable<BusinessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     * 
    **/
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     * 
    **/
    distinct?: Enumerable<BusinessScalarFieldEnum>
  }


  /**
   * Business findMany
   */
  export type BusinessFindManyArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * Filter, which Businesses to fetch.
     * 
    **/
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     * 
    **/
    orderBy?: Enumerable<BusinessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     * 
    **/
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BusinessScalarFieldEnum>
  }


  /**
   * Business create
   */
  export type BusinessCreateArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * The data needed to create a Business.
     * 
    **/
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }


  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs = {
    /**
     * The data used to create many Businesses.
     * 
    **/
    data: Enumerable<BusinessCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Business update
   */
  export type BusinessUpdateArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * The data needed to update a Business.
     * 
    **/
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     * 
    **/
    where: BusinessWhereUniqueInput
  }


  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs = {
    /**
     * The data used to update Businesses.
     * 
    **/
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     * 
    **/
    where?: BusinessWhereInput
  }


  /**
   * Business upsert
   */
  export type BusinessUpsertArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * The filter to search for the Business to update in case it exists.
     * 
    **/
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     * 
    **/
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }


  /**
   * Business delete
   */
  export type BusinessDeleteArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
    /**
     * Filter which Business to delete.
     * 
    **/
    where: BusinessWhereUniqueInput
  }


  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs = {
    /**
     * Filter which Businesses to delete
     * 
    **/
    where?: BusinessWhereInput
  }


  /**
   * Business without action
   */
  export type BusinessArgs = {
    /**
     * Select specific fields to fetch from the Business
     * 
    **/
    select?: BusinessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BusinessInclude | null
  }



  /**
   * Model Landlord
   */


  export type AggregateLandlord = {
    _count: LandlordCountAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  export type LandlordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type LandlordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type LandlordCountAggregateOutputType = {
    id: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedBy: number
    name: number
    isVerified: number
    _all: number
  }


  export type LandlordMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type LandlordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type LandlordCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
    _all?: true
  }

  export type LandlordAggregateArgs = {
    /**
     * Filter which Landlord to aggregate.
     * 
    **/
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     * 
    **/
    orderBy?: Enumerable<LandlordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Landlords
    **/
    _count?: true | LandlordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandlordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandlordMaxAggregateInputType
  }

  export type GetLandlordAggregateType<T extends LandlordAggregateArgs> = {
        [P in keyof T & keyof AggregateLandlord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandlord[P]>
      : GetScalarType<T[P], AggregateLandlord[P]>
  }




  export type LandlordGroupByArgs = {
    where?: LandlordWhereInput
    orderBy?: Enumerable<LandlordOrderByWithAggregationInput>
    by: Array<LandlordScalarFieldEnum>
    having?: LandlordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandlordCountAggregateInputType | true
    _min?: LandlordMinAggregateInputType
    _max?: LandlordMaxAggregateInputType
  }


  export type LandlordGroupByOutputType = {
    id: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    isDeleted: boolean
    deletedBy: string | null
    name: string
    isVerified: boolean
    _count: LandlordCountAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  type GetLandlordGroupByPayload<T extends LandlordGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LandlordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandlordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandlordGroupByOutputType[P]>
            : GetScalarType<T[P], LandlordGroupByOutputType[P]>
        }
      >
    >


  export type LandlordSelect = {
    id?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedBy?: boolean
    name?: boolean
    isVerified?: boolean
    User_Landlord_createdByToUser?: boolean | UserArgs
    User_Landlord_deletedByToUser?: boolean | UserArgs
    User_Landlord_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    Business?: boolean | BusinessFindManyArgs
    _count?: boolean | LandlordCountOutputTypeArgs
  }

  export type LandlordInclude = {
    User_Landlord_createdByToUser?: boolean | UserArgs
    User_Landlord_deletedByToUser?: boolean | UserArgs
    User_Landlord_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    Business?: boolean | BusinessFindManyArgs
    _count?: boolean | LandlordCountOutputTypeArgs
  }

  export type LandlordGetPayload<
    S extends boolean | null | undefined | LandlordArgs,
    U = keyof S
      > = S extends true
        ? Landlord
    : S extends undefined
    ? never
    : S extends LandlordArgs | LandlordFindManyArgs
    ?'include' extends U
    ? Landlord  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User_Landlord_createdByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Landlord_deletedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Landlord_updatedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends 'Business' ? Array < BusinessGetPayload<S['include'][P]>>  :
        P extends '_count' ? LandlordCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User_Landlord_createdByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Landlord_deletedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Landlord_updatedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends 'Business' ? Array < BusinessGetPayload<S['select'][P]>>  :
        P extends '_count' ? LandlordCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Landlord ? Landlord[P] : never
  } 
    : Landlord
  : Landlord


  type LandlordCountArgs = Merge<
    Omit<LandlordFindManyArgs, 'select' | 'include'> & {
      select?: LandlordCountAggregateInputType | true
    }
  >

  export interface LandlordDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Landlord that matches the filter.
     * @param {LandlordFindUniqueArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LandlordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LandlordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Landlord'> extends True ? CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>> : CheckSelect<T, Prisma__LandlordClient<Landlord | null >, Prisma__LandlordClient<LandlordGetPayload<T> | null >>

    /**
     * Find the first Landlord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindFirstArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LandlordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LandlordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Landlord'> extends True ? CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>> : CheckSelect<T, Prisma__LandlordClient<Landlord | null >, Prisma__LandlordClient<LandlordGetPayload<T> | null >>

    /**
     * Find zero or more Landlords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landlords
     * const landlords = await prisma.landlord.findMany()
     * 
     * // Get first 10 Landlords
     * const landlords = await prisma.landlord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landlordWithIdOnly = await prisma.landlord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LandlordFindManyArgs>(
      args?: SelectSubset<T, LandlordFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Landlord>>, PrismaPromise<Array<LandlordGetPayload<T>>>>

    /**
     * Create a Landlord.
     * @param {LandlordCreateArgs} args - Arguments to create a Landlord.
     * @example
     * // Create one Landlord
     * const Landlord = await prisma.landlord.create({
     *   data: {
     *     // ... data to create a Landlord
     *   }
     * })
     * 
    **/
    create<T extends LandlordCreateArgs>(
      args: SelectSubset<T, LandlordCreateArgs>
    ): CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>>

    /**
     * Create many Landlords.
     *     @param {LandlordCreateManyArgs} args - Arguments to create many Landlords.
     *     @example
     *     // Create many Landlords
     *     const landlord = await prisma.landlord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LandlordCreateManyArgs>(
      args?: SelectSubset<T, LandlordCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Landlord.
     * @param {LandlordDeleteArgs} args - Arguments to delete one Landlord.
     * @example
     * // Delete one Landlord
     * const Landlord = await prisma.landlord.delete({
     *   where: {
     *     // ... filter to delete one Landlord
     *   }
     * })
     * 
    **/
    delete<T extends LandlordDeleteArgs>(
      args: SelectSubset<T, LandlordDeleteArgs>
    ): CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>>

    /**
     * Update one Landlord.
     * @param {LandlordUpdateArgs} args - Arguments to update one Landlord.
     * @example
     * // Update one Landlord
     * const landlord = await prisma.landlord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LandlordUpdateArgs>(
      args: SelectSubset<T, LandlordUpdateArgs>
    ): CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>>

    /**
     * Delete zero or more Landlords.
     * @param {LandlordDeleteManyArgs} args - Arguments to filter Landlords to delete.
     * @example
     * // Delete a few Landlords
     * const { count } = await prisma.landlord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LandlordDeleteManyArgs>(
      args?: SelectSubset<T, LandlordDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landlords
     * const landlord = await prisma.landlord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LandlordUpdateManyArgs>(
      args: SelectSubset<T, LandlordUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Landlord.
     * @param {LandlordUpsertArgs} args - Arguments to update or create a Landlord.
     * @example
     * // Update or create a Landlord
     * const landlord = await prisma.landlord.upsert({
     *   create: {
     *     // ... data to create a Landlord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landlord we want to update
     *   }
     * })
    **/
    upsert<T extends LandlordUpsertArgs>(
      args: SelectSubset<T, LandlordUpsertArgs>
    ): CheckSelect<T, Prisma__LandlordClient<Landlord>, Prisma__LandlordClient<LandlordGetPayload<T>>>

    /**
     * Count the number of Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordCountArgs} args - Arguments to filter Landlords to count.
     * @example
     * // Count the number of Landlords
     * const count = await prisma.landlord.count({
     *   where: {
     *     // ... the filter for the Landlords we want to count
     *   }
     * })
    **/
    count<T extends LandlordCountArgs>(
      args?: Subset<T, LandlordCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandlordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandlordAggregateArgs>(args: Subset<T, LandlordAggregateArgs>): PrismaPromise<GetLandlordAggregateType<T>>

    /**
     * Group by Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandlordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandlordGroupByArgs['orderBy'] }
        : { orderBy?: LandlordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandlordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandlordGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landlord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LandlordClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User_Landlord_createdByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Landlord_deletedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Landlord_updatedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Rating<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    Business<T extends BusinessFindManyArgs = {}>(args?: Subset<T, BusinessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Business>>, PrismaPromise<Array<BusinessGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Landlord findUnique
   */
  export type LandlordFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * Throw an Error if a Landlord can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Landlord to fetch.
     * 
    **/
    where: LandlordWhereUniqueInput
  }


  /**
   * Landlord findFirst
   */
  export type LandlordFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * Throw an Error if a Landlord can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Landlord to fetch.
     * 
    **/
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     * 
    **/
    orderBy?: Enumerable<LandlordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landlords.
     * 
    **/
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landlords.
     * 
    **/
    distinct?: Enumerable<LandlordScalarFieldEnum>
  }


  /**
   * Landlord findMany
   */
  export type LandlordFindManyArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * Filter, which Landlords to fetch.
     * 
    **/
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     * 
    **/
    orderBy?: Enumerable<LandlordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Landlords.
     * 
    **/
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LandlordScalarFieldEnum>
  }


  /**
   * Landlord create
   */
  export type LandlordCreateArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * The data needed to create a Landlord.
     * 
    **/
    data: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
  }


  /**
   * Landlord createMany
   */
  export type LandlordCreateManyArgs = {
    /**
     * The data used to create many Landlords.
     * 
    **/
    data: Enumerable<LandlordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Landlord update
   */
  export type LandlordUpdateArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * The data needed to update a Landlord.
     * 
    **/
    data: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
    /**
     * Choose, which Landlord to update.
     * 
    **/
    where: LandlordWhereUniqueInput
  }


  /**
   * Landlord updateMany
   */
  export type LandlordUpdateManyArgs = {
    /**
     * The data used to update Landlords.
     * 
    **/
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyInput>
    /**
     * Filter which Landlords to update
     * 
    **/
    where?: LandlordWhereInput
  }


  /**
   * Landlord upsert
   */
  export type LandlordUpsertArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * The filter to search for the Landlord to update in case it exists.
     * 
    **/
    where: LandlordWhereUniqueInput
    /**
     * In case the Landlord found by the `where` argument doesn't exist, create a new Landlord with this data.
     * 
    **/
    create: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
    /**
     * In case the Landlord was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
  }


  /**
   * Landlord delete
   */
  export type LandlordDeleteArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
    /**
     * Filter which Landlord to delete.
     * 
    **/
    where: LandlordWhereUniqueInput
  }


  /**
   * Landlord deleteMany
   */
  export type LandlordDeleteManyArgs = {
    /**
     * Filter which Landlords to delete
     * 
    **/
    where?: LandlordWhereInput
  }


  /**
   * Landlord without action
   */
  export type LandlordArgs = {
    /**
     * Select specific fields to fetch from the Landlord
     * 
    **/
    select?: LandlordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LandlordInclude | null
  }



  /**
   * Model PropertyManagementCompany
   */


  export type AggregatePropertyManagementCompany = {
    _count: PropertyManagementCompanyCountAggregateOutputType | null
    _min: PropertyManagementCompanyMinAggregateOutputType | null
    _max: PropertyManagementCompanyMaxAggregateOutputType | null
  }

  export type PropertyManagementCompanyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type PropertyManagementCompanyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    name: string | null
    isVerified: boolean | null
  }

  export type PropertyManagementCompanyCountAggregateOutputType = {
    id: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedBy: number
    name: number
    isVerified: number
    _all: number
  }


  export type PropertyManagementCompanyMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type PropertyManagementCompanyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
  }

  export type PropertyManagementCompanyCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    name?: true
    isVerified?: true
    _all?: true
  }

  export type PropertyManagementCompanyAggregateArgs = {
    /**
     * Filter which PropertyManagementCompany to aggregate.
     * 
    **/
    where?: PropertyManagementCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyManagementCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyManagementCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PropertyManagementCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyManagementCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyManagementCompanies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyManagementCompanies
    **/
    _count?: true | PropertyManagementCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyManagementCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyManagementCompanyMaxAggregateInputType
  }

  export type GetPropertyManagementCompanyAggregateType<T extends PropertyManagementCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyManagementCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyManagementCompany[P]>
      : GetScalarType<T[P], AggregatePropertyManagementCompany[P]>
  }




  export type PropertyManagementCompanyGroupByArgs = {
    where?: PropertyManagementCompanyWhereInput
    orderBy?: Enumerable<PropertyManagementCompanyOrderByWithAggregationInput>
    by: Array<PropertyManagementCompanyScalarFieldEnum>
    having?: PropertyManagementCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyManagementCompanyCountAggregateInputType | true
    _min?: PropertyManagementCompanyMinAggregateInputType
    _max?: PropertyManagementCompanyMaxAggregateInputType
  }


  export type PropertyManagementCompanyGroupByOutputType = {
    id: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    isDeleted: boolean
    deletedBy: string | null
    name: string
    isVerified: boolean
    _count: PropertyManagementCompanyCountAggregateOutputType | null
    _min: PropertyManagementCompanyMinAggregateOutputType | null
    _max: PropertyManagementCompanyMaxAggregateOutputType | null
  }

  type GetPropertyManagementCompanyGroupByPayload<T extends PropertyManagementCompanyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PropertyManagementCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyManagementCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyManagementCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyManagementCompanyGroupByOutputType[P]>
        }
      >
    >


  export type PropertyManagementCompanySelect = {
    id?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedBy?: boolean
    name?: boolean
    isVerified?: boolean
    User_PropertyManagementCompany_createdByToUser?: boolean | UserArgs
    User_PropertyManagementCompany_deletedByToUser?: boolean | UserArgs
    User_PropertyManagementCompany_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    _count?: boolean | PropertyManagementCompanyCountOutputTypeArgs
  }

  export type PropertyManagementCompanyInclude = {
    User_PropertyManagementCompany_createdByToUser?: boolean | UserArgs
    User_PropertyManagementCompany_deletedByToUser?: boolean | UserArgs
    User_PropertyManagementCompany_updatedByToUser?: boolean | UserArgs
    Rating?: boolean | RatingFindManyArgs
    _count?: boolean | PropertyManagementCompanyCountOutputTypeArgs
  }

  export type PropertyManagementCompanyGetPayload<
    S extends boolean | null | undefined | PropertyManagementCompanyArgs,
    U = keyof S
      > = S extends true
        ? PropertyManagementCompany
    : S extends undefined
    ? never
    : S extends PropertyManagementCompanyArgs | PropertyManagementCompanyFindManyArgs
    ?'include' extends U
    ? PropertyManagementCompany  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User_PropertyManagementCompany_createdByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_PropertyManagementCompany_deletedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_PropertyManagementCompany_updatedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends '_count' ? PropertyManagementCompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User_PropertyManagementCompany_createdByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_PropertyManagementCompany_deletedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_PropertyManagementCompany_updatedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Rating' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends '_count' ? PropertyManagementCompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PropertyManagementCompany ? PropertyManagementCompany[P] : never
  } 
    : PropertyManagementCompany
  : PropertyManagementCompany


  type PropertyManagementCompanyCountArgs = Merge<
    Omit<PropertyManagementCompanyFindManyArgs, 'select' | 'include'> & {
      select?: PropertyManagementCompanyCountAggregateInputType | true
    }
  >

  export interface PropertyManagementCompanyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PropertyManagementCompany that matches the filter.
     * @param {PropertyManagementCompanyFindUniqueArgs} args - Arguments to find a PropertyManagementCompany
     * @example
     * // Get one PropertyManagementCompany
     * const propertyManagementCompany = await prisma.propertyManagementCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyManagementCompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PropertyManagementCompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PropertyManagementCompany'> extends True ? CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany | null >, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T> | null >>

    /**
     * Find the first PropertyManagementCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyFindFirstArgs} args - Arguments to find a PropertyManagementCompany
     * @example
     * // Get one PropertyManagementCompany
     * const propertyManagementCompany = await prisma.propertyManagementCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyManagementCompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PropertyManagementCompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PropertyManagementCompany'> extends True ? CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany | null >, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T> | null >>

    /**
     * Find zero or more PropertyManagementCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyManagementCompanies
     * const propertyManagementCompanies = await prisma.propertyManagementCompany.findMany()
     * 
     * // Get first 10 PropertyManagementCompanies
     * const propertyManagementCompanies = await prisma.propertyManagementCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyManagementCompanyWithIdOnly = await prisma.propertyManagementCompany.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyManagementCompanyFindManyArgs>(
      args?: SelectSubset<T, PropertyManagementCompanyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PropertyManagementCompany>>, PrismaPromise<Array<PropertyManagementCompanyGetPayload<T>>>>

    /**
     * Create a PropertyManagementCompany.
     * @param {PropertyManagementCompanyCreateArgs} args - Arguments to create a PropertyManagementCompany.
     * @example
     * // Create one PropertyManagementCompany
     * const PropertyManagementCompany = await prisma.propertyManagementCompany.create({
     *   data: {
     *     // ... data to create a PropertyManagementCompany
     *   }
     * })
     * 
    **/
    create<T extends PropertyManagementCompanyCreateArgs>(
      args: SelectSubset<T, PropertyManagementCompanyCreateArgs>
    ): CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>>

    /**
     * Create many PropertyManagementCompanies.
     *     @param {PropertyManagementCompanyCreateManyArgs} args - Arguments to create many PropertyManagementCompanies.
     *     @example
     *     // Create many PropertyManagementCompanies
     *     const propertyManagementCompany = await prisma.propertyManagementCompany.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyManagementCompanyCreateManyArgs>(
      args?: SelectSubset<T, PropertyManagementCompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyManagementCompany.
     * @param {PropertyManagementCompanyDeleteArgs} args - Arguments to delete one PropertyManagementCompany.
     * @example
     * // Delete one PropertyManagementCompany
     * const PropertyManagementCompany = await prisma.propertyManagementCompany.delete({
     *   where: {
     *     // ... filter to delete one PropertyManagementCompany
     *   }
     * })
     * 
    **/
    delete<T extends PropertyManagementCompanyDeleteArgs>(
      args: SelectSubset<T, PropertyManagementCompanyDeleteArgs>
    ): CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>>

    /**
     * Update one PropertyManagementCompany.
     * @param {PropertyManagementCompanyUpdateArgs} args - Arguments to update one PropertyManagementCompany.
     * @example
     * // Update one PropertyManagementCompany
     * const propertyManagementCompany = await prisma.propertyManagementCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyManagementCompanyUpdateArgs>(
      args: SelectSubset<T, PropertyManagementCompanyUpdateArgs>
    ): CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>>

    /**
     * Delete zero or more PropertyManagementCompanies.
     * @param {PropertyManagementCompanyDeleteManyArgs} args - Arguments to filter PropertyManagementCompanies to delete.
     * @example
     * // Delete a few PropertyManagementCompanies
     * const { count } = await prisma.propertyManagementCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyManagementCompanyDeleteManyArgs>(
      args?: SelectSubset<T, PropertyManagementCompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyManagementCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyManagementCompanies
     * const propertyManagementCompany = await prisma.propertyManagementCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyManagementCompanyUpdateManyArgs>(
      args: SelectSubset<T, PropertyManagementCompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyManagementCompany.
     * @param {PropertyManagementCompanyUpsertArgs} args - Arguments to update or create a PropertyManagementCompany.
     * @example
     * // Update or create a PropertyManagementCompany
     * const propertyManagementCompany = await prisma.propertyManagementCompany.upsert({
     *   create: {
     *     // ... data to create a PropertyManagementCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyManagementCompany we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyManagementCompanyUpsertArgs>(
      args: SelectSubset<T, PropertyManagementCompanyUpsertArgs>
    ): CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany>, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T>>>

    /**
     * Count the number of PropertyManagementCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyCountArgs} args - Arguments to filter PropertyManagementCompanies to count.
     * @example
     * // Count the number of PropertyManagementCompanies
     * const count = await prisma.propertyManagementCompany.count({
     *   where: {
     *     // ... the filter for the PropertyManagementCompanies we want to count
     *   }
     * })
    **/
    count<T extends PropertyManagementCompanyCountArgs>(
      args?: Subset<T, PropertyManagementCompanyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyManagementCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyManagementCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyManagementCompanyAggregateArgs>(args: Subset<T, PropertyManagementCompanyAggregateArgs>): PrismaPromise<GetPropertyManagementCompanyAggregateType<T>>

    /**
     * Group by PropertyManagementCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyManagementCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyManagementCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyManagementCompanyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyManagementCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyManagementCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyManagementCompanyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyManagementCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PropertyManagementCompanyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User_PropertyManagementCompany_createdByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_PropertyManagementCompany_deletedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_PropertyManagementCompany_updatedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Rating<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PropertyManagementCompany findUnique
   */
  export type PropertyManagementCompanyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * Throw an Error if a PropertyManagementCompany can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PropertyManagementCompany to fetch.
     * 
    **/
    where: PropertyManagementCompanyWhereUniqueInput
  }


  /**
   * PropertyManagementCompany findFirst
   */
  export type PropertyManagementCompanyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * Throw an Error if a PropertyManagementCompany can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PropertyManagementCompany to fetch.
     * 
    **/
    where?: PropertyManagementCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyManagementCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyManagementCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyManagementCompanies.
     * 
    **/
    cursor?: PropertyManagementCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyManagementCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyManagementCompanies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyManagementCompanies.
     * 
    **/
    distinct?: Enumerable<PropertyManagementCompanyScalarFieldEnum>
  }


  /**
   * PropertyManagementCompany findMany
   */
  export type PropertyManagementCompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * Filter, which PropertyManagementCompanies to fetch.
     * 
    **/
    where?: PropertyManagementCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyManagementCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyManagementCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyManagementCompanies.
     * 
    **/
    cursor?: PropertyManagementCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyManagementCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyManagementCompanies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PropertyManagementCompanyScalarFieldEnum>
  }


  /**
   * PropertyManagementCompany create
   */
  export type PropertyManagementCompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * The data needed to create a PropertyManagementCompany.
     * 
    **/
    data: XOR<PropertyManagementCompanyCreateInput, PropertyManagementCompanyUncheckedCreateInput>
  }


  /**
   * PropertyManagementCompany createMany
   */
  export type PropertyManagementCompanyCreateManyArgs = {
    /**
     * The data used to create many PropertyManagementCompanies.
     * 
    **/
    data: Enumerable<PropertyManagementCompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PropertyManagementCompany update
   */
  export type PropertyManagementCompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * The data needed to update a PropertyManagementCompany.
     * 
    **/
    data: XOR<PropertyManagementCompanyUpdateInput, PropertyManagementCompanyUncheckedUpdateInput>
    /**
     * Choose, which PropertyManagementCompany to update.
     * 
    **/
    where: PropertyManagementCompanyWhereUniqueInput
  }


  /**
   * PropertyManagementCompany updateMany
   */
  export type PropertyManagementCompanyUpdateManyArgs = {
    /**
     * The data used to update PropertyManagementCompanies.
     * 
    **/
    data: XOR<PropertyManagementCompanyUpdateManyMutationInput, PropertyManagementCompanyUncheckedUpdateManyInput>
    /**
     * Filter which PropertyManagementCompanies to update
     * 
    **/
    where?: PropertyManagementCompanyWhereInput
  }


  /**
   * PropertyManagementCompany upsert
   */
  export type PropertyManagementCompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * The filter to search for the PropertyManagementCompany to update in case it exists.
     * 
    **/
    where: PropertyManagementCompanyWhereUniqueInput
    /**
     * In case the PropertyManagementCompany found by the `where` argument doesn't exist, create a new PropertyManagementCompany with this data.
     * 
    **/
    create: XOR<PropertyManagementCompanyCreateInput, PropertyManagementCompanyUncheckedCreateInput>
    /**
     * In case the PropertyManagementCompany was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PropertyManagementCompanyUpdateInput, PropertyManagementCompanyUncheckedUpdateInput>
  }


  /**
   * PropertyManagementCompany delete
   */
  export type PropertyManagementCompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
    /**
     * Filter which PropertyManagementCompany to delete.
     * 
    **/
    where: PropertyManagementCompanyWhereUniqueInput
  }


  /**
   * PropertyManagementCompany deleteMany
   */
  export type PropertyManagementCompanyDeleteManyArgs = {
    /**
     * Filter which PropertyManagementCompanies to delete
     * 
    **/
    where?: PropertyManagementCompanyWhereInput
  }


  /**
   * PropertyManagementCompany without action
   */
  export type PropertyManagementCompanyArgs = {
    /**
     * Select specific fields to fetch from the PropertyManagementCompany
     * 
    **/
    select?: PropertyManagementCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyManagementCompanyInclude | null
  }



  /**
   * Model Rating
   */


  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    sentiment: number | null
    rentPrice: number | null
  }

  export type RatingSumAggregateOutputType = {
    sentiment: number | null
    rentPrice: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    address: string | null
    landlordAtDateOfRating: string | null
    doingBusinessAsAtDateOfRating: string | null
    propertyManagementCompanyAtDateOfRating: string | null
    sentiment: number | null
    rentPrice: number | null
    tenancyEndDate: Date | null
    tenancyStartDate: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    isDeleted: boolean | null
    deletedBy: string | null
    address: string | null
    landlordAtDateOfRating: string | null
    doingBusinessAsAtDateOfRating: string | null
    propertyManagementCompanyAtDateOfRating: string | null
    sentiment: number | null
    rentPrice: number | null
    tenancyEndDate: Date | null
    tenancyStartDate: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedBy: number
    address: number
    landlordAtDateOfRating: number
    doingBusinessAsAtDateOfRating: number
    propertyManagementCompanyAtDateOfRating: number
    sentiment: number
    rentPrice: number
    body: number
    tenancyEndDate: number
    tenancyStartDate: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    sentiment?: true
    rentPrice?: true
  }

  export type RatingSumAggregateInputType = {
    sentiment?: true
    rentPrice?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    address?: true
    landlordAtDateOfRating?: true
    doingBusinessAsAtDateOfRating?: true
    propertyManagementCompanyAtDateOfRating?: true
    sentiment?: true
    rentPrice?: true
    tenancyEndDate?: true
    tenancyStartDate?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    address?: true
    landlordAtDateOfRating?: true
    doingBusinessAsAtDateOfRating?: true
    propertyManagementCompanyAtDateOfRating?: true
    sentiment?: true
    rentPrice?: true
    tenancyEndDate?: true
    tenancyStartDate?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedBy?: true
    address?: true
    landlordAtDateOfRating?: true
    doingBusinessAsAtDateOfRating?: true
    propertyManagementCompanyAtDateOfRating?: true
    sentiment?: true
    rentPrice?: true
    body?: true
    tenancyEndDate?: true
    tenancyStartDate?: true
    _all?: true
  }

  export type RatingAggregateArgs = {
    /**
     * Filter which Rating to aggregate.
     * 
    **/
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs = {
    where?: RatingWhereInput
    orderBy?: Enumerable<RatingOrderByWithAggregationInput>
    by: Array<RatingScalarFieldEnum>
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }


  export type RatingGroupByOutputType = {
    id: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    isDeleted: boolean
    deletedBy: string | null
    address: string | null
    landlordAtDateOfRating: string | null
    doingBusinessAsAtDateOfRating: string | null
    propertyManagementCompanyAtDateOfRating: string | null
    sentiment: number | null
    rentPrice: number
    body: JsonValue | null
    tenancyEndDate: Date | null
    tenancyStartDate: Date | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect = {
    id?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedBy?: boolean
    address?: boolean
    landlordAtDateOfRating?: boolean
    doingBusinessAsAtDateOfRating?: boolean
    propertyManagementCompanyAtDateOfRating?: boolean
    sentiment?: boolean
    rentPrice?: boolean
    body?: boolean
    tenancyEndDate?: boolean
    tenancyStartDate?: boolean
    Address?: boolean | AddressArgs
    User_Rating_createdByToUser?: boolean | UserArgs
    User_Rating_deletedByToUser?: boolean | UserArgs
    Business?: boolean | BusinessArgs
    Landlord?: boolean | LandlordArgs
    PropertyManagementCompany?: boolean | PropertyManagementCompanyArgs
    User_Rating_updatedByToUser?: boolean | UserArgs
  }

  export type RatingInclude = {
    Address?: boolean | AddressArgs
    User_Rating_createdByToUser?: boolean | UserArgs
    User_Rating_deletedByToUser?: boolean | UserArgs
    Business?: boolean | BusinessArgs
    Landlord?: boolean | LandlordArgs
    PropertyManagementCompany?: boolean | PropertyManagementCompanyArgs
    User_Rating_updatedByToUser?: boolean | UserArgs
  }

  export type RatingGetPayload<
    S extends boolean | null | undefined | RatingArgs,
    U = keyof S
      > = S extends true
        ? Rating
    : S extends undefined
    ? never
    : S extends RatingArgs | RatingFindManyArgs
    ?'include' extends U
    ? Rating  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Address' ? AddressGetPayload<S['include'][P]> | null :
        P extends 'User_Rating_createdByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'User_Rating_deletedByToUser' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Business' ? BusinessGetPayload<S['include'][P]> | null :
        P extends 'Landlord' ? LandlordGetPayload<S['include'][P]> | null :
        P extends 'PropertyManagementCompany' ? PropertyManagementCompanyGetPayload<S['include'][P]> | null :
        P extends 'User_Rating_updatedByToUser' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Address' ? AddressGetPayload<S['select'][P]> | null :
        P extends 'User_Rating_createdByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'User_Rating_deletedByToUser' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Business' ? BusinessGetPayload<S['select'][P]> | null :
        P extends 'Landlord' ? LandlordGetPayload<S['select'][P]> | null :
        P extends 'PropertyManagementCompany' ? PropertyManagementCompanyGetPayload<S['select'][P]> | null :
        P extends 'User_Rating_updatedByToUser' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Rating ? Rating[P] : never
  } 
    : Rating
  : Rating


  type RatingCountArgs = Merge<
    Omit<RatingFindManyArgs, 'select' | 'include'> & {
      select?: RatingCountAggregateInputType | true
    }
  >

  export interface RatingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RatingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RatingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rating'> extends True ? CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>> : CheckSelect<T, Prisma__RatingClient<Rating | null >, Prisma__RatingClient<RatingGetPayload<T> | null >>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RatingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RatingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rating'> extends True ? CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>> : CheckSelect<T, Prisma__RatingClient<Rating | null >, Prisma__RatingClient<RatingGetPayload<T> | null >>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RatingFindManyArgs>(
      args?: SelectSubset<T, RatingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
    **/
    create<T extends RatingCreateArgs>(
      args: SelectSubset<T, RatingCreateArgs>
    ): CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>>

    /**
     * Create many Ratings.
     *     @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     *     @example
     *     // Create many Ratings
     *     const rating = await prisma.rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RatingCreateManyArgs>(
      args?: SelectSubset<T, RatingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
    **/
    delete<T extends RatingDeleteArgs>(
      args: SelectSubset<T, RatingDeleteArgs>
    ): CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RatingUpdateArgs>(
      args: SelectSubset<T, RatingUpdateArgs>
    ): CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RatingDeleteManyArgs>(
      args?: SelectSubset<T, RatingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RatingUpdateManyArgs>(
      args: SelectSubset<T, RatingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
    **/
    upsert<T extends RatingUpsertArgs>(
      args: SelectSubset<T, RatingUpsertArgs>
    ): CheckSelect<T, Prisma__RatingClient<Rating>, Prisma__RatingClient<RatingGetPayload<T>>>

    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RatingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Address<T extends AddressArgs = {}>(args?: Subset<T, AddressArgs>): CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>;

    User_Rating_createdByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    User_Rating_deletedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Business<T extends BusinessArgs = {}>(args?: Subset<T, BusinessArgs>): CheckSelect<T, Prisma__BusinessClient<Business | null >, Prisma__BusinessClient<BusinessGetPayload<T> | null >>;

    Landlord<T extends LandlordArgs = {}>(args?: Subset<T, LandlordArgs>): CheckSelect<T, Prisma__LandlordClient<Landlord | null >, Prisma__LandlordClient<LandlordGetPayload<T> | null >>;

    PropertyManagementCompany<T extends PropertyManagementCompanyArgs = {}>(args?: Subset<T, PropertyManagementCompanyArgs>): CheckSelect<T, Prisma__PropertyManagementCompanyClient<PropertyManagementCompany | null >, Prisma__PropertyManagementCompanyClient<PropertyManagementCompanyGetPayload<T> | null >>;

    User_Rating_updatedByToUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * Throw an Error if a Rating can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Rating to fetch.
     * 
    **/
    where: RatingWhereUniqueInput
  }


  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * Throw an Error if a Rating can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Rating to fetch.
     * 
    **/
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     * 
    **/
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     * 
    **/
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * Rating findMany
   */
  export type RatingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * Filter, which Ratings to fetch.
     * 
    **/
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     * 
    **/
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * Rating create
   */
  export type RatingCreateArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * The data needed to create a Rating.
     * 
    **/
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }


  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs = {
    /**
     * The data used to create many Ratings.
     * 
    **/
    data: Enumerable<RatingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rating update
   */
  export type RatingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * The data needed to update a Rating.
     * 
    **/
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     * 
    **/
    where: RatingWhereUniqueInput
  }


  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs = {
    /**
     * The data used to update Ratings.
     * 
    **/
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     * 
    **/
    where?: RatingWhereInput
  }


  /**
   * Rating upsert
   */
  export type RatingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * The filter to search for the Rating to update in case it exists.
     * 
    **/
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     * 
    **/
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }


  /**
   * Rating delete
   */
  export type RatingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
    /**
     * Filter which Rating to delete.
     * 
    **/
    where: RatingWhereUniqueInput
  }


  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs = {
    /**
     * Filter which Ratings to delete
     * 
    **/
    where?: RatingWhereInput
  }


  /**
   * Rating without action
   */
  export type RatingArgs = {
    /**
     * Select specific fields to fetch from the Rating
     * 
    **/
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RatingInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    banned: boolean | null
    password: string | null
    role: UserRoleType | null
    createdAt: Date | null
    isEnrolledInAddressModeration: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    banned: boolean | null
    password: string | null
    role: UserRoleType | null
    createdAt: Date | null
    isEnrolledInAddressModeration: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    banned: number
    password: number
    role: number
    createdAt: number
    isEnrolledInAddressModeration: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    banned?: true
    password?: true
    role?: true
    createdAt?: true
    isEnrolledInAddressModeration?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    banned?: true
    password?: true
    role?: true
    createdAt?: true
    isEnrolledInAddressModeration?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    banned?: true
    password?: true
    role?: true
    createdAt?: true
    isEnrolledInAddressModeration?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    banned: boolean
    password: string
    role: UserRoleType | null
    createdAt: Date | null
    isEnrolledInAddressModeration: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    banned?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: boolean | AddressFindManyArgs
    Address_Address_deletedByToUser?: boolean | AddressFindManyArgs
    Address_Address_updatedByToUser?: boolean | AddressFindManyArgs
    Business_Business_createdByToUser?: boolean | BusinessFindManyArgs
    Business_Business_deletedByToUser?: boolean | BusinessFindManyArgs
    Business_Business_updatedByToUser?: boolean | BusinessFindManyArgs
    Landlord_Landlord_createdByToUser?: boolean | LandlordFindManyArgs
    Landlord_Landlord_deletedByToUser?: boolean | LandlordFindManyArgs
    Landlord_Landlord_updatedByToUser?: boolean | LandlordFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    Rating_Rating_createdByToUser?: boolean | RatingFindManyArgs
    Rating_Rating_deletedByToUser?: boolean | RatingFindManyArgs
    Rating_Rating_updatedByToUser?: boolean | RatingFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Address_Address_createdByToUser?: boolean | AddressFindManyArgs
    Address_Address_deletedByToUser?: boolean | AddressFindManyArgs
    Address_Address_updatedByToUser?: boolean | AddressFindManyArgs
    Business_Business_createdByToUser?: boolean | BusinessFindManyArgs
    Business_Business_deletedByToUser?: boolean | BusinessFindManyArgs
    Business_Business_updatedByToUser?: boolean | BusinessFindManyArgs
    Landlord_Landlord_createdByToUser?: boolean | LandlordFindManyArgs
    Landlord_Landlord_deletedByToUser?: boolean | LandlordFindManyArgs
    Landlord_Landlord_updatedByToUser?: boolean | LandlordFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: boolean | PropertyManagementCompanyFindManyArgs
    Rating_Rating_createdByToUser?: boolean | RatingFindManyArgs
    Rating_Rating_deletedByToUser?: boolean | RatingFindManyArgs
    Rating_Rating_updatedByToUser?: boolean | RatingFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Address_Address_createdByToUser' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends 'Address_Address_deletedByToUser' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends 'Address_Address_updatedByToUser' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends 'Business_Business_createdByToUser' ? Array < BusinessGetPayload<S['include'][P]>>  :
        P extends 'Business_Business_deletedByToUser' ? Array < BusinessGetPayload<S['include'][P]>>  :
        P extends 'Business_Business_updatedByToUser' ? Array < BusinessGetPayload<S['include'][P]>>  :
        P extends 'Landlord_Landlord_createdByToUser' ? Array < LandlordGetPayload<S['include'][P]>>  :
        P extends 'Landlord_Landlord_deletedByToUser' ? Array < LandlordGetPayload<S['include'][P]>>  :
        P extends 'Landlord_Landlord_updatedByToUser' ? Array < LandlordGetPayload<S['include'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_createdByToUser' ? Array < PropertyManagementCompanyGetPayload<S['include'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_deletedByToUser' ? Array < PropertyManagementCompanyGetPayload<S['include'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_updatedByToUser' ? Array < PropertyManagementCompanyGetPayload<S['include'][P]>>  :
        P extends 'Rating_Rating_createdByToUser' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends 'Rating_Rating_deletedByToUser' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends 'Rating_Rating_updatedByToUser' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Address_Address_createdByToUser' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends 'Address_Address_deletedByToUser' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends 'Address_Address_updatedByToUser' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends 'Business_Business_createdByToUser' ? Array < BusinessGetPayload<S['select'][P]>>  :
        P extends 'Business_Business_deletedByToUser' ? Array < BusinessGetPayload<S['select'][P]>>  :
        P extends 'Business_Business_updatedByToUser' ? Array < BusinessGetPayload<S['select'][P]>>  :
        P extends 'Landlord_Landlord_createdByToUser' ? Array < LandlordGetPayload<S['select'][P]>>  :
        P extends 'Landlord_Landlord_deletedByToUser' ? Array < LandlordGetPayload<S['select'][P]>>  :
        P extends 'Landlord_Landlord_updatedByToUser' ? Array < LandlordGetPayload<S['select'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_createdByToUser' ? Array < PropertyManagementCompanyGetPayload<S['select'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_deletedByToUser' ? Array < PropertyManagementCompanyGetPayload<S['select'][P]>>  :
        P extends 'PropertyManagementCompany_PropertyManagementCompany_updatedByToUser' ? Array < PropertyManagementCompanyGetPayload<S['select'][P]>>  :
        P extends 'Rating_Rating_createdByToUser' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends 'Rating_Rating_deletedByToUser' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends 'Rating_Rating_updatedByToUser' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Address_Address_createdByToUser<T extends AddressFindManyArgs = {}>(args?: Subset<T, AddressFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>;

    Address_Address_deletedByToUser<T extends AddressFindManyArgs = {}>(args?: Subset<T, AddressFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>;

    Address_Address_updatedByToUser<T extends AddressFindManyArgs = {}>(args?: Subset<T, AddressFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>;

    Business_Business_createdByToUser<T extends BusinessFindManyArgs = {}>(args?: Subset<T, BusinessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Business>>, PrismaPromise<Array<BusinessGetPayload<T>>>>;

    Business_Business_deletedByToUser<T extends BusinessFindManyArgs = {}>(args?: Subset<T, BusinessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Business>>, PrismaPromise<Array<BusinessGetPayload<T>>>>;

    Business_Business_updatedByToUser<T extends BusinessFindManyArgs = {}>(args?: Subset<T, BusinessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Business>>, PrismaPromise<Array<BusinessGetPayload<T>>>>;

    Landlord_Landlord_createdByToUser<T extends LandlordFindManyArgs = {}>(args?: Subset<T, LandlordFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Landlord>>, PrismaPromise<Array<LandlordGetPayload<T>>>>;

    Landlord_Landlord_deletedByToUser<T extends LandlordFindManyArgs = {}>(args?: Subset<T, LandlordFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Landlord>>, PrismaPromise<Array<LandlordGetPayload<T>>>>;

    Landlord_Landlord_updatedByToUser<T extends LandlordFindManyArgs = {}>(args?: Subset<T, LandlordFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Landlord>>, PrismaPromise<Array<LandlordGetPayload<T>>>>;

    PropertyManagementCompany_PropertyManagementCompany_createdByToUser<T extends PropertyManagementCompanyFindManyArgs = {}>(args?: Subset<T, PropertyManagementCompanyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PropertyManagementCompany>>, PrismaPromise<Array<PropertyManagementCompanyGetPayload<T>>>>;

    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser<T extends PropertyManagementCompanyFindManyArgs = {}>(args?: Subset<T, PropertyManagementCompanyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PropertyManagementCompany>>, PrismaPromise<Array<PropertyManagementCompanyGetPayload<T>>>>;

    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser<T extends PropertyManagementCompanyFindManyArgs = {}>(args?: Subset<T, PropertyManagementCompanyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PropertyManagementCompany>>, PrismaPromise<Array<PropertyManagementCompanyGetPayload<T>>>>;

    Rating_Rating_createdByToUser<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    Rating_Rating_deletedByToUser<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    Rating_Rating_updatedByToUser<T extends RatingFindManyArgs = {}>(args?: Subset<T, RatingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Rating>>, PrismaPromise<Array<RatingGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
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
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedBy: 'deletedBy',
    name: 'name',
    isVerified: 'isVerified'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const LandlordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedBy: 'deletedBy',
    name: 'name',
    isVerified: 'isVerified'
  };

  export type LandlordScalarFieldEnum = (typeof LandlordScalarFieldEnum)[keyof typeof LandlordScalarFieldEnum]


  export const PropertyManagementCompanyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedBy: 'deletedBy',
    name: 'name',
    isVerified: 'isVerified'
  };

  export type PropertyManagementCompanyScalarFieldEnum = (typeof PropertyManagementCompanyScalarFieldEnum)[keyof typeof PropertyManagementCompanyScalarFieldEnum]


  export const RatingScalarFieldEnum: {
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
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    banned: 'banned',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    isEnrolledInAddressModeration: 'isEnrolledInAddressModeration'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    isVerified?: BoolFilter | boolean
    full?: StringFilter | string
    line1?: StringFilter | string
    line2?: StringFilter | string
    line3?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    countryCode?: StringFilter | string
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
    User_Address_createdByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Address_deletedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Address_updatedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    Rating?: RatingListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    isVerified?: SortOrder
    full?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    line3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    User_Address_createdByToUser?: UserOrderByWithRelationInput
    User_Address_deletedByToUser?: UserOrderByWithRelationInput
    User_Address_updatedByToUser?: UserOrderByWithRelationInput
    Rating?: RatingOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = {
    id?: string
    full?: string
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    isVerified?: SortOrder
    full?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    line3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    deletedBy?: StringNullableWithAggregatesFilter | string | null
    isVerified?: BoolWithAggregatesFilter | boolean
    full?: StringWithAggregatesFilter | string
    line1?: StringWithAggregatesFilter | string
    line2?: StringWithAggregatesFilter | string
    line3?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    zip?: StringWithAggregatesFilter | string
    countryCode?: StringWithAggregatesFilter | string
    latitude?: FloatWithAggregatesFilter | number
    longitude?: FloatWithAggregatesFilter | number
  }

  export type BusinessWhereInput = {
    AND?: Enumerable<BusinessWhereInput>
    OR?: Enumerable<BusinessWhereInput>
    NOT?: Enumerable<BusinessWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
    User_Business_createdByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Business_deletedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Business_updatedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    Rating?: RatingListRelationFilter
    Landlord?: LandlordListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    User_Business_createdByToUser?: UserOrderByWithRelationInput
    User_Business_deletedByToUser?: UserOrderByWithRelationInput
    User_Business_updatedByToUser?: UserOrderByWithRelationInput
    Rating?: RatingOrderByRelationAggregateInput
    Landlord?: LandlordOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = {
    id?: string
  }

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    deletedBy?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    isVerified?: BoolWithAggregatesFilter | boolean
  }

  export type LandlordWhereInput = {
    AND?: Enumerable<LandlordWhereInput>
    OR?: Enumerable<LandlordWhereInput>
    NOT?: Enumerable<LandlordWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
    User_Landlord_createdByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Landlord_deletedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Landlord_updatedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    Rating?: RatingListRelationFilter
    Business?: BusinessListRelationFilter
  }

  export type LandlordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    User_Landlord_createdByToUser?: UserOrderByWithRelationInput
    User_Landlord_deletedByToUser?: UserOrderByWithRelationInput
    User_Landlord_updatedByToUser?: UserOrderByWithRelationInput
    Rating?: RatingOrderByRelationAggregateInput
    Business?: BusinessOrderByRelationAggregateInput
  }

  export type LandlordWhereUniqueInput = {
    id?: string
  }

  export type LandlordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    _count?: LandlordCountOrderByAggregateInput
    _max?: LandlordMaxOrderByAggregateInput
    _min?: LandlordMinOrderByAggregateInput
  }

  export type LandlordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LandlordScalarWhereWithAggregatesInput>
    OR?: Enumerable<LandlordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LandlordScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    deletedBy?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    isVerified?: BoolWithAggregatesFilter | boolean
  }

  export type PropertyManagementCompanyWhereInput = {
    AND?: Enumerable<PropertyManagementCompanyWhereInput>
    OR?: Enumerable<PropertyManagementCompanyWhereInput>
    NOT?: Enumerable<PropertyManagementCompanyWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
    User_PropertyManagementCompany_createdByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_PropertyManagementCompany_deletedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_PropertyManagementCompany_updatedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    Rating?: RatingListRelationFilter
  }

  export type PropertyManagementCompanyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    User_PropertyManagementCompany_createdByToUser?: UserOrderByWithRelationInput
    User_PropertyManagementCompany_deletedByToUser?: UserOrderByWithRelationInput
    User_PropertyManagementCompany_updatedByToUser?: UserOrderByWithRelationInput
    Rating?: RatingOrderByRelationAggregateInput
  }

  export type PropertyManagementCompanyWhereUniqueInput = {
    id?: string
  }

  export type PropertyManagementCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
    _count?: PropertyManagementCompanyCountOrderByAggregateInput
    _max?: PropertyManagementCompanyMaxOrderByAggregateInput
    _min?: PropertyManagementCompanyMinOrderByAggregateInput
  }

  export type PropertyManagementCompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PropertyManagementCompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PropertyManagementCompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PropertyManagementCompanyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    deletedBy?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    isVerified?: BoolWithAggregatesFilter | boolean
  }

  export type RatingWhereInput = {
    AND?: Enumerable<RatingWhereInput>
    OR?: Enumerable<RatingWhereInput>
    NOT?: Enumerable<RatingWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    landlordAtDateOfRating?: StringNullableFilter | string | null
    doingBusinessAsAtDateOfRating?: StringNullableFilter | string | null
    propertyManagementCompanyAtDateOfRating?: StringNullableFilter | string | null
    sentiment?: IntNullableFilter | number | null
    rentPrice?: FloatFilter | number
    body?: JsonNullableFilter
    tenancyEndDate?: DateTimeNullableFilter | Date | string | null
    tenancyStartDate?: DateTimeNullableFilter | Date | string | null
    Address?: XOR<AddressRelationFilter, AddressWhereInput> | null
    User_Rating_createdByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    User_Rating_deletedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
    Business?: XOR<BusinessRelationFilter, BusinessWhereInput> | null
    Landlord?: XOR<LandlordRelationFilter, LandlordWhereInput> | null
    PropertyManagementCompany?: XOR<PropertyManagementCompanyRelationFilter, PropertyManagementCompanyWhereInput> | null
    User_Rating_updatedByToUser?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    address?: SortOrder
    landlordAtDateOfRating?: SortOrder
    doingBusinessAsAtDateOfRating?: SortOrder
    propertyManagementCompanyAtDateOfRating?: SortOrder
    sentiment?: SortOrder
    rentPrice?: SortOrder
    body?: SortOrder
    tenancyEndDate?: SortOrder
    tenancyStartDate?: SortOrder
    Address?: AddressOrderByWithRelationInput
    User_Rating_createdByToUser?: UserOrderByWithRelationInput
    User_Rating_deletedByToUser?: UserOrderByWithRelationInput
    Business?: BusinessOrderByWithRelationInput
    Landlord?: LandlordOrderByWithRelationInput
    PropertyManagementCompany?: PropertyManagementCompanyOrderByWithRelationInput
    User_Rating_updatedByToUser?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = {
    id?: string
  }

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    address?: SortOrder
    landlordAtDateOfRating?: SortOrder
    doingBusinessAsAtDateOfRating?: SortOrder
    propertyManagementCompanyAtDateOfRating?: SortOrder
    sentiment?: SortOrder
    rentPrice?: SortOrder
    body?: SortOrder
    tenancyEndDate?: SortOrder
    tenancyStartDate?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RatingScalarWhereWithAggregatesInput>
    OR?: Enumerable<RatingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RatingScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    deletedBy?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    landlordAtDateOfRating?: StringNullableWithAggregatesFilter | string | null
    doingBusinessAsAtDateOfRating?: StringNullableWithAggregatesFilter | string | null
    propertyManagementCompanyAtDateOfRating?: StringNullableWithAggregatesFilter | string | null
    sentiment?: IntNullableWithAggregatesFilter | number | null
    rentPrice?: FloatWithAggregatesFilter | number
    body?: JsonNullableWithAggregatesFilter
    tenancyEndDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    tenancyStartDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    banned?: BoolFilter | boolean
    password?: StringFilter | string
    role?: EnumUserRoleTypeNullableFilter | UserRoleType | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    isEnrolledInAddressModeration?: BoolFilter | boolean
    Address_Address_createdByToUser?: AddressListRelationFilter
    Address_Address_deletedByToUser?: AddressListRelationFilter
    Address_Address_updatedByToUser?: AddressListRelationFilter
    Business_Business_createdByToUser?: BusinessListRelationFilter
    Business_Business_deletedByToUser?: BusinessListRelationFilter
    Business_Business_updatedByToUser?: BusinessListRelationFilter
    Landlord_Landlord_createdByToUser?: LandlordListRelationFilter
    Landlord_Landlord_deletedByToUser?: LandlordListRelationFilter
    Landlord_Landlord_updatedByToUser?: LandlordListRelationFilter
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyListRelationFilter
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyListRelationFilter
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyListRelationFilter
    Rating_Rating_createdByToUser?: RatingListRelationFilter
    Rating_Rating_deletedByToUser?: RatingListRelationFilter
    Rating_Rating_updatedByToUser?: RatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isEnrolledInAddressModeration?: SortOrder
    Address_Address_createdByToUser?: AddressOrderByRelationAggregateInput
    Address_Address_deletedByToUser?: AddressOrderByRelationAggregateInput
    Address_Address_updatedByToUser?: AddressOrderByRelationAggregateInput
    Business_Business_createdByToUser?: BusinessOrderByRelationAggregateInput
    Business_Business_deletedByToUser?: BusinessOrderByRelationAggregateInput
    Business_Business_updatedByToUser?: BusinessOrderByRelationAggregateInput
    Landlord_Landlord_createdByToUser?: LandlordOrderByRelationAggregateInput
    Landlord_Landlord_deletedByToUser?: LandlordOrderByRelationAggregateInput
    Landlord_Landlord_updatedByToUser?: LandlordOrderByRelationAggregateInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyOrderByRelationAggregateInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyOrderByRelationAggregateInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyOrderByRelationAggregateInput
    Rating_Rating_createdByToUser?: RatingOrderByRelationAggregateInput
    Rating_Rating_deletedByToUser?: RatingOrderByRelationAggregateInput
    Rating_Rating_updatedByToUser?: RatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isEnrolledInAddressModeration?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    banned?: BoolWithAggregatesFilter | boolean
    password?: StringWithAggregatesFilter | string
    role?: EnumUserRoleTypeNullableWithAggregatesFilter | UserRoleType | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    isEnrolledInAddressModeration?: BoolWithAggregatesFilter | boolean
  }

  export type AddressCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    User_Address_createdByToUser?: UserCreateNestedOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserCreateNestedOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserCreateNestedOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    Rating?: RatingUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    User_Address_createdByToUser?: UserUpdateOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserUpdateOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserUpdateOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Rating?: RatingUncheckedUpdateManyWithoutAddressInput
  }

  export type AddressCreateManyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type BusinessCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_createdByToUser?: UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_createdByToUser?: UserUpdateOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserUpdateOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserUpdateOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutBusinessInput
    Landlord?: LandlordUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutBusinessInput
    Landlord?: LandlordUncheckedUpdateManyWithoutBusinessInput
  }

  export type BusinessCreateManyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandlordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_createdByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutLandlordInput
    Business?: BusinessCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutLandlordInput
    Business?: BusinessUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_createdByToUser?: UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutLandlordInput
    Business?: BusinessUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutLandlordInput
    Business?: BusinessUncheckedUpdateManyWithoutLandlordInput
  }

  export type LandlordCreateManyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type LandlordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandlordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyManagementCompanyCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_PropertyManagementCompany_createdByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_PropertyManagementCompany_createdByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyCreateManyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type PropertyManagementCompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyManagementCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingCreateManyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateManyInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    isVerified?: SortOrder
    full?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    line3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    isVerified?: SortOrder
    full?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    line3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    isVerified?: SortOrder
    full?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    line3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type LandlordListRelationFilter = {
    every?: LandlordWhereInput
    some?: LandlordWhereInput
    none?: LandlordWhereInput
  }

  export type LandlordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandlordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type LandlordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type LandlordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type PropertyManagementCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type PropertyManagementCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type PropertyManagementCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    name?: SortOrder
    isVerified?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type BusinessRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type LandlordRelationFilter = {
    is?: LandlordWhereInput | null
    isNot?: LandlordWhereInput | null
  }

  export type PropertyManagementCompanyRelationFilter = {
    is?: PropertyManagementCompanyWhereInput | null
    isNot?: PropertyManagementCompanyWhereInput | null
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    address?: SortOrder
    landlordAtDateOfRating?: SortOrder
    doingBusinessAsAtDateOfRating?: SortOrder
    propertyManagementCompanyAtDateOfRating?: SortOrder
    sentiment?: SortOrder
    rentPrice?: SortOrder
    body?: SortOrder
    tenancyEndDate?: SortOrder
    tenancyStartDate?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    sentiment?: SortOrder
    rentPrice?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    address?: SortOrder
    landlordAtDateOfRating?: SortOrder
    doingBusinessAsAtDateOfRating?: SortOrder
    propertyManagementCompanyAtDateOfRating?: SortOrder
    sentiment?: SortOrder
    rentPrice?: SortOrder
    tenancyEndDate?: SortOrder
    tenancyStartDate?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedBy?: SortOrder
    address?: SortOrder
    landlordAtDateOfRating?: SortOrder
    doingBusinessAsAtDateOfRating?: SortOrder
    propertyManagementCompanyAtDateOfRating?: SortOrder
    sentiment?: SortOrder
    rentPrice?: SortOrder
    tenancyEndDate?: SortOrder
    tenancyStartDate?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    sentiment?: SortOrder
    rentPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumUserRoleTypeNullableFilter = {
    equals?: UserRoleType | null
    in?: Enumerable<UserRoleType> | null
    notIn?: Enumerable<UserRoleType> | null
    not?: NestedEnumUserRoleTypeNullableFilter | UserRoleType | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type PropertyManagementCompanyListRelationFilter = {
    every?: PropertyManagementCompanyWhereInput
    some?: PropertyManagementCompanyWhereInput
    none?: PropertyManagementCompanyWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyManagementCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isEnrolledInAddressModeration?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isEnrolledInAddressModeration?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isEnrolledInAddressModeration?: SortOrder
  }

  export type EnumUserRoleTypeNullableWithAggregatesFilter = {
    equals?: UserRoleType | null
    in?: Enumerable<UserRoleType> | null
    notIn?: Enumerable<UserRoleType> | null
    not?: NestedEnumUserRoleTypeNullableWithAggregatesFilter | UserRoleType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumUserRoleTypeNullableFilter
    _max?: NestedEnumUserRoleTypeNullableFilter
  }

  export type UserCreateNestedOneWithoutAddress_Address_createdByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_createdByToUserInput, UserUncheckedCreateWithoutAddress_Address_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAddress_Address_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_deletedByToUserInput, UserUncheckedCreateWithoutAddress_Address_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_deletedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAddress_Address_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_updatedByToUserInput, UserUncheckedCreateWithoutAddress_Address_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<RatingCreateWithoutAddressInput>, Enumerable<RatingUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutAddressInput>
    createMany?: RatingCreateManyAddressInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<RatingCreateWithoutAddressInput>, Enumerable<RatingUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutAddressInput>
    createMany?: RatingCreateManyAddressInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutAddress_Address_createdByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_createdByToUserInput, UserUncheckedCreateWithoutAddress_Address_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_createdByToUserInput
    upsert?: UserUpsertWithoutAddress_Address_createdByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAddress_Address_createdByToUserInput, UserUncheckedUpdateWithoutAddress_Address_createdByToUserInput>
  }

  export type UserUpdateOneWithoutAddress_Address_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_deletedByToUserInput, UserUncheckedCreateWithoutAddress_Address_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_deletedByToUserInput
    upsert?: UserUpsertWithoutAddress_Address_deletedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAddress_Address_deletedByToUserInput, UserUncheckedUpdateWithoutAddress_Address_deletedByToUserInput>
  }

  export type UserUpdateOneWithoutAddress_Address_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutAddress_Address_updatedByToUserInput, UserUncheckedCreateWithoutAddress_Address_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddress_Address_updatedByToUserInput
    upsert?: UserUpsertWithoutAddress_Address_updatedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAddress_Address_updatedByToUserInput, UserUncheckedUpdateWithoutAddress_Address_updatedByToUserInput>
  }

  export type RatingUpdateManyWithoutAddressInput = {
    create?: XOR<Enumerable<RatingCreateWithoutAddressInput>, Enumerable<RatingUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: RatingCreateManyAddressInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RatingUncheckedUpdateManyWithoutAddressInput = {
    create?: XOR<Enumerable<RatingCreateWithoutAddressInput>, Enumerable<RatingUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: RatingCreateManyAddressInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_createdByToUserInput, UserUncheckedCreateWithoutBusiness_Business_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_deletedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<RatingCreateWithoutBusinessInput>, Enumerable<RatingUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutBusinessInput>
    createMany?: RatingCreateManyBusinessInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type LandlordCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutBusinessInput>, Enumerable<LandlordUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutBusinessInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<RatingCreateWithoutBusinessInput>, Enumerable<RatingUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutBusinessInput>
    createMany?: RatingCreateManyBusinessInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type LandlordUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutBusinessInput>, Enumerable<LandlordUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutBusinessInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type UserUpdateOneWithoutBusiness_Business_createdByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_createdByToUserInput, UserUncheckedCreateWithoutBusiness_Business_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_createdByToUserInput
    upsert?: UserUpsertWithoutBusiness_Business_createdByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBusiness_Business_createdByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_createdByToUserInput>
  }

  export type UserUpdateOneWithoutBusiness_Business_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_deletedByToUserInput
    upsert?: UserUpsertWithoutBusiness_Business_deletedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_deletedByToUserInput>
  }

  export type UserUpdateOneWithoutBusiness_Business_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_Business_updatedByToUserInput
    upsert?: UserUpsertWithoutBusiness_Business_updatedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_updatedByToUserInput>
  }

  export type RatingUpdateManyWithoutBusinessInput = {
    create?: XOR<Enumerable<RatingCreateWithoutBusinessInput>, Enumerable<RatingUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: RatingCreateManyBusinessInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type LandlordUpdateManyWithoutBusinessInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutBusinessInput>, Enumerable<LandlordUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutBusinessInput>
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutBusinessInput = {
    create?: XOR<Enumerable<RatingCreateWithoutBusinessInput>, Enumerable<RatingUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: RatingCreateManyBusinessInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type LandlordUncheckedUpdateManyWithoutBusinessInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutBusinessInput>, Enumerable<LandlordUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutBusinessInput>
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_deletedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutLandlordInput = {
    create?: XOR<Enumerable<RatingCreateWithoutLandlordInput>, Enumerable<RatingUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutLandlordInput>
    createMany?: RatingCreateManyLandlordInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type BusinessCreateNestedManyWithoutLandlordInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutLandlordInput>, Enumerable<BusinessUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutLandlordInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutLandlordInput = {
    create?: XOR<Enumerable<RatingCreateWithoutLandlordInput>, Enumerable<RatingUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutLandlordInput>
    createMany?: RatingCreateManyLandlordInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type BusinessUncheckedCreateNestedManyWithoutLandlordInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutLandlordInput>, Enumerable<BusinessUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutLandlordInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_createdByToUserInput
    upsert?: UserUpsertWithoutLandlord_Landlord_createdByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_createdByToUserInput>
  }

  export type UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_deletedByToUserInput
    upsert?: UserUpsertWithoutLandlord_Landlord_deletedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_deletedByToUserInput>
  }

  export type UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandlord_Landlord_updatedByToUserInput
    upsert?: UserUpsertWithoutLandlord_Landlord_updatedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_updatedByToUserInput>
  }

  export type RatingUpdateManyWithoutLandlordInput = {
    create?: XOR<Enumerable<RatingCreateWithoutLandlordInput>, Enumerable<RatingUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutLandlordInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutLandlordInput>
    createMany?: RatingCreateManyLandlordInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutLandlordInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutLandlordInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type BusinessUpdateManyWithoutLandlordInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutLandlordInput>, Enumerable<BusinessUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutLandlordInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutLandlordInput>
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutLandlordInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutLandlordInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutLandlordInput = {
    create?: XOR<Enumerable<RatingCreateWithoutLandlordInput>, Enumerable<RatingUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutLandlordInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutLandlordInput>
    createMany?: RatingCreateManyLandlordInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutLandlordInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutLandlordInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type BusinessUncheckedUpdateManyWithoutLandlordInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutLandlordInput>, Enumerable<BusinessUncheckedCreateWithoutLandlordInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutLandlordInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutLandlordInput>
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutLandlordInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutLandlordInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutPropertyManagementCompanyInput = {
    create?: XOR<Enumerable<RatingCreateWithoutPropertyManagementCompanyInput>, Enumerable<RatingUncheckedCreateWithoutPropertyManagementCompanyInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutPropertyManagementCompanyInput>
    createMany?: RatingCreateManyPropertyManagementCompanyInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutPropertyManagementCompanyInput = {
    create?: XOR<Enumerable<RatingCreateWithoutPropertyManagementCompanyInput>, Enumerable<RatingUncheckedCreateWithoutPropertyManagementCompanyInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutPropertyManagementCompanyInput>
    createMany?: RatingCreateManyPropertyManagementCompanyInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    upsert?: UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
  }

  export type UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    upsert?: UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
  }

  export type UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    upsert?: UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
  }

  export type RatingUpdateManyWithoutPropertyManagementCompanyInput = {
    create?: XOR<Enumerable<RatingCreateWithoutPropertyManagementCompanyInput>, Enumerable<RatingUncheckedCreateWithoutPropertyManagementCompanyInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutPropertyManagementCompanyInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutPropertyManagementCompanyInput>
    createMany?: RatingCreateManyPropertyManagementCompanyInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutPropertyManagementCompanyInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutPropertyManagementCompanyInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutPropertyManagementCompanyInput = {
    create?: XOR<Enumerable<RatingCreateWithoutPropertyManagementCompanyInput>, Enumerable<RatingUncheckedCreateWithoutPropertyManagementCompanyInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutPropertyManagementCompanyInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutPropertyManagementCompanyInput>
    createMany?: RatingCreateManyPropertyManagementCompanyInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutPropertyManagementCompanyInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutPropertyManagementCompanyInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type AddressCreateNestedOneWithoutRatingInput = {
    create?: XOR<AddressCreateWithoutRatingInput, AddressUncheckedCreateWithoutRatingInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRatingInput
    connect?: AddressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRating_Rating_createdByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_createdByToUserInput, UserUncheckedCreateWithoutRating_Rating_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_deletedByToUserInput, UserUncheckedCreateWithoutRating_Rating_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_deletedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutRatingInput = {
    create?: XOR<BusinessCreateWithoutRatingInput, BusinessUncheckedCreateWithoutRatingInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRatingInput
    connect?: BusinessWhereUniqueInput
  }

  export type LandlordCreateNestedOneWithoutRatingInput = {
    create?: XOR<LandlordCreateWithoutRatingInput, LandlordUncheckedCreateWithoutRatingInput>
    connectOrCreate?: LandlordCreateOrConnectWithoutRatingInput
    connect?: LandlordWhereUniqueInput
  }

  export type PropertyManagementCompanyCreateNestedOneWithoutRatingInput = {
    create?: XOR<PropertyManagementCompanyCreateWithoutRatingInput, PropertyManagementCompanyUncheckedCreateWithoutRatingInput>
    connectOrCreate?: PropertyManagementCompanyCreateOrConnectWithoutRatingInput
    connect?: PropertyManagementCompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_updatedByToUserInput, UserUncheckedCreateWithoutRating_Rating_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateOneWithoutRatingInput = {
    create?: XOR<AddressCreateWithoutRatingInput, AddressUncheckedCreateWithoutRatingInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRatingInput
    upsert?: AddressUpsertWithoutRatingInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutRatingInput, AddressUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateOneWithoutRating_Rating_createdByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_createdByToUserInput, UserUncheckedCreateWithoutRating_Rating_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_createdByToUserInput
    upsert?: UserUpsertWithoutRating_Rating_createdByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRating_Rating_createdByToUserInput, UserUncheckedUpdateWithoutRating_Rating_createdByToUserInput>
  }

  export type UserUpdateOneWithoutRating_Rating_deletedByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_deletedByToUserInput, UserUncheckedCreateWithoutRating_Rating_deletedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_deletedByToUserInput
    upsert?: UserUpsertWithoutRating_Rating_deletedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRating_Rating_deletedByToUserInput, UserUncheckedUpdateWithoutRating_Rating_deletedByToUserInput>
  }

  export type BusinessUpdateOneWithoutRatingInput = {
    create?: XOR<BusinessCreateWithoutRatingInput, BusinessUncheckedCreateWithoutRatingInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRatingInput
    upsert?: BusinessUpsertWithoutRatingInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<BusinessUpdateWithoutRatingInput, BusinessUncheckedUpdateWithoutRatingInput>
  }

  export type LandlordUpdateOneWithoutRatingInput = {
    create?: XOR<LandlordCreateWithoutRatingInput, LandlordUncheckedCreateWithoutRatingInput>
    connectOrCreate?: LandlordCreateOrConnectWithoutRatingInput
    upsert?: LandlordUpsertWithoutRatingInput
    disconnect?: boolean
    delete?: boolean
    connect?: LandlordWhereUniqueInput
    update?: XOR<LandlordUpdateWithoutRatingInput, LandlordUncheckedUpdateWithoutRatingInput>
  }

  export type PropertyManagementCompanyUpdateOneWithoutRatingInput = {
    create?: XOR<PropertyManagementCompanyCreateWithoutRatingInput, PropertyManagementCompanyUncheckedCreateWithoutRatingInput>
    connectOrCreate?: PropertyManagementCompanyCreateOrConnectWithoutRatingInput
    upsert?: PropertyManagementCompanyUpsertWithoutRatingInput
    disconnect?: boolean
    delete?: boolean
    connect?: PropertyManagementCompanyWhereUniqueInput
    update?: XOR<PropertyManagementCompanyUpdateWithoutRatingInput, PropertyManagementCompanyUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateOneWithoutRating_Rating_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutRating_Rating_updatedByToUserInput, UserUncheckedCreateWithoutRating_Rating_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRating_Rating_updatedByToUserInput
    upsert?: UserUpsertWithoutRating_Rating_updatedByToUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRating_Rating_updatedByToUserInput, UserUncheckedUpdateWithoutRating_Rating_updatedByToUserInput>
  }

  export type AddressCreateNestedManyWithoutUser_Address_createdByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_createdByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_createdByToUserInput>
    createMany?: AddressCreateManyUser_Address_createdByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_deletedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_deletedByToUserInput>
    createMany?: AddressCreateManyUser_Address_deletedByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_updatedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_updatedByToUserInput>
    createMany?: AddressCreateManyUser_Address_updatedByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_createdByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_createdByToUserInput>
    createMany?: BusinessCreateManyUser_Business_createdByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_deletedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_deletedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_deletedByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_updatedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_updatedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_updatedByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_createdByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_createdByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_createdByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_deletedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_deletedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_deletedByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_updatedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_updatedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_updatedByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_createdByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_createdByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_createdByToUserInput>
    createMany?: RatingCreateManyUser_Rating_createdByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_deletedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_deletedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_deletedByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_updatedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_updatedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_updatedByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_createdByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_createdByToUserInput>
    createMany?: AddressCreateManyUser_Address_createdByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_deletedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_deletedByToUserInput>
    createMany?: AddressCreateManyUser_Address_deletedByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_updatedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_updatedByToUserInput>
    createMany?: AddressCreateManyUser_Address_updatedByToUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_createdByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_createdByToUserInput>
    createMany?: BusinessCreateManyUser_Business_createdByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_deletedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_deletedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_deletedByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_updatedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_updatedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_updatedByToUserInputEnvelope
    connect?: Enumerable<BusinessWhereUniqueInput>
  }

  export type LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_createdByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_createdByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_createdByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_deletedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_deletedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_deletedByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_updatedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_updatedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_updatedByToUserInputEnvelope
    connect?: Enumerable<LandlordWhereUniqueInput>
  }

  export type PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_createdByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInputEnvelope
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_createdByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_createdByToUserInput>
    createMany?: RatingCreateManyUser_Rating_createdByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_deletedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_deletedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_deletedByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_updatedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_updatedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_updatedByToUserInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type NullableEnumUserRoleTypeFieldUpdateOperationsInput = {
    set?: UserRoleType | null
  }

  export type AddressUpdateManyWithoutUser_Address_createdByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_createdByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_createdByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_createdByToUserInput>
    createMany?: AddressCreateManyUser_Address_createdByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_createdByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_createdByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUpdateManyWithoutUser_Address_deletedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_deletedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_deletedByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_deletedByToUserInput>
    createMany?: AddressCreateManyUser_Address_deletedByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_deletedByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_deletedByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUpdateManyWithoutUser_Address_updatedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_updatedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_updatedByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_updatedByToUserInput>
    createMany?: AddressCreateManyUser_Address_updatedByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_updatedByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_updatedByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type BusinessUpdateManyWithoutUser_Business_createdByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_createdByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_createdByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_createdByToUserInput>
    createMany?: BusinessCreateManyUser_Business_createdByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_createdByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_createdByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type BusinessUpdateManyWithoutUser_Business_deletedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_deletedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_deletedByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_deletedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_deletedByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_deletedByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_deletedByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type BusinessUpdateManyWithoutUser_Business_updatedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_updatedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_updatedByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_updatedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_updatedByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_updatedByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_updatedByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_createdByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_createdByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_createdByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_createdByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_createdByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_createdByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_deletedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_deletedByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_deletedByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_deletedByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_updatedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_updatedByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_updatedByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_updatedByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_createdByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_createdByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type RatingUpdateManyWithoutUser_Rating_createdByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_createdByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_createdByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_createdByToUserInput>
    createMany?: RatingCreateManyUser_Rating_createdByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_createdByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_createdByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type RatingUpdateManyWithoutUser_Rating_deletedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_deletedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_deletedByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_deletedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_deletedByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_deletedByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_deletedByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type RatingUpdateManyWithoutUser_Rating_updatedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_updatedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_updatedByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_updatedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_updatedByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_updatedByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_updatedByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_createdByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_createdByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_createdByToUserInput>
    createMany?: AddressCreateManyUser_Address_createdByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_createdByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_createdByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_deletedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_deletedByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_deletedByToUserInput>
    createMany?: AddressCreateManyUser_Address_deletedByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_deletedByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_deletedByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUser_Address_updatedByToUserInput>, Enumerable<AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUser_Address_updatedByToUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUser_Address_updatedByToUserInput>
    createMany?: AddressCreateManyUser_Address_updatedByToUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUser_Address_updatedByToUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUser_Address_updatedByToUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_createdByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_createdByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_createdByToUserInput>
    createMany?: BusinessCreateManyUser_Business_createdByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_createdByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_createdByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_deletedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_deletedByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_deletedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_deletedByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_deletedByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_deletedByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput = {
    create?: XOR<Enumerable<BusinessCreateWithoutUser_Business_updatedByToUserInput>, Enumerable<BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>>
    connectOrCreate?: Enumerable<BusinessCreateOrConnectWithoutUser_Business_updatedByToUserInput>
    upsert?: Enumerable<BusinessUpsertWithWhereUniqueWithoutUser_Business_updatedByToUserInput>
    createMany?: BusinessCreateManyUser_Business_updatedByToUserInputEnvelope
    set?: Enumerable<BusinessWhereUniqueInput>
    disconnect?: Enumerable<BusinessWhereUniqueInput>
    delete?: Enumerable<BusinessWhereUniqueInput>
    connect?: Enumerable<BusinessWhereUniqueInput>
    update?: Enumerable<BusinessUpdateWithWhereUniqueWithoutUser_Business_updatedByToUserInput>
    updateMany?: Enumerable<BusinessUpdateManyWithWhereWithoutUser_Business_updatedByToUserInput>
    deleteMany?: Enumerable<BusinessScalarWhereInput>
  }

  export type LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_createdByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_createdByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_createdByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_createdByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_createdByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_createdByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_deletedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_deletedByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_deletedByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_deletedByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput = {
    create?: XOR<Enumerable<LandlordCreateWithoutUser_Landlord_updatedByToUserInput>, Enumerable<LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>>
    connectOrCreate?: Enumerable<LandlordCreateOrConnectWithoutUser_Landlord_updatedByToUserInput>
    upsert?: Enumerable<LandlordUpsertWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput>
    createMany?: LandlordCreateManyUser_Landlord_updatedByToUserInputEnvelope
    set?: Enumerable<LandlordWhereUniqueInput>
    disconnect?: Enumerable<LandlordWhereUniqueInput>
    delete?: Enumerable<LandlordWhereUniqueInput>
    connect?: Enumerable<LandlordWhereUniqueInput>
    update?: Enumerable<LandlordUpdateWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput>
    updateMany?: Enumerable<LandlordUpdateManyWithWhereWithoutUser_Landlord_updatedByToUserInput>
    deleteMany?: Enumerable<LandlordScalarWhereInput>
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_createdByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_createdByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    create?: XOR<Enumerable<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>, Enumerable<PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>>
    connectOrCreate?: Enumerable<PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    upsert?: Enumerable<PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    createMany?: PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInputEnvelope
    set?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    disconnect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    delete?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    connect?: Enumerable<PropertyManagementCompanyWhereUniqueInput>
    update?: Enumerable<PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    updateMany?: Enumerable<PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    deleteMany?: Enumerable<PropertyManagementCompanyScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_createdByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_createdByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_createdByToUserInput>
    createMany?: RatingCreateManyUser_Rating_createdByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_createdByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_createdByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_deletedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_deletedByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_deletedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_deletedByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_deletedByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_deletedByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput = {
    create?: XOR<Enumerable<RatingCreateWithoutUser_Rating_updatedByToUserInput>, Enumerable<RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutUser_Rating_updatedByToUserInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutUser_Rating_updatedByToUserInput>
    createMany?: RatingCreateManyUser_Rating_updatedByToUserInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutUser_Rating_updatedByToUserInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutUser_Rating_updatedByToUserInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumUserRoleTypeNullableFilter = {
    equals?: UserRoleType | null
    in?: Enumerable<UserRoleType> | null
    notIn?: Enumerable<UserRoleType> | null
    not?: NestedEnumUserRoleTypeNullableFilter | UserRoleType | null
  }

  export type NestedEnumUserRoleTypeNullableWithAggregatesFilter = {
    equals?: UserRoleType | null
    in?: Enumerable<UserRoleType> | null
    notIn?: Enumerable<UserRoleType> | null
    not?: NestedEnumUserRoleTypeNullableWithAggregatesFilter | UserRoleType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumUserRoleTypeNullableFilter
    _max?: NestedEnumUserRoleTypeNullableFilter
  }

  export type UserCreateWithoutAddress_Address_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAddress_Address_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAddress_Address_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddress_Address_createdByToUserInput, UserUncheckedCreateWithoutAddress_Address_createdByToUserInput>
  }

  export type UserCreateWithoutAddress_Address_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAddress_Address_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAddress_Address_deletedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddress_Address_deletedByToUserInput, UserUncheckedCreateWithoutAddress_Address_deletedByToUserInput>
  }

  export type UserCreateWithoutAddress_Address_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAddress_Address_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAddress_Address_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddress_Address_updatedByToUserInput, UserUncheckedCreateWithoutAddress_Address_updatedByToUserInput>
  }

  export type RatingCreateWithoutAddressInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutAddressInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutAddressInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutAddressInput, RatingUncheckedCreateWithoutAddressInput>
  }

  export type RatingCreateManyAddressInputEnvelope = {
    data: Enumerable<RatingCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddress_Address_createdByToUserInput = {
    update: XOR<UserUpdateWithoutAddress_Address_createdByToUserInput, UserUncheckedUpdateWithoutAddress_Address_createdByToUserInput>
    create: XOR<UserCreateWithoutAddress_Address_createdByToUserInput, UserUncheckedCreateWithoutAddress_Address_createdByToUserInput>
  }

  export type UserUpdateWithoutAddress_Address_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutAddress_Address_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutAddress_Address_deletedByToUserInput = {
    update: XOR<UserUpdateWithoutAddress_Address_deletedByToUserInput, UserUncheckedUpdateWithoutAddress_Address_deletedByToUserInput>
    create: XOR<UserCreateWithoutAddress_Address_deletedByToUserInput, UserUncheckedCreateWithoutAddress_Address_deletedByToUserInput>
  }

  export type UserUpdateWithoutAddress_Address_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutAddress_Address_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutAddress_Address_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutAddress_Address_updatedByToUserInput, UserUncheckedUpdateWithoutAddress_Address_updatedByToUserInput>
    create: XOR<UserCreateWithoutAddress_Address_updatedByToUserInput, UserUncheckedCreateWithoutAddress_Address_updatedByToUserInput>
  }

  export type UserUpdateWithoutAddress_Address_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutAddress_Address_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type RatingUpsertWithWhereUniqueWithoutAddressInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutAddressInput, RatingUncheckedUpdateWithoutAddressInput>
    create: XOR<RatingCreateWithoutAddressInput, RatingUncheckedCreateWithoutAddressInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutAddressInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutAddressInput, RatingUncheckedUpdateWithoutAddressInput>
  }

  export type RatingUpdateManyWithWhereWithoutAddressInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRatingInput>
  }

  export type RatingScalarWhereInput = {
    AND?: Enumerable<RatingScalarWhereInput>
    OR?: Enumerable<RatingScalarWhereInput>
    NOT?: Enumerable<RatingScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    landlordAtDateOfRating?: StringNullableFilter | string | null
    doingBusinessAsAtDateOfRating?: StringNullableFilter | string | null
    propertyManagementCompanyAtDateOfRating?: StringNullableFilter | string | null
    sentiment?: IntNullableFilter | number | null
    rentPrice?: FloatFilter | number
    body?: JsonNullableFilter
    tenancyEndDate?: DateTimeNullableFilter | Date | string | null
    tenancyStartDate?: DateTimeNullableFilter | Date | string | null
  }

  export type UserCreateWithoutBusiness_Business_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutBusiness_Business_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutBusiness_Business_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusiness_Business_createdByToUserInput, UserUncheckedCreateWithoutBusiness_Business_createdByToUserInput>
  }

  export type UserCreateWithoutBusiness_Business_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutBusiness_Business_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutBusiness_Business_deletedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_deletedByToUserInput>
  }

  export type UserCreateWithoutBusiness_Business_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutBusiness_Business_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutBusiness_Business_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_updatedByToUserInput>
  }

  export type RatingCreateWithoutBusinessInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutBusinessInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput>
  }

  export type RatingCreateManyBusinessInputEnvelope = {
    data: Enumerable<RatingCreateManyBusinessInput>
    skipDuplicates?: boolean
  }

  export type LandlordCreateWithoutBusinessInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_createdByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutBusinessInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutBusinessInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutBusinessInput, LandlordUncheckedCreateWithoutBusinessInput>
  }

  export type UserUpsertWithoutBusiness_Business_createdByToUserInput = {
    update: XOR<UserUpdateWithoutBusiness_Business_createdByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_createdByToUserInput>
    create: XOR<UserCreateWithoutBusiness_Business_createdByToUserInput, UserUncheckedCreateWithoutBusiness_Business_createdByToUserInput>
  }

  export type UserUpdateWithoutBusiness_Business_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutBusiness_Business_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutBusiness_Business_deletedByToUserInput = {
    update: XOR<UserUpdateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_deletedByToUserInput>
    create: XOR<UserCreateWithoutBusiness_Business_deletedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_deletedByToUserInput>
  }

  export type UserUpdateWithoutBusiness_Business_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutBusiness_Business_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutBusiness_Business_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedUpdateWithoutBusiness_Business_updatedByToUserInput>
    create: XOR<UserCreateWithoutBusiness_Business_updatedByToUserInput, UserUncheckedCreateWithoutBusiness_Business_updatedByToUserInput>
  }

  export type UserUpdateWithoutBusiness_Business_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutBusiness_Business_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type RatingUpsertWithWhereUniqueWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutBusinessInput, RatingUncheckedUpdateWithoutBusinessInput>
    create: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutBusinessInput, RatingUncheckedUpdateWithoutBusinessInput>
  }

  export type RatingUpdateManyWithWhereWithoutBusinessInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRatingInput>
  }

  export type LandlordUpsertWithWhereUniqueWithoutBusinessInput = {
    where: LandlordWhereUniqueInput
    update: XOR<LandlordUpdateWithoutBusinessInput, LandlordUncheckedUpdateWithoutBusinessInput>
    create: XOR<LandlordCreateWithoutBusinessInput, LandlordUncheckedCreateWithoutBusinessInput>
  }

  export type LandlordUpdateWithWhereUniqueWithoutBusinessInput = {
    where: LandlordWhereUniqueInput
    data: XOR<LandlordUpdateWithoutBusinessInput, LandlordUncheckedUpdateWithoutBusinessInput>
  }

  export type LandlordUpdateManyWithWhereWithoutBusinessInput = {
    where: LandlordScalarWhereInput
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyWithoutLandlordInput>
  }

  export type LandlordScalarWhereInput = {
    AND?: Enumerable<LandlordScalarWhereInput>
    OR?: Enumerable<LandlordScalarWhereInput>
    NOT?: Enumerable<LandlordScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
  }

  export type UserCreateWithoutLandlord_Landlord_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutLandlord_Landlord_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutLandlord_Landlord_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_createdByToUserInput>
  }

  export type UserCreateWithoutLandlord_Landlord_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutLandlord_Landlord_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutLandlord_Landlord_deletedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_deletedByToUserInput>
  }

  export type UserCreateWithoutLandlord_Landlord_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutLandlord_Landlord_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutLandlord_Landlord_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_updatedByToUserInput>
  }

  export type RatingCreateWithoutLandlordInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutLandlordInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutLandlordInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutLandlordInput, RatingUncheckedCreateWithoutLandlordInput>
  }

  export type RatingCreateManyLandlordInputEnvelope = {
    data: Enumerable<RatingCreateManyLandlordInput>
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutLandlordInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_createdByToUser?: UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutLandlordInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutLandlordInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutLandlordInput, BusinessUncheckedCreateWithoutLandlordInput>
  }

  export type UserUpsertWithoutLandlord_Landlord_createdByToUserInput = {
    update: XOR<UserUpdateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_createdByToUserInput>
    create: XOR<UserCreateWithoutLandlord_Landlord_createdByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_createdByToUserInput>
  }

  export type UserUpdateWithoutLandlord_Landlord_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutLandlord_Landlord_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutLandlord_Landlord_deletedByToUserInput = {
    update: XOR<UserUpdateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_deletedByToUserInput>
    create: XOR<UserCreateWithoutLandlord_Landlord_deletedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_deletedByToUserInput>
  }

  export type UserUpdateWithoutLandlord_Landlord_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutLandlord_Landlord_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutLandlord_Landlord_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedUpdateWithoutLandlord_Landlord_updatedByToUserInput>
    create: XOR<UserCreateWithoutLandlord_Landlord_updatedByToUserInput, UserUncheckedCreateWithoutLandlord_Landlord_updatedByToUserInput>
  }

  export type UserUpdateWithoutLandlord_Landlord_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutLandlord_Landlord_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type RatingUpsertWithWhereUniqueWithoutLandlordInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutLandlordInput, RatingUncheckedUpdateWithoutLandlordInput>
    create: XOR<RatingCreateWithoutLandlordInput, RatingUncheckedCreateWithoutLandlordInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutLandlordInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutLandlordInput, RatingUncheckedUpdateWithoutLandlordInput>
  }

  export type RatingUpdateManyWithWhereWithoutLandlordInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRatingInput>
  }

  export type BusinessUpsertWithWhereUniqueWithoutLandlordInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutLandlordInput, BusinessUncheckedUpdateWithoutLandlordInput>
    create: XOR<BusinessCreateWithoutLandlordInput, BusinessUncheckedCreateWithoutLandlordInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutLandlordInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutLandlordInput, BusinessUncheckedUpdateWithoutLandlordInput>
  }

  export type BusinessUpdateManyWithWhereWithoutLandlordInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: Enumerable<BusinessScalarWhereInput>
    OR?: Enumerable<BusinessScalarWhereInput>
    NOT?: Enumerable<BusinessScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
  }

  export type UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
  }

  export type UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
  }

  export type UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
  }

  export type RatingCreateWithoutPropertyManagementCompanyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutPropertyManagementCompanyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutPropertyManagementCompanyInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutPropertyManagementCompanyInput, RatingUncheckedCreateWithoutPropertyManagementCompanyInput>
  }

  export type RatingCreateManyPropertyManagementCompanyInputEnvelope = {
    data: Enumerable<RatingCreateManyPropertyManagementCompanyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    update: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
  }

  export type UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    update: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
  }

  export type UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
    create: XOR<UserCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput, UserUncheckedCreateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
  }

  export type UserUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type RatingUpsertWithWhereUniqueWithoutPropertyManagementCompanyInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutPropertyManagementCompanyInput, RatingUncheckedUpdateWithoutPropertyManagementCompanyInput>
    create: XOR<RatingCreateWithoutPropertyManagementCompanyInput, RatingUncheckedCreateWithoutPropertyManagementCompanyInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutPropertyManagementCompanyInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutPropertyManagementCompanyInput, RatingUncheckedUpdateWithoutPropertyManagementCompanyInput>
  }

  export type RatingUpdateManyWithWhereWithoutPropertyManagementCompanyInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRatingInput>
  }

  export type AddressCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    User_Address_createdByToUser?: UserCreateNestedOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserCreateNestedOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserCreateNestedOneWithoutAddress_Address_updatedByToUserInput
  }

  export type AddressUncheckedCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
  }

  export type AddressCreateOrConnectWithoutRatingInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRatingInput, AddressUncheckedCreateWithoutRatingInput>
  }

  export type UserCreateWithoutRating_Rating_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutRating_Rating_createdByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutRating_Rating_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRating_Rating_createdByToUserInput, UserUncheckedCreateWithoutRating_Rating_createdByToUserInput>
  }

  export type UserCreateWithoutRating_Rating_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_updatedByToUser?: RatingCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutRating_Rating_deletedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutRating_Rating_deletedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRating_Rating_deletedByToUserInput, UserUncheckedCreateWithoutRating_Rating_deletedByToUserInput>
  }

  export type BusinessCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_createdByToUser?: UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput
    Landlord?: LandlordCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Landlord?: LandlordUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutRatingInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutRatingInput, BusinessUncheckedCreateWithoutRatingInput>
  }

  export type LandlordCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_createdByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput
    Business?: BusinessCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Business?: BusinessUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutRatingInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutRatingInput, LandlordUncheckedCreateWithoutRatingInput>
  }

  export type PropertyManagementCompanyCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_PropertyManagementCompany_createdByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
  }

  export type PropertyManagementCompanyUncheckedCreateWithoutRatingInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type PropertyManagementCompanyCreateOrConnectWithoutRatingInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    create: XOR<PropertyManagementCompanyCreateWithoutRatingInput, PropertyManagementCompanyUncheckedCreateWithoutRatingInput>
  }

  export type UserCreateWithoutRating_Rating_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingCreateNestedManyWithoutUser_Rating_deletedByToUserInput
  }

  export type UserUncheckedCreateWithoutRating_Rating_updatedByToUserInput = {
    id: string
    username?: string
    email?: string
    banned?: boolean
    password: string
    role?: UserRoleType | null
    createdAt?: Date | string | null
    isEnrolledInAddressModeration?: boolean
    Address_Address_createdByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedCreateNestedManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedCreateNestedManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedCreateNestedManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedCreateNestedManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedCreateNestedManyWithoutUser_Rating_deletedByToUserInput
  }

  export type UserCreateOrConnectWithoutRating_Rating_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRating_Rating_updatedByToUserInput, UserUncheckedCreateWithoutRating_Rating_updatedByToUserInput>
  }

  export type AddressUpsertWithoutRatingInput = {
    update: XOR<AddressUpdateWithoutRatingInput, AddressUncheckedUpdateWithoutRatingInput>
    create: XOR<AddressCreateWithoutRatingInput, AddressUncheckedCreateWithoutRatingInput>
  }

  export type AddressUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    User_Address_createdByToUser?: UserUpdateOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserUpdateOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserUpdateOneWithoutAddress_Address_updatedByToUserInput
  }

  export type AddressUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutRating_Rating_createdByToUserInput = {
    update: XOR<UserUpdateWithoutRating_Rating_createdByToUserInput, UserUncheckedUpdateWithoutRating_Rating_createdByToUserInput>
    create: XOR<UserCreateWithoutRating_Rating_createdByToUserInput, UserUncheckedCreateWithoutRating_Rating_createdByToUserInput>
  }

  export type UserUpdateWithoutRating_Rating_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutRating_Rating_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUpsertWithoutRating_Rating_deletedByToUserInput = {
    update: XOR<UserUpdateWithoutRating_Rating_deletedByToUserInput, UserUncheckedUpdateWithoutRating_Rating_deletedByToUserInput>
    create: XOR<UserCreateWithoutRating_Rating_deletedByToUserInput, UserUncheckedCreateWithoutRating_Rating_deletedByToUserInput>
  }

  export type UserUpdateWithoutRating_Rating_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_updatedByToUser?: RatingUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type UserUncheckedUpdateWithoutRating_Rating_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_updatedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_updatedByToUserInput
  }

  export type BusinessUpsertWithoutRatingInput = {
    update: XOR<BusinessUpdateWithoutRatingInput, BusinessUncheckedUpdateWithoutRatingInput>
    create: XOR<BusinessCreateWithoutRatingInput, BusinessUncheckedCreateWithoutRatingInput>
  }

  export type BusinessUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_createdByToUser?: UserUpdateOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserUpdateOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserUpdateOneWithoutBusiness_Business_updatedByToUserInput
    Landlord?: LandlordUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Landlord?: LandlordUncheckedUpdateManyWithoutBusinessInput
  }

  export type LandlordUpsertWithoutRatingInput = {
    update: XOR<LandlordUpdateWithoutRatingInput, LandlordUncheckedUpdateWithoutRatingInput>
    create: XOR<LandlordCreateWithoutRatingInput, LandlordUncheckedCreateWithoutRatingInput>
  }

  export type LandlordUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_createdByToUser?: UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput
    Business?: BusinessUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Business?: BusinessUncheckedUpdateManyWithoutLandlordInput
  }

  export type PropertyManagementCompanyUpsertWithoutRatingInput = {
    update: XOR<PropertyManagementCompanyUpdateWithoutRatingInput, PropertyManagementCompanyUncheckedUpdateWithoutRatingInput>
    create: XOR<PropertyManagementCompanyCreateWithoutRatingInput, PropertyManagementCompanyUncheckedCreateWithoutRatingInput>
  }

  export type PropertyManagementCompanyUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_PropertyManagementCompany_createdByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
  }

  export type PropertyManagementCompanyUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutRating_Rating_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutRating_Rating_updatedByToUserInput, UserUncheckedUpdateWithoutRating_Rating_updatedByToUserInput>
    create: XOR<UserCreateWithoutRating_Rating_updatedByToUserInput, UserUncheckedCreateWithoutRating_Rating_updatedByToUserInput>
  }

  export type UserUpdateWithoutRating_Rating_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUpdateManyWithoutUser_Rating_deletedByToUserInput
  }

  export type UserUncheckedUpdateWithoutRating_Rating_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleTypeFieldUpdateOperationsInput | UserRoleType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEnrolledInAddressModeration?: BoolFieldUpdateOperationsInput | boolean
    Address_Address_createdByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_createdByToUserInput
    Address_Address_deletedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_deletedByToUserInput
    Address_Address_updatedByToUser?: AddressUncheckedUpdateManyWithoutUser_Address_updatedByToUserInput
    Business_Business_createdByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_createdByToUserInput
    Business_Business_deletedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_deletedByToUserInput
    Business_Business_updatedByToUser?: BusinessUncheckedUpdateManyWithoutUser_Business_updatedByToUserInput
    Landlord_Landlord_createdByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_createdByToUserInput
    Landlord_Landlord_deletedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_deletedByToUserInput
    Landlord_Landlord_updatedByToUser?: LandlordUncheckedUpdateManyWithoutUser_Landlord_updatedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_createdByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_createdByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_deletedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_deletedByToUserInput
    PropertyManagementCompany_PropertyManagementCompany_updatedByToUser?: PropertyManagementCompanyUncheckedUpdateManyWithoutUser_PropertyManagementCompany_updatedByToUserInput
    Rating_Rating_createdByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_createdByToUserInput
    Rating_Rating_deletedByToUser?: RatingUncheckedUpdateManyWithoutUser_Rating_deletedByToUserInput
  }

  export type AddressCreateWithoutUser_Address_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    User_Address_deletedByToUser?: UserCreateNestedOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserCreateNestedOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUser_Address_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    Rating?: RatingUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUser_Address_createdByToUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUser_Address_createdByToUserInput, AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>
  }

  export type AddressCreateManyUser_Address_createdByToUserInputEnvelope = {
    data: Enumerable<AddressCreateManyUser_Address_createdByToUserInput>
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUser_Address_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    User_Address_createdByToUser?: UserCreateNestedOneWithoutAddress_Address_createdByToUserInput
    User_Address_updatedByToUser?: UserCreateNestedOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    Rating?: RatingUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUser_Address_deletedByToUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUser_Address_deletedByToUserInput, AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>
  }

  export type AddressCreateManyUser_Address_deletedByToUserInputEnvelope = {
    data: Enumerable<AddressCreateManyUser_Address_deletedByToUserInput>
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUser_Address_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    User_Address_createdByToUser?: UserCreateNestedOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserCreateNestedOneWithoutAddress_Address_deletedByToUserInput
    Rating?: RatingCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
    Rating?: RatingUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUser_Address_updatedByToUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUser_Address_updatedByToUserInput, AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>
  }

  export type AddressCreateManyUser_Address_updatedByToUserInputEnvelope = {
    data: Enumerable<AddressCreateManyUser_Address_updatedByToUserInput>
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutUser_Business_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_deletedByToUser?: UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUser_Business_createdByToUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUser_Business_createdByToUserInput, BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>
  }

  export type BusinessCreateManyUser_Business_createdByToUserInputEnvelope = {
    data: Enumerable<BusinessCreateManyUser_Business_createdByToUserInput>
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutUser_Business_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_createdByToUser?: UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput
    User_Business_updatedByToUser?: UserCreateNestedOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUser_Business_deletedByToUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUser_Business_deletedByToUserInput, BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>
  }

  export type BusinessCreateManyUser_Business_deletedByToUserInputEnvelope = {
    data: Enumerable<BusinessCreateManyUser_Business_deletedByToUserInput>
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutUser_Business_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Business_createdByToUser?: UserCreateNestedOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserCreateNestedOneWithoutBusiness_Business_deletedByToUserInput
    Rating?: RatingCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Landlord?: LandlordUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUser_Business_updatedByToUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUser_Business_updatedByToUserInput, BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>
  }

  export type BusinessCreateManyUser_Business_updatedByToUserInputEnvelope = {
    data: Enumerable<BusinessCreateManyUser_Business_updatedByToUserInput>
    skipDuplicates?: boolean
  }

  export type LandlordCreateWithoutUser_Landlord_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_deletedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutLandlordInput
    Business?: BusinessCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutLandlordInput
    Business?: BusinessUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutUser_Landlord_createdByToUserInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutUser_Landlord_createdByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>
  }

  export type LandlordCreateManyUser_Landlord_createdByToUserInputEnvelope = {
    data: Enumerable<LandlordCreateManyUser_Landlord_createdByToUserInput>
    skipDuplicates?: boolean
  }

  export type LandlordCreateWithoutUser_Landlord_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_createdByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_updatedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutLandlordInput
    Business?: BusinessCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutLandlordInput
    Business?: BusinessUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutUser_Landlord_deletedByToUserInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutUser_Landlord_deletedByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>
  }

  export type LandlordCreateManyUser_Landlord_deletedByToUserInputEnvelope = {
    data: Enumerable<LandlordCreateManyUser_Landlord_deletedByToUserInput>
    skipDuplicates?: boolean
  }

  export type LandlordCreateWithoutUser_Landlord_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_Landlord_createdByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserCreateNestedOneWithoutLandlord_Landlord_deletedByToUserInput
    Rating?: RatingCreateNestedManyWithoutLandlordInput
    Business?: BusinessCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutLandlordInput
    Business?: BusinessUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutUser_Landlord_updatedByToUserInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutUser_Landlord_updatedByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>
  }

  export type LandlordCreateManyUser_Landlord_updatedByToUserInputEnvelope = {
    data: Enumerable<LandlordCreateManyUser_Landlord_updatedByToUserInput>
    skipDuplicates?: boolean
  }

  export type PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_PropertyManagementCompany_deletedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInputEnvelope = {
    data: Enumerable<PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInput>
    skipDuplicates?: boolean
  }

  export type PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_PropertyManagementCompany_createdByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInputEnvelope = {
    data: Enumerable<PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInput>
    skipDuplicates?: boolean
  }

  export type PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
    User_PropertyManagementCompany_createdByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserCreateNestedOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    Rating?: RatingCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
    Rating?: RatingUncheckedCreateNestedManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyCreateOrConnectWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInputEnvelope = {
    data: Enumerable<PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInput>
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUser_Rating_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutUser_Rating_createdByToUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUser_Rating_createdByToUserInput, RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>
  }

  export type RatingCreateManyUser_Rating_createdByToUserInputEnvelope = {
    data: Enumerable<RatingCreateManyUser_Rating_createdByToUserInput>
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUser_Rating_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserCreateNestedOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutUser_Rating_deletedByToUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUser_Rating_deletedByToUserInput, RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>
  }

  export type RatingCreateManyUser_Rating_deletedByToUserInputEnvelope = {
    data: Enumerable<RatingCreateManyUser_Rating_deletedByToUserInput>
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUser_Rating_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
    Address?: AddressCreateNestedOneWithoutRatingInput
    User_Rating_createdByToUser?: UserCreateNestedOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserCreateNestedOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessCreateNestedOneWithoutRatingInput
    Landlord?: LandlordCreateNestedOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutUser_Rating_updatedByToUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUser_Rating_updatedByToUserInput, RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>
  }

  export type RatingCreateManyUser_Rating_updatedByToUserInputEnvelope = {
    data: Enumerable<RatingCreateManyUser_Rating_updatedByToUserInput>
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUser_Address_createdByToUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUser_Address_createdByToUserInput, AddressUncheckedUpdateWithoutUser_Address_createdByToUserInput>
    create: XOR<AddressCreateWithoutUser_Address_createdByToUserInput, AddressUncheckedCreateWithoutUser_Address_createdByToUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUser_Address_createdByToUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUser_Address_createdByToUserInput, AddressUncheckedUpdateWithoutUser_Address_createdByToUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUser_Address_createdByToUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddress_Address_createdByToUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: Enumerable<AddressScalarWhereInput>
    OR?: Enumerable<AddressScalarWhereInput>
    NOT?: Enumerable<AddressScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    isVerified?: BoolFilter | boolean
    full?: StringFilter | string
    line1?: StringFilter | string
    line2?: StringFilter | string
    line3?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    countryCode?: StringFilter | string
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
  }

  export type AddressUpsertWithWhereUniqueWithoutUser_Address_deletedByToUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUser_Address_deletedByToUserInput, AddressUncheckedUpdateWithoutUser_Address_deletedByToUserInput>
    create: XOR<AddressCreateWithoutUser_Address_deletedByToUserInput, AddressUncheckedCreateWithoutUser_Address_deletedByToUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUser_Address_deletedByToUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUser_Address_deletedByToUserInput, AddressUncheckedUpdateWithoutUser_Address_deletedByToUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUser_Address_deletedByToUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddress_Address_deletedByToUserInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutUser_Address_updatedByToUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUser_Address_updatedByToUserInput, AddressUncheckedUpdateWithoutUser_Address_updatedByToUserInput>
    create: XOR<AddressCreateWithoutUser_Address_updatedByToUserInput, AddressUncheckedCreateWithoutUser_Address_updatedByToUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUser_Address_updatedByToUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUser_Address_updatedByToUserInput, AddressUncheckedUpdateWithoutUser_Address_updatedByToUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUser_Address_updatedByToUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddress_Address_updatedByToUserInput>
  }

  export type BusinessUpsertWithWhereUniqueWithoutUser_Business_createdByToUserInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutUser_Business_createdByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_createdByToUserInput>
    create: XOR<BusinessCreateWithoutUser_Business_createdByToUserInput, BusinessUncheckedCreateWithoutUser_Business_createdByToUserInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutUser_Business_createdByToUserInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutUser_Business_createdByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_createdByToUserInput>
  }

  export type BusinessUpdateManyWithWhereWithoutUser_Business_createdByToUserInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutBusiness_Business_createdByToUserInput>
  }

  export type BusinessUpsertWithWhereUniqueWithoutUser_Business_deletedByToUserInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutUser_Business_deletedByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_deletedByToUserInput>
    create: XOR<BusinessCreateWithoutUser_Business_deletedByToUserInput, BusinessUncheckedCreateWithoutUser_Business_deletedByToUserInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutUser_Business_deletedByToUserInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutUser_Business_deletedByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_deletedByToUserInput>
  }

  export type BusinessUpdateManyWithWhereWithoutUser_Business_deletedByToUserInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutBusiness_Business_deletedByToUserInput>
  }

  export type BusinessUpsertWithWhereUniqueWithoutUser_Business_updatedByToUserInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutUser_Business_updatedByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_updatedByToUserInput>
    create: XOR<BusinessCreateWithoutUser_Business_updatedByToUserInput, BusinessUncheckedCreateWithoutUser_Business_updatedByToUserInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutUser_Business_updatedByToUserInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutUser_Business_updatedByToUserInput, BusinessUncheckedUpdateWithoutUser_Business_updatedByToUserInput>
  }

  export type BusinessUpdateManyWithWhereWithoutUser_Business_updatedByToUserInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutBusiness_Business_updatedByToUserInput>
  }

  export type LandlordUpsertWithWhereUniqueWithoutUser_Landlord_createdByToUserInput = {
    where: LandlordWhereUniqueInput
    update: XOR<LandlordUpdateWithoutUser_Landlord_createdByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_createdByToUserInput>
    create: XOR<LandlordCreateWithoutUser_Landlord_createdByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_createdByToUserInput>
  }

  export type LandlordUpdateWithWhereUniqueWithoutUser_Landlord_createdByToUserInput = {
    where: LandlordWhereUniqueInput
    data: XOR<LandlordUpdateWithoutUser_Landlord_createdByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_createdByToUserInput>
  }

  export type LandlordUpdateManyWithWhereWithoutUser_Landlord_createdByToUserInput = {
    where: LandlordScalarWhereInput
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyWithoutLandlord_Landlord_createdByToUserInput>
  }

  export type LandlordUpsertWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput = {
    where: LandlordWhereUniqueInput
    update: XOR<LandlordUpdateWithoutUser_Landlord_deletedByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_deletedByToUserInput>
    create: XOR<LandlordCreateWithoutUser_Landlord_deletedByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_deletedByToUserInput>
  }

  export type LandlordUpdateWithWhereUniqueWithoutUser_Landlord_deletedByToUserInput = {
    where: LandlordWhereUniqueInput
    data: XOR<LandlordUpdateWithoutUser_Landlord_deletedByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_deletedByToUserInput>
  }

  export type LandlordUpdateManyWithWhereWithoutUser_Landlord_deletedByToUserInput = {
    where: LandlordScalarWhereInput
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyWithoutLandlord_Landlord_deletedByToUserInput>
  }

  export type LandlordUpsertWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput = {
    where: LandlordWhereUniqueInput
    update: XOR<LandlordUpdateWithoutUser_Landlord_updatedByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_updatedByToUserInput>
    create: XOR<LandlordCreateWithoutUser_Landlord_updatedByToUserInput, LandlordUncheckedCreateWithoutUser_Landlord_updatedByToUserInput>
  }

  export type LandlordUpdateWithWhereUniqueWithoutUser_Landlord_updatedByToUserInput = {
    where: LandlordWhereUniqueInput
    data: XOR<LandlordUpdateWithoutUser_Landlord_updatedByToUserInput, LandlordUncheckedUpdateWithoutUser_Landlord_updatedByToUserInput>
  }

  export type LandlordUpdateManyWithWhereWithoutUser_Landlord_updatedByToUserInput = {
    where: LandlordScalarWhereInput
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyWithoutLandlord_Landlord_updatedByToUserInput>
  }

  export type PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    update: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput>
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_createdByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_createdByToUserInput>
  }

  export type PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    data: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput>
  }

  export type PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    where: PropertyManagementCompanyScalarWhereInput
    data: XOR<PropertyManagementCompanyUpdateManyMutationInput, PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput>
  }

  export type PropertyManagementCompanyScalarWhereInput = {
    AND?: Enumerable<PropertyManagementCompanyScalarWhereInput>
    OR?: Enumerable<PropertyManagementCompanyScalarWhereInput>
    NOT?: Enumerable<PropertyManagementCompanyScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    deletedBy?: StringNullableFilter | string | null
    name?: StringFilter | string
    isVerified?: BoolFilter | boolean
  }

  export type PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    update: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput>
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_deletedByToUserInput>
  }

  export type PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    data: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput>
  }

  export type PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    where: PropertyManagementCompanyScalarWhereInput
    data: XOR<PropertyManagementCompanyUpdateManyMutationInput, PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput>
  }

  export type PropertyManagementCompanyUpsertWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    update: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput>
    create: XOR<PropertyManagementCompanyCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput, PropertyManagementCompanyUncheckedCreateWithoutUser_PropertyManagementCompany_updatedByToUserInput>
  }

  export type PropertyManagementCompanyUpdateWithWhereUniqueWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    where: PropertyManagementCompanyWhereUniqueInput
    data: XOR<PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput, PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput>
  }

  export type PropertyManagementCompanyUpdateManyWithWhereWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    where: PropertyManagementCompanyScalarWhereInput
    data: XOR<PropertyManagementCompanyUpdateManyMutationInput, PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUser_Rating_createdByToUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUser_Rating_createdByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_createdByToUserInput>
    create: XOR<RatingCreateWithoutUser_Rating_createdByToUserInput, RatingUncheckedCreateWithoutUser_Rating_createdByToUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUser_Rating_createdByToUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUser_Rating_createdByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_createdByToUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUser_Rating_createdByToUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRating_Rating_createdByToUserInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUser_Rating_deletedByToUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUser_Rating_deletedByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_deletedByToUserInput>
    create: XOR<RatingCreateWithoutUser_Rating_deletedByToUserInput, RatingUncheckedCreateWithoutUser_Rating_deletedByToUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUser_Rating_deletedByToUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUser_Rating_deletedByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_deletedByToUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUser_Rating_deletedByToUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRating_Rating_deletedByToUserInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUser_Rating_updatedByToUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUser_Rating_updatedByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_updatedByToUserInput>
    create: XOR<RatingCreateWithoutUser_Rating_updatedByToUserInput, RatingUncheckedCreateWithoutUser_Rating_updatedByToUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUser_Rating_updatedByToUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUser_Rating_updatedByToUserInput, RatingUncheckedUpdateWithoutUser_Rating_updatedByToUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUser_Rating_updatedByToUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRating_Rating_updatedByToUserInput>
  }

  export type RatingCreateManyAddressInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingCreateManyBusinessInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandlordUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_createdByToUser?: UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingCreateManyLandlordInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_createdByToUser?: UserUpdateOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserUpdateOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserUpdateOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingCreateManyPropertyManagementCompanyInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingUpdateWithoutPropertyManagementCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutPropertyManagementCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyUser_Address_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
  }

  export type AddressCreateManyUser_Address_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
  }

  export type AddressCreateManyUser_Address_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    isVerified?: boolean
    full?: string
    line1?: string
    line2?: string
    line3?: string
    city?: string
    state?: string
    zip?: string
    countryCode?: string
    latitude?: number
    longitude?: number
  }

  export type BusinessCreateManyUser_Business_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type BusinessCreateManyUser_Business_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
  }

  export type BusinessCreateManyUser_Business_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type LandlordCreateManyUser_Landlord_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type LandlordCreateManyUser_Landlord_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
  }

  export type LandlordCreateManyUser_Landlord_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    name?: string
    isVerified?: boolean
  }

  export type PropertyManagementCompanyCreateManyUser_PropertyManagementCompany_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    name?: string
    isVerified?: boolean
  }

  export type RatingCreateManyUser_Rating_createdByToUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateManyUser_Rating_deletedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    isDeleted?: boolean
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type RatingCreateManyUser_Rating_updatedByToUserInput = {
    id: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedBy?: string | null
    address?: string | null
    landlordAtDateOfRating?: string | null
    doingBusinessAsAtDateOfRating?: string | null
    propertyManagementCompanyAtDateOfRating?: string | null
    sentiment?: number | null
    rentPrice: number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: Date | string | null
    tenancyStartDate?: Date | string | null
  }

  export type AddressUpdateWithoutUser_Address_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    User_Address_deletedByToUser?: UserUpdateOneWithoutAddress_Address_deletedByToUserInput
    User_Address_updatedByToUser?: UserUpdateOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateWithoutUser_Address_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Rating?: RatingUncheckedUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateManyWithoutAddress_Address_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressUpdateWithoutUser_Address_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    User_Address_createdByToUser?: UserUpdateOneWithoutAddress_Address_createdByToUserInput
    User_Address_updatedByToUser?: UserUpdateOneWithoutAddress_Address_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateWithoutUser_Address_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Rating?: RatingUncheckedUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateManyWithoutAddress_Address_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressUpdateWithoutUser_Address_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    User_Address_createdByToUser?: UserUpdateOneWithoutAddress_Address_createdByToUserInput
    User_Address_deletedByToUser?: UserUpdateOneWithoutAddress_Address_deletedByToUserInput
    Rating?: RatingUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateWithoutUser_Address_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Rating?: RatingUncheckedUpdateManyWithoutAddressInput
  }

  export type AddressUncheckedUpdateManyWithoutAddress_Address_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    full?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: StringFieldUpdateOperationsInput | string
    line3?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type BusinessUpdateWithoutUser_Business_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_deletedByToUser?: UserUpdateOneWithoutBusiness_Business_deletedByToUserInput
    User_Business_updatedByToUser?: UserUpdateOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutBusinessInput
    Landlord?: LandlordUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateWithoutUser_Business_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutBusinessInput
    Landlord?: LandlordUncheckedUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateManyWithoutBusiness_Business_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BusinessUpdateWithoutUser_Business_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_createdByToUser?: UserUpdateOneWithoutBusiness_Business_createdByToUserInput
    User_Business_updatedByToUser?: UserUpdateOneWithoutBusiness_Business_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutBusinessInput
    Landlord?: LandlordUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateWithoutUser_Business_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutBusinessInput
    Landlord?: LandlordUncheckedUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateManyWithoutBusiness_Business_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BusinessUpdateWithoutUser_Business_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Business_createdByToUser?: UserUpdateOneWithoutBusiness_Business_createdByToUserInput
    User_Business_deletedByToUser?: UserUpdateOneWithoutBusiness_Business_deletedByToUserInput
    Rating?: RatingUpdateManyWithoutBusinessInput
    Landlord?: LandlordUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateWithoutUser_Business_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutBusinessInput
    Landlord?: LandlordUncheckedUpdateManyWithoutBusinessInput
  }

  export type BusinessUncheckedUpdateManyWithoutBusiness_Business_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandlordUpdateWithoutUser_Landlord_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_deletedByToUser?: UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput
    User_Landlord_updatedByToUser?: UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutLandlordInput
    Business?: BusinessUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateWithoutUser_Landlord_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutLandlordInput
    Business?: BusinessUncheckedUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateManyWithoutLandlord_Landlord_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandlordUpdateWithoutUser_Landlord_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_createdByToUser?: UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_updatedByToUser?: UserUpdateOneWithoutLandlord_Landlord_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutLandlordInput
    Business?: BusinessUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateWithoutUser_Landlord_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutLandlordInput
    Business?: BusinessUncheckedUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateManyWithoutLandlord_Landlord_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandlordUpdateWithoutUser_Landlord_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_Landlord_createdByToUser?: UserUpdateOneWithoutLandlord_Landlord_createdByToUserInput
    User_Landlord_deletedByToUser?: UserUpdateOneWithoutLandlord_Landlord_deletedByToUserInput
    Rating?: RatingUpdateManyWithoutLandlordInput
    Business?: BusinessUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateWithoutUser_Landlord_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutLandlordInput
    Business?: BusinessUncheckedUpdateManyWithoutLandlordInput
  }

  export type LandlordUncheckedUpdateManyWithoutLandlord_Landlord_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_PropertyManagementCompany_deletedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_PropertyManagementCompany_createdByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_updatedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput
    Rating?: RatingUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyManagementCompanyUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    User_PropertyManagementCompany_createdByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_createdByToUserInput
    User_PropertyManagementCompany_deletedByToUser?: UserUpdateOneWithoutPropertyManagementCompany_PropertyManagementCompany_deletedByToUserInput
    Rating?: RatingUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateWithoutUser_PropertyManagementCompany_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    Rating?: RatingUncheckedUpdateManyWithoutPropertyManagementCompanyInput
  }

  export type PropertyManagementCompanyUncheckedUpdateManyWithoutPropertyManagementCompany_PropertyManagementCompany_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingUpdateWithoutUser_Rating_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutUser_Rating_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyWithoutRating_Rating_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUpdateWithoutUser_Rating_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
    User_Rating_updatedByToUser?: UserUpdateOneWithoutRating_Rating_updatedByToUserInput
  }

  export type RatingUncheckedUpdateWithoutUser_Rating_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyWithoutRating_Rating_deletedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUpdateWithoutUser_Rating_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutRatingInput
    User_Rating_createdByToUser?: UserUpdateOneWithoutRating_Rating_createdByToUserInput
    User_Rating_deletedByToUser?: UserUpdateOneWithoutRating_Rating_deletedByToUserInput
    Business?: BusinessUpdateOneWithoutRatingInput
    Landlord?: LandlordUpdateOneWithoutRatingInput
    PropertyManagementCompany?: PropertyManagementCompanyUpdateOneWithoutRatingInput
  }

  export type RatingUncheckedUpdateWithoutUser_Rating_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyWithoutRating_Rating_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    landlordAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    doingBusinessAsAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    propertyManagementCompanyAtDateOfRating?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableIntFieldUpdateOperationsInput | number | null
    rentPrice?: FloatFieldUpdateOperationsInput | number
    body?: NullableJsonNullValueInput | InputJsonValue
    tenancyEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancyStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}