
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model CustomerCustomerDemo
 * 
 */
export type CustomerCustomerDemo = $Result.DefaultSelection<Prisma.$CustomerCustomerDemoPayload>
/**
 * Model CustomerDemographics
 * 
 */
export type CustomerDemographics = $Result.DefaultSelection<Prisma.$CustomerDemographicsPayload>
/**
 * Model EmployeeTerritories
 * 
 */
export type EmployeeTerritories = $Result.DefaultSelection<Prisma.$EmployeeTerritoriesPayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Order_Details
 * 
 */
export type Order_Details = $Result.DefaultSelection<Prisma.$Order_DetailsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Regions
 * 
 */
export type Regions = $Result.DefaultSelection<Prisma.$RegionsPayload>
/**
 * Model Shippers
 * 
 */
export type Shippers = $Result.DefaultSelection<Prisma.$ShippersPayload>
/**
 * Model Suppliers
 * 
 */
export type Suppliers = $Result.DefaultSelection<Prisma.$SuppliersPayload>
/**
 * Model Territories
 * 
 */
export type Territories = $Result.DefaultSelection<Prisma.$TerritoriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerCustomerDemo`: Exposes CRUD operations for the **CustomerCustomerDemo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerCustomerDemos
    * const customerCustomerDemos = await prisma.customerCustomerDemo.findMany()
    * ```
    */
  get customerCustomerDemo(): Prisma.CustomerCustomerDemoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerDemographics`: Exposes CRUD operations for the **CustomerDemographics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerDemographics
    * const customerDemographics = await prisma.customerDemographics.findMany()
    * ```
    */
  get customerDemographics(): Prisma.CustomerDemographicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeTerritories`: Exposes CRUD operations for the **EmployeeTerritories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeTerritories
    * const employeeTerritories = await prisma.employeeTerritories.findMany()
    * ```
    */
  get employeeTerritories(): Prisma.EmployeeTerritoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_Details`: Exposes CRUD operations for the **Order_Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_Details
    * const order_Details = await prisma.order_Details.findMany()
    * ```
    */
  get order_Details(): Prisma.Order_DetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **Regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.RegionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippers`: Exposes CRUD operations for the **Shippers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shippers
    * const shippers = await prisma.shippers.findMany()
    * ```
    */
  get shippers(): Prisma.ShippersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **Suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.SuppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.territories`: Exposes CRUD operations for the **Territories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Territories
    * const territories = await prisma.territories.findMany()
    * ```
    */
  get territories(): Prisma.TerritoriesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Categories: 'Categories',
    CustomerCustomerDemo: 'CustomerCustomerDemo',
    CustomerDemographics: 'CustomerDemographics',
    EmployeeTerritories: 'EmployeeTerritories',
    Employees: 'Employees',
    Order_Details: 'Order_Details',
    Orders: 'Orders',
    Products: 'Products',
    Regions: 'Regions',
    Shippers: 'Shippers',
    Suppliers: 'Suppliers',
    Territories: 'Territories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "customerCustomerDemo" | "customerDemographics" | "employeeTerritories" | "employees" | "order_Details" | "orders" | "products" | "regions" | "shippers" | "suppliers" | "territories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      CustomerCustomerDemo: {
        payload: Prisma.$CustomerCustomerDemoPayload<ExtArgs>
        fields: Prisma.CustomerCustomerDemoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerCustomerDemoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerCustomerDemoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          findFirst: {
            args: Prisma.CustomerCustomerDemoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerCustomerDemoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          findMany: {
            args: Prisma.CustomerCustomerDemoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>[]
          }
          create: {
            args: Prisma.CustomerCustomerDemoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          createMany: {
            args: Prisma.CustomerCustomerDemoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCustomerDemoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>[]
          }
          delete: {
            args: Prisma.CustomerCustomerDemoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          update: {
            args: Prisma.CustomerCustomerDemoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          deleteMany: {
            args: Prisma.CustomerCustomerDemoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerCustomerDemoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerCustomerDemoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>[]
          }
          upsert: {
            args: Prisma.CustomerCustomerDemoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCustomerDemoPayload>
          }
          aggregate: {
            args: Prisma.CustomerCustomerDemoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerCustomerDemo>
          }
          groupBy: {
            args: Prisma.CustomerCustomerDemoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerCustomerDemoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCustomerDemoCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCustomerDemoCountAggregateOutputType> | number
          }
        }
      }
      CustomerDemographics: {
        payload: Prisma.$CustomerDemographicsPayload<ExtArgs>
        fields: Prisma.CustomerDemographicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerDemographicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerDemographicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          findFirst: {
            args: Prisma.CustomerDemographicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerDemographicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          findMany: {
            args: Prisma.CustomerDemographicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>[]
          }
          create: {
            args: Prisma.CustomerDemographicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          createMany: {
            args: Prisma.CustomerDemographicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerDemographicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>[]
          }
          delete: {
            args: Prisma.CustomerDemographicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          update: {
            args: Prisma.CustomerDemographicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDemographicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerDemographicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerDemographicsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>[]
          }
          upsert: {
            args: Prisma.CustomerDemographicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDemographicsPayload>
          }
          aggregate: {
            args: Prisma.CustomerDemographicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerDemographics>
          }
          groupBy: {
            args: Prisma.CustomerDemographicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerDemographicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerDemographicsCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerDemographicsCountAggregateOutputType> | number
          }
        }
      }
      EmployeeTerritories: {
        payload: Prisma.$EmployeeTerritoriesPayload<ExtArgs>
        fields: Prisma.EmployeeTerritoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeTerritoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeTerritoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          findFirst: {
            args: Prisma.EmployeeTerritoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeTerritoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          findMany: {
            args: Prisma.EmployeeTerritoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>[]
          }
          create: {
            args: Prisma.EmployeeTerritoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          createMany: {
            args: Prisma.EmployeeTerritoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeTerritoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>[]
          }
          delete: {
            args: Prisma.EmployeeTerritoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          update: {
            args: Prisma.EmployeeTerritoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeTerritoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeTerritoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeTerritoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeTerritoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTerritoriesPayload>
          }
          aggregate: {
            args: Prisma.EmployeeTerritoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeTerritories>
          }
          groupBy: {
            args: Prisma.EmployeeTerritoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeTerritoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeTerritoriesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeTerritoriesCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Order_Details: {
        payload: Prisma.$Order_DetailsPayload<ExtArgs>
        fields: Prisma.Order_DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findFirst: {
            args: Prisma.Order_DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findMany: {
            args: Prisma.Order_DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          create: {
            args: Prisma.Order_DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          createMany: {
            args: Prisma.Order_DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_DetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          delete: {
            args: Prisma.Order_DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          update: {
            args: Prisma.Order_DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          deleteMany: {
            args: Prisma.Order_DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Order_DetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          upsert: {
            args: Prisma.Order_DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          aggregate: {
            args: Prisma.Order_DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_Details>
          }
          groupBy: {
            args: Prisma.Order_DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Regions: {
        payload: Prisma.$RegionsPayload<ExtArgs>
        fields: Prisma.RegionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findFirst: {
            args: Prisma.RegionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findMany: {
            args: Prisma.RegionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          create: {
            args: Prisma.RegionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          createMany: {
            args: Prisma.RegionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          delete: {
            args: Prisma.RegionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          update: {
            args: Prisma.RegionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          deleteMany: {
            args: Prisma.RegionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          upsert: {
            args: Prisma.RegionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.RegionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
          }
        }
      }
      Shippers: {
        payload: Prisma.$ShippersPayload<ExtArgs>
        fields: Prisma.ShippersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          findFirst: {
            args: Prisma.ShippersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          findMany: {
            args: Prisma.ShippersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>[]
          }
          create: {
            args: Prisma.ShippersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          createMany: {
            args: Prisma.ShippersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>[]
          }
          delete: {
            args: Prisma.ShippersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          update: {
            args: Prisma.ShippersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          deleteMany: {
            args: Prisma.ShippersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>[]
          }
          upsert: {
            args: Prisma.ShippersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippersPayload>
          }
          aggregate: {
            args: Prisma.ShippersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippers>
          }
          groupBy: {
            args: Prisma.ShippersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippersCountArgs<ExtArgs>
            result: $Utils.Optional<ShippersCountAggregateOutputType> | number
          }
        }
      }
      Suppliers: {
        payload: Prisma.$SuppliersPayload<ExtArgs>
        fields: Prisma.SuppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findFirst: {
            args: Prisma.SuppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findMany: {
            args: Prisma.SuppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          create: {
            args: Prisma.SuppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          createMany: {
            args: Prisma.SuppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          delete: {
            args: Prisma.SuppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          update: {
            args: Prisma.SuppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          deleteMany: {
            args: Prisma.SuppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          upsert: {
            args: Prisma.SuppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.SuppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      Territories: {
        payload: Prisma.$TerritoriesPayload<ExtArgs>
        fields: Prisma.TerritoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerritoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerritoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          findFirst: {
            args: Prisma.TerritoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerritoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          findMany: {
            args: Prisma.TerritoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>[]
          }
          create: {
            args: Prisma.TerritoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          createMany: {
            args: Prisma.TerritoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TerritoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>[]
          }
          delete: {
            args: Prisma.TerritoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          update: {
            args: Prisma.TerritoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          deleteMany: {
            args: Prisma.TerritoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerritoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TerritoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>[]
          }
          upsert: {
            args: Prisma.TerritoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerritoriesPayload>
          }
          aggregate: {
            args: Prisma.TerritoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerritories>
          }
          groupBy: {
            args: Prisma.TerritoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerritoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerritoriesCountArgs<ExtArgs>
            result: $Utils.Optional<TerritoriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: CategoriesOmit
    customerCustomerDemo?: CustomerCustomerDemoOmit
    customerDemographics?: CustomerDemographicsOmit
    employeeTerritories?: EmployeeTerritoriesOmit
    employees?: EmployeesOmit
    order_Details?: Order_DetailsOmit
    orders?: OrdersOmit
    products?: ProductsOmit
    regions?: RegionsOmit
    shippers?: ShippersOmit
    suppliers?: SuppliersOmit
    territories?: TerritoriesOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type CustomerDemographicsCountOutputType
   */

  export type CustomerDemographicsCountOutputType = {
    CustomerCustomerDemo: number
  }

  export type CustomerDemographicsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerCustomerDemo?: boolean | CustomerDemographicsCountOutputTypeCountCustomerCustomerDemoArgs
  }

  // Custom InputTypes
  /**
   * CustomerDemographicsCountOutputType without action
   */
  export type CustomerDemographicsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographicsCountOutputType
     */
    select?: CustomerDemographicsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerDemographicsCountOutputType without action
   */
  export type CustomerDemographicsCountOutputTypeCountCustomerCustomerDemoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCustomerDemoWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    EmployeeTerritories: number
    other_Employees: number
    Orders: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmployeeTerritories?: boolean | EmployeesCountOutputTypeCountEmployeeTerritoriesArgs
    other_Employees?: boolean | EmployeesCountOutputTypeCountOther_EmployeesArgs
    Orders?: boolean | EmployeesCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountEmployeeTerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeTerritoriesWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountOther_EmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Order_Details: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | OrdersCountOutputTypeCountOrder_DetailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Order_Details: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | ProductsCountOutputTypeCountOrder_DetailsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    Territories: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Territories?: boolean | RegionsCountOutputTypeCountTerritoriesArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountTerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerritoriesWhereInput
  }


  /**
   * Count Type ShippersCountOutputType
   */

  export type ShippersCountOutputType = {
    Orders: number
  }

  export type ShippersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | ShippersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ShippersCountOutputType without action
   */
  export type ShippersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippersCountOutputType
     */
    select?: ShippersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShippersCountOutputType without action
   */
  export type ShippersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    Products: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | SuppliersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type TerritoriesCountOutputType
   */

  export type TerritoriesCountOutputType = {
    EmployeeTerritories: number
  }

  export type TerritoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmployeeTerritories?: boolean | TerritoriesCountOutputTypeCountEmployeeTerritoriesArgs
  }

  // Custom InputTypes
  /**
   * TerritoriesCountOutputType without action
   */
  export type TerritoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerritoriesCountOutputType
     */
    select?: TerritoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerritoriesCountOutputType without action
   */
  export type TerritoriesCountOutputTypeCountEmployeeTerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeTerritoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    CategoryID: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    CategoryID: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    CategoryID: number | null
    CategoryName: string | null
    Description: string | null
    Picture: Uint8Array | null
  }

  export type CategoriesMaxAggregateOutputType = {
    CategoryID: number | null
    CategoryName: string | null
    Description: string | null
    Picture: Uint8Array | null
  }

  export type CategoriesCountAggregateOutputType = {
    CategoryID: number
    CategoryName: number
    Description: number
    Picture: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    CategoryID?: true
  }

  export type CategoriesSumAggregateInputType = {
    CategoryID?: true
  }

  export type CategoriesMinAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    Description?: true
    Picture?: true
  }

  export type CategoriesMaxAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    Description?: true
    Picture?: true
  }

  export type CategoriesCountAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    Description?: true
    Picture?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    CategoryID: number
    CategoryName: string | null
    Description: string | null
    Picture: Uint8Array | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoryID?: boolean
    CategoryName?: boolean
    Description?: boolean
    Picture?: boolean
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoryID?: boolean
    CategoryName?: boolean
    Description?: boolean
    Picture?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoryID?: boolean
    CategoryName?: boolean
    Description?: boolean
    Picture?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    CategoryID?: boolean
    CategoryName?: boolean
    Description?: boolean
    Picture?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CategoryID" | "CategoryName" | "Description" | "Picture", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CategoryID: number
      CategoryName: string | null
      Description: string | null
      Picture: Uint8Array | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `CategoryID`
     * const categoriesWithCategoryIDOnly = await prisma.categories.findMany({ select: { CategoryID: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `CategoryID`
     * const categoriesWithCategoryIDOnly = await prisma.categories.createManyAndReturn({
     *   select: { CategoryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `CategoryID`
     * const categoriesWithCategoryIDOnly = await prisma.categories.updateManyAndReturn({
     *   select: { CategoryID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly CategoryID: FieldRef<"Categories", 'Int'>
    readonly CategoryName: FieldRef<"Categories", 'String'>
    readonly Description: FieldRef<"Categories", 'String'>
    readonly Picture: FieldRef<"Categories", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data?: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model CustomerCustomerDemo
   */

  export type AggregateCustomerCustomerDemo = {
    _count: CustomerCustomerDemoCountAggregateOutputType | null
    _min: CustomerCustomerDemoMinAggregateOutputType | null
    _max: CustomerCustomerDemoMaxAggregateOutputType | null
  }

  export type CustomerCustomerDemoMinAggregateOutputType = {
    CustomerID: string | null
    CustomerTypeID: string | null
  }

  export type CustomerCustomerDemoMaxAggregateOutputType = {
    CustomerID: string | null
    CustomerTypeID: string | null
  }

  export type CustomerCustomerDemoCountAggregateOutputType = {
    CustomerID: number
    CustomerTypeID: number
    _all: number
  }


  export type CustomerCustomerDemoMinAggregateInputType = {
    CustomerID?: true
    CustomerTypeID?: true
  }

  export type CustomerCustomerDemoMaxAggregateInputType = {
    CustomerID?: true
    CustomerTypeID?: true
  }

  export type CustomerCustomerDemoCountAggregateInputType = {
    CustomerID?: true
    CustomerTypeID?: true
    _all?: true
  }

  export type CustomerCustomerDemoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCustomerDemo to aggregate.
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCustomerDemos to fetch.
     */
    orderBy?: CustomerCustomerDemoOrderByWithRelationInput | CustomerCustomerDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerCustomerDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCustomerDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCustomerDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerCustomerDemos
    **/
    _count?: true | CustomerCustomerDemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerCustomerDemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerCustomerDemoMaxAggregateInputType
  }

  export type GetCustomerCustomerDemoAggregateType<T extends CustomerCustomerDemoAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerCustomerDemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerCustomerDemo[P]>
      : GetScalarType<T[P], AggregateCustomerCustomerDemo[P]>
  }




  export type CustomerCustomerDemoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCustomerDemoWhereInput
    orderBy?: CustomerCustomerDemoOrderByWithAggregationInput | CustomerCustomerDemoOrderByWithAggregationInput[]
    by: CustomerCustomerDemoScalarFieldEnum[] | CustomerCustomerDemoScalarFieldEnum
    having?: CustomerCustomerDemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCustomerDemoCountAggregateInputType | true
    _min?: CustomerCustomerDemoMinAggregateInputType
    _max?: CustomerCustomerDemoMaxAggregateInputType
  }

  export type CustomerCustomerDemoGroupByOutputType = {
    CustomerID: string
    CustomerTypeID: string
    _count: CustomerCustomerDemoCountAggregateOutputType | null
    _min: CustomerCustomerDemoMinAggregateOutputType | null
    _max: CustomerCustomerDemoMaxAggregateOutputType | null
  }

  type GetCustomerCustomerDemoGroupByPayload<T extends CustomerCustomerDemoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerCustomerDemoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerCustomerDemoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerCustomerDemoGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerCustomerDemoGroupByOutputType[P]>
        }
      >
    >


  export type CustomerCustomerDemoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerID?: boolean
    CustomerTypeID?: boolean
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCustomerDemo"]>

  export type CustomerCustomerDemoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerID?: boolean
    CustomerTypeID?: boolean
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCustomerDemo"]>

  export type CustomerCustomerDemoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerID?: boolean
    CustomerTypeID?: boolean
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCustomerDemo"]>

  export type CustomerCustomerDemoSelectScalar = {
    CustomerID?: boolean
    CustomerTypeID?: boolean
  }

  export type CustomerCustomerDemoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CustomerID" | "CustomerTypeID", ExtArgs["result"]["customerCustomerDemo"]>
  export type CustomerCustomerDemoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }
  export type CustomerCustomerDemoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }
  export type CustomerCustomerDemoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerDemographics?: boolean | CustomerDemographicsDefaultArgs<ExtArgs>
  }

  export type $CustomerCustomerDemoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerCustomerDemo"
    objects: {
      CustomerDemographics: Prisma.$CustomerDemographicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CustomerID: string
      CustomerTypeID: string
    }, ExtArgs["result"]["customerCustomerDemo"]>
    composites: {}
  }

  type CustomerCustomerDemoGetPayload<S extends boolean | null | undefined | CustomerCustomerDemoDefaultArgs> = $Result.GetResult<Prisma.$CustomerCustomerDemoPayload, S>

  type CustomerCustomerDemoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerCustomerDemoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCustomerDemoCountAggregateInputType | true
    }

  export interface CustomerCustomerDemoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerCustomerDemo'], meta: { name: 'CustomerCustomerDemo' } }
    /**
     * Find zero or one CustomerCustomerDemo that matches the filter.
     * @param {CustomerCustomerDemoFindUniqueArgs} args - Arguments to find a CustomerCustomerDemo
     * @example
     * // Get one CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerCustomerDemoFindUniqueArgs>(args: SelectSubset<T, CustomerCustomerDemoFindUniqueArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerCustomerDemo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerCustomerDemoFindUniqueOrThrowArgs} args - Arguments to find a CustomerCustomerDemo
     * @example
     * // Get one CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerCustomerDemoFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerCustomerDemoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCustomerDemo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoFindFirstArgs} args - Arguments to find a CustomerCustomerDemo
     * @example
     * // Get one CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerCustomerDemoFindFirstArgs>(args?: SelectSubset<T, CustomerCustomerDemoFindFirstArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCustomerDemo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoFindFirstOrThrowArgs} args - Arguments to find a CustomerCustomerDemo
     * @example
     * // Get one CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerCustomerDemoFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerCustomerDemoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerCustomerDemos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerCustomerDemos
     * const customerCustomerDemos = await prisma.customerCustomerDemo.findMany()
     * 
     * // Get first 10 CustomerCustomerDemos
     * const customerCustomerDemos = await prisma.customerCustomerDemo.findMany({ take: 10 })
     * 
     * // Only select the `CustomerID`
     * const customerCustomerDemoWithCustomerIDOnly = await prisma.customerCustomerDemo.findMany({ select: { CustomerID: true } })
     * 
     */
    findMany<T extends CustomerCustomerDemoFindManyArgs>(args?: SelectSubset<T, CustomerCustomerDemoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerCustomerDemo.
     * @param {CustomerCustomerDemoCreateArgs} args - Arguments to create a CustomerCustomerDemo.
     * @example
     * // Create one CustomerCustomerDemo
     * const CustomerCustomerDemo = await prisma.customerCustomerDemo.create({
     *   data: {
     *     // ... data to create a CustomerCustomerDemo
     *   }
     * })
     * 
     */
    create<T extends CustomerCustomerDemoCreateArgs>(args: SelectSubset<T, CustomerCustomerDemoCreateArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerCustomerDemos.
     * @param {CustomerCustomerDemoCreateManyArgs} args - Arguments to create many CustomerCustomerDemos.
     * @example
     * // Create many CustomerCustomerDemos
     * const customerCustomerDemo = await prisma.customerCustomerDemo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCustomerDemoCreateManyArgs>(args?: SelectSubset<T, CustomerCustomerDemoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerCustomerDemos and returns the data saved in the database.
     * @param {CustomerCustomerDemoCreateManyAndReturnArgs} args - Arguments to create many CustomerCustomerDemos.
     * @example
     * // Create many CustomerCustomerDemos
     * const customerCustomerDemo = await prisma.customerCustomerDemo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerCustomerDemos and only return the `CustomerID`
     * const customerCustomerDemoWithCustomerIDOnly = await prisma.customerCustomerDemo.createManyAndReturn({
     *   select: { CustomerID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCustomerDemoCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCustomerDemoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerCustomerDemo.
     * @param {CustomerCustomerDemoDeleteArgs} args - Arguments to delete one CustomerCustomerDemo.
     * @example
     * // Delete one CustomerCustomerDemo
     * const CustomerCustomerDemo = await prisma.customerCustomerDemo.delete({
     *   where: {
     *     // ... filter to delete one CustomerCustomerDemo
     *   }
     * })
     * 
     */
    delete<T extends CustomerCustomerDemoDeleteArgs>(args: SelectSubset<T, CustomerCustomerDemoDeleteArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerCustomerDemo.
     * @param {CustomerCustomerDemoUpdateArgs} args - Arguments to update one CustomerCustomerDemo.
     * @example
     * // Update one CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerCustomerDemoUpdateArgs>(args: SelectSubset<T, CustomerCustomerDemoUpdateArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerCustomerDemos.
     * @param {CustomerCustomerDemoDeleteManyArgs} args - Arguments to filter CustomerCustomerDemos to delete.
     * @example
     * // Delete a few CustomerCustomerDemos
     * const { count } = await prisma.customerCustomerDemo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerCustomerDemoDeleteManyArgs>(args?: SelectSubset<T, CustomerCustomerDemoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCustomerDemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerCustomerDemos
     * const customerCustomerDemo = await prisma.customerCustomerDemo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerCustomerDemoUpdateManyArgs>(args: SelectSubset<T, CustomerCustomerDemoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCustomerDemos and returns the data updated in the database.
     * @param {CustomerCustomerDemoUpdateManyAndReturnArgs} args - Arguments to update many CustomerCustomerDemos.
     * @example
     * // Update many CustomerCustomerDemos
     * const customerCustomerDemo = await prisma.customerCustomerDemo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerCustomerDemos and only return the `CustomerID`
     * const customerCustomerDemoWithCustomerIDOnly = await prisma.customerCustomerDemo.updateManyAndReturn({
     *   select: { CustomerID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerCustomerDemoUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerCustomerDemoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerCustomerDemo.
     * @param {CustomerCustomerDemoUpsertArgs} args - Arguments to update or create a CustomerCustomerDemo.
     * @example
     * // Update or create a CustomerCustomerDemo
     * const customerCustomerDemo = await prisma.customerCustomerDemo.upsert({
     *   create: {
     *     // ... data to create a CustomerCustomerDemo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerCustomerDemo we want to update
     *   }
     * })
     */
    upsert<T extends CustomerCustomerDemoUpsertArgs>(args: SelectSubset<T, CustomerCustomerDemoUpsertArgs<ExtArgs>>): Prisma__CustomerCustomerDemoClient<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerCustomerDemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoCountArgs} args - Arguments to filter CustomerCustomerDemos to count.
     * @example
     * // Count the number of CustomerCustomerDemos
     * const count = await prisma.customerCustomerDemo.count({
     *   where: {
     *     // ... the filter for the CustomerCustomerDemos we want to count
     *   }
     * })
    **/
    count<T extends CustomerCustomerDemoCountArgs>(
      args?: Subset<T, CustomerCustomerDemoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCustomerDemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerCustomerDemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerCustomerDemoAggregateArgs>(args: Subset<T, CustomerCustomerDemoAggregateArgs>): Prisma.PrismaPromise<GetCustomerCustomerDemoAggregateType<T>>

    /**
     * Group by CustomerCustomerDemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCustomerDemoGroupByArgs} args - Group by arguments.
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
      T extends CustomerCustomerDemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerCustomerDemoGroupByArgs['orderBy'] }
        : { orderBy?: CustomerCustomerDemoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerCustomerDemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerCustomerDemoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerCustomerDemo model
   */
  readonly fields: CustomerCustomerDemoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerCustomerDemo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerCustomerDemoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomerDemographics<T extends CustomerDemographicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDemographicsDefaultArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerCustomerDemo model
   */
  interface CustomerCustomerDemoFieldRefs {
    readonly CustomerID: FieldRef<"CustomerCustomerDemo", 'String'>
    readonly CustomerTypeID: FieldRef<"CustomerCustomerDemo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerCustomerDemo findUnique
   */
  export type CustomerCustomerDemoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCustomerDemo to fetch.
     */
    where: CustomerCustomerDemoWhereUniqueInput
  }

  /**
   * CustomerCustomerDemo findUniqueOrThrow
   */
  export type CustomerCustomerDemoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCustomerDemo to fetch.
     */
    where: CustomerCustomerDemoWhereUniqueInput
  }

  /**
   * CustomerCustomerDemo findFirst
   */
  export type CustomerCustomerDemoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCustomerDemo to fetch.
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCustomerDemos to fetch.
     */
    orderBy?: CustomerCustomerDemoOrderByWithRelationInput | CustomerCustomerDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCustomerDemos.
     */
    cursor?: CustomerCustomerDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCustomerDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCustomerDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCustomerDemos.
     */
    distinct?: CustomerCustomerDemoScalarFieldEnum | CustomerCustomerDemoScalarFieldEnum[]
  }

  /**
   * CustomerCustomerDemo findFirstOrThrow
   */
  export type CustomerCustomerDemoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCustomerDemo to fetch.
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCustomerDemos to fetch.
     */
    orderBy?: CustomerCustomerDemoOrderByWithRelationInput | CustomerCustomerDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCustomerDemos.
     */
    cursor?: CustomerCustomerDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCustomerDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCustomerDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCustomerDemos.
     */
    distinct?: CustomerCustomerDemoScalarFieldEnum | CustomerCustomerDemoScalarFieldEnum[]
  }

  /**
   * CustomerCustomerDemo findMany
   */
  export type CustomerCustomerDemoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCustomerDemos to fetch.
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCustomerDemos to fetch.
     */
    orderBy?: CustomerCustomerDemoOrderByWithRelationInput | CustomerCustomerDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerCustomerDemos.
     */
    cursor?: CustomerCustomerDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCustomerDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCustomerDemos.
     */
    skip?: number
    distinct?: CustomerCustomerDemoScalarFieldEnum | CustomerCustomerDemoScalarFieldEnum[]
  }

  /**
   * CustomerCustomerDemo create
   */
  export type CustomerCustomerDemoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerCustomerDemo.
     */
    data: XOR<CustomerCustomerDemoCreateInput, CustomerCustomerDemoUncheckedCreateInput>
  }

  /**
   * CustomerCustomerDemo createMany
   */
  export type CustomerCustomerDemoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerCustomerDemos.
     */
    data: CustomerCustomerDemoCreateManyInput | CustomerCustomerDemoCreateManyInput[]
  }

  /**
   * CustomerCustomerDemo createManyAndReturn
   */
  export type CustomerCustomerDemoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerCustomerDemos.
     */
    data: CustomerCustomerDemoCreateManyInput | CustomerCustomerDemoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerCustomerDemo update
   */
  export type CustomerCustomerDemoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerCustomerDemo.
     */
    data: XOR<CustomerCustomerDemoUpdateInput, CustomerCustomerDemoUncheckedUpdateInput>
    /**
     * Choose, which CustomerCustomerDemo to update.
     */
    where: CustomerCustomerDemoWhereUniqueInput
  }

  /**
   * CustomerCustomerDemo updateMany
   */
  export type CustomerCustomerDemoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerCustomerDemos.
     */
    data: XOR<CustomerCustomerDemoUpdateManyMutationInput, CustomerCustomerDemoUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCustomerDemos to update
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * Limit how many CustomerCustomerDemos to update.
     */
    limit?: number
  }

  /**
   * CustomerCustomerDemo updateManyAndReturn
   */
  export type CustomerCustomerDemoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * The data used to update CustomerCustomerDemos.
     */
    data: XOR<CustomerCustomerDemoUpdateManyMutationInput, CustomerCustomerDemoUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCustomerDemos to update
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * Limit how many CustomerCustomerDemos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerCustomerDemo upsert
   */
  export type CustomerCustomerDemoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerCustomerDemo to update in case it exists.
     */
    where: CustomerCustomerDemoWhereUniqueInput
    /**
     * In case the CustomerCustomerDemo found by the `where` argument doesn't exist, create a new CustomerCustomerDemo with this data.
     */
    create: XOR<CustomerCustomerDemoCreateInput, CustomerCustomerDemoUncheckedCreateInput>
    /**
     * In case the CustomerCustomerDemo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerCustomerDemoUpdateInput, CustomerCustomerDemoUncheckedUpdateInput>
  }

  /**
   * CustomerCustomerDemo delete
   */
  export type CustomerCustomerDemoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    /**
     * Filter which CustomerCustomerDemo to delete.
     */
    where: CustomerCustomerDemoWhereUniqueInput
  }

  /**
   * CustomerCustomerDemo deleteMany
   */
  export type CustomerCustomerDemoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCustomerDemos to delete
     */
    where?: CustomerCustomerDemoWhereInput
    /**
     * Limit how many CustomerCustomerDemos to delete.
     */
    limit?: number
  }

  /**
   * CustomerCustomerDemo without action
   */
  export type CustomerCustomerDemoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
  }


  /**
   * Model CustomerDemographics
   */

  export type AggregateCustomerDemographics = {
    _count: CustomerDemographicsCountAggregateOutputType | null
    _min: CustomerDemographicsMinAggregateOutputType | null
    _max: CustomerDemographicsMaxAggregateOutputType | null
  }

  export type CustomerDemographicsMinAggregateOutputType = {
    CustomerTypeID: string | null
    CustomerDesc: string | null
  }

  export type CustomerDemographicsMaxAggregateOutputType = {
    CustomerTypeID: string | null
    CustomerDesc: string | null
  }

  export type CustomerDemographicsCountAggregateOutputType = {
    CustomerTypeID: number
    CustomerDesc: number
    _all: number
  }


  export type CustomerDemographicsMinAggregateInputType = {
    CustomerTypeID?: true
    CustomerDesc?: true
  }

  export type CustomerDemographicsMaxAggregateInputType = {
    CustomerTypeID?: true
    CustomerDesc?: true
  }

  export type CustomerDemographicsCountAggregateInputType = {
    CustomerTypeID?: true
    CustomerDesc?: true
    _all?: true
  }

  export type CustomerDemographicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDemographics to aggregate.
     */
    where?: CustomerDemographicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDemographics to fetch.
     */
    orderBy?: CustomerDemographicsOrderByWithRelationInput | CustomerDemographicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerDemographicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDemographics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDemographics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerDemographics
    **/
    _count?: true | CustomerDemographicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerDemographicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerDemographicsMaxAggregateInputType
  }

  export type GetCustomerDemographicsAggregateType<T extends CustomerDemographicsAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerDemographics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerDemographics[P]>
      : GetScalarType<T[P], AggregateCustomerDemographics[P]>
  }




  export type CustomerDemographicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDemographicsWhereInput
    orderBy?: CustomerDemographicsOrderByWithAggregationInput | CustomerDemographicsOrderByWithAggregationInput[]
    by: CustomerDemographicsScalarFieldEnum[] | CustomerDemographicsScalarFieldEnum
    having?: CustomerDemographicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerDemographicsCountAggregateInputType | true
    _min?: CustomerDemographicsMinAggregateInputType
    _max?: CustomerDemographicsMaxAggregateInputType
  }

  export type CustomerDemographicsGroupByOutputType = {
    CustomerTypeID: string
    CustomerDesc: string | null
    _count: CustomerDemographicsCountAggregateOutputType | null
    _min: CustomerDemographicsMinAggregateOutputType | null
    _max: CustomerDemographicsMaxAggregateOutputType | null
  }

  type GetCustomerDemographicsGroupByPayload<T extends CustomerDemographicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerDemographicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerDemographicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerDemographicsGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerDemographicsGroupByOutputType[P]>
        }
      >
    >


  export type CustomerDemographicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerTypeID?: boolean
    CustomerDesc?: boolean
    CustomerCustomerDemo?: boolean | CustomerDemographics$CustomerCustomerDemoArgs<ExtArgs>
    _count?: boolean | CustomerDemographicsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerDemographics"]>

  export type CustomerDemographicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerTypeID?: boolean
    CustomerDesc?: boolean
  }, ExtArgs["result"]["customerDemographics"]>

  export type CustomerDemographicsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerTypeID?: boolean
    CustomerDesc?: boolean
  }, ExtArgs["result"]["customerDemographics"]>

  export type CustomerDemographicsSelectScalar = {
    CustomerTypeID?: boolean
    CustomerDesc?: boolean
  }

  export type CustomerDemographicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CustomerTypeID" | "CustomerDesc", ExtArgs["result"]["customerDemographics"]>
  export type CustomerDemographicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerCustomerDemo?: boolean | CustomerDemographics$CustomerCustomerDemoArgs<ExtArgs>
    _count?: boolean | CustomerDemographicsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerDemographicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerDemographicsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerDemographicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerDemographics"
    objects: {
      CustomerCustomerDemo: Prisma.$CustomerCustomerDemoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CustomerTypeID: string
      CustomerDesc: string | null
    }, ExtArgs["result"]["customerDemographics"]>
    composites: {}
  }

  type CustomerDemographicsGetPayload<S extends boolean | null | undefined | CustomerDemographicsDefaultArgs> = $Result.GetResult<Prisma.$CustomerDemographicsPayload, S>

  type CustomerDemographicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerDemographicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerDemographicsCountAggregateInputType | true
    }

  export interface CustomerDemographicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerDemographics'], meta: { name: 'CustomerDemographics' } }
    /**
     * Find zero or one CustomerDemographics that matches the filter.
     * @param {CustomerDemographicsFindUniqueArgs} args - Arguments to find a CustomerDemographics
     * @example
     * // Get one CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerDemographicsFindUniqueArgs>(args: SelectSubset<T, CustomerDemographicsFindUniqueArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerDemographics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerDemographicsFindUniqueOrThrowArgs} args - Arguments to find a CustomerDemographics
     * @example
     * // Get one CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerDemographicsFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerDemographicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDemographics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsFindFirstArgs} args - Arguments to find a CustomerDemographics
     * @example
     * // Get one CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerDemographicsFindFirstArgs>(args?: SelectSubset<T, CustomerDemographicsFindFirstArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDemographics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsFindFirstOrThrowArgs} args - Arguments to find a CustomerDemographics
     * @example
     * // Get one CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerDemographicsFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerDemographicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerDemographics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findMany()
     * 
     * // Get first 10 CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.findMany({ take: 10 })
     * 
     * // Only select the `CustomerTypeID`
     * const customerDemographicsWithCustomerTypeIDOnly = await prisma.customerDemographics.findMany({ select: { CustomerTypeID: true } })
     * 
     */
    findMany<T extends CustomerDemographicsFindManyArgs>(args?: SelectSubset<T, CustomerDemographicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerDemographics.
     * @param {CustomerDemographicsCreateArgs} args - Arguments to create a CustomerDemographics.
     * @example
     * // Create one CustomerDemographics
     * const CustomerDemographics = await prisma.customerDemographics.create({
     *   data: {
     *     // ... data to create a CustomerDemographics
     *   }
     * })
     * 
     */
    create<T extends CustomerDemographicsCreateArgs>(args: SelectSubset<T, CustomerDemographicsCreateArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerDemographics.
     * @param {CustomerDemographicsCreateManyArgs} args - Arguments to create many CustomerDemographics.
     * @example
     * // Create many CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerDemographicsCreateManyArgs>(args?: SelectSubset<T, CustomerDemographicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerDemographics and returns the data saved in the database.
     * @param {CustomerDemographicsCreateManyAndReturnArgs} args - Arguments to create many CustomerDemographics.
     * @example
     * // Create many CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerDemographics and only return the `CustomerTypeID`
     * const customerDemographicsWithCustomerTypeIDOnly = await prisma.customerDemographics.createManyAndReturn({
     *   select: { CustomerTypeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerDemographicsCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerDemographicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerDemographics.
     * @param {CustomerDemographicsDeleteArgs} args - Arguments to delete one CustomerDemographics.
     * @example
     * // Delete one CustomerDemographics
     * const CustomerDemographics = await prisma.customerDemographics.delete({
     *   where: {
     *     // ... filter to delete one CustomerDemographics
     *   }
     * })
     * 
     */
    delete<T extends CustomerDemographicsDeleteArgs>(args: SelectSubset<T, CustomerDemographicsDeleteArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerDemographics.
     * @param {CustomerDemographicsUpdateArgs} args - Arguments to update one CustomerDemographics.
     * @example
     * // Update one CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerDemographicsUpdateArgs>(args: SelectSubset<T, CustomerDemographicsUpdateArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerDemographics.
     * @param {CustomerDemographicsDeleteManyArgs} args - Arguments to filter CustomerDemographics to delete.
     * @example
     * // Delete a few CustomerDemographics
     * const { count } = await prisma.customerDemographics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDemographicsDeleteManyArgs>(args?: SelectSubset<T, CustomerDemographicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerDemographics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerDemographicsUpdateManyArgs>(args: SelectSubset<T, CustomerDemographicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerDemographics and returns the data updated in the database.
     * @param {CustomerDemographicsUpdateManyAndReturnArgs} args - Arguments to update many CustomerDemographics.
     * @example
     * // Update many CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerDemographics and only return the `CustomerTypeID`
     * const customerDemographicsWithCustomerTypeIDOnly = await prisma.customerDemographics.updateManyAndReturn({
     *   select: { CustomerTypeID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerDemographicsUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerDemographicsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerDemographics.
     * @param {CustomerDemographicsUpsertArgs} args - Arguments to update or create a CustomerDemographics.
     * @example
     * // Update or create a CustomerDemographics
     * const customerDemographics = await prisma.customerDemographics.upsert({
     *   create: {
     *     // ... data to create a CustomerDemographics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerDemographics we want to update
     *   }
     * })
     */
    upsert<T extends CustomerDemographicsUpsertArgs>(args: SelectSubset<T, CustomerDemographicsUpsertArgs<ExtArgs>>): Prisma__CustomerDemographicsClient<$Result.GetResult<Prisma.$CustomerDemographicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerDemographics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsCountArgs} args - Arguments to filter CustomerDemographics to count.
     * @example
     * // Count the number of CustomerDemographics
     * const count = await prisma.customerDemographics.count({
     *   where: {
     *     // ... the filter for the CustomerDemographics we want to count
     *   }
     * })
    **/
    count<T extends CustomerDemographicsCountArgs>(
      args?: Subset<T, CustomerDemographicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerDemographicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerDemographics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerDemographicsAggregateArgs>(args: Subset<T, CustomerDemographicsAggregateArgs>): Prisma.PrismaPromise<GetCustomerDemographicsAggregateType<T>>

    /**
     * Group by CustomerDemographics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDemographicsGroupByArgs} args - Group by arguments.
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
      T extends CustomerDemographicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerDemographicsGroupByArgs['orderBy'] }
        : { orderBy?: CustomerDemographicsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerDemographicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerDemographicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerDemographics model
   */
  readonly fields: CustomerDemographicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerDemographics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerDemographicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomerCustomerDemo<T extends CustomerDemographics$CustomerCustomerDemoArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDemographics$CustomerCustomerDemoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCustomerDemoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerDemographics model
   */
  interface CustomerDemographicsFieldRefs {
    readonly CustomerTypeID: FieldRef<"CustomerDemographics", 'String'>
    readonly CustomerDesc: FieldRef<"CustomerDemographics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerDemographics findUnique
   */
  export type CustomerDemographicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDemographics to fetch.
     */
    where: CustomerDemographicsWhereUniqueInput
  }

  /**
   * CustomerDemographics findUniqueOrThrow
   */
  export type CustomerDemographicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDemographics to fetch.
     */
    where: CustomerDemographicsWhereUniqueInput
  }

  /**
   * CustomerDemographics findFirst
   */
  export type CustomerDemographicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDemographics to fetch.
     */
    where?: CustomerDemographicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDemographics to fetch.
     */
    orderBy?: CustomerDemographicsOrderByWithRelationInput | CustomerDemographicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDemographics.
     */
    cursor?: CustomerDemographicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDemographics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDemographics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDemographics.
     */
    distinct?: CustomerDemographicsScalarFieldEnum | CustomerDemographicsScalarFieldEnum[]
  }

  /**
   * CustomerDemographics findFirstOrThrow
   */
  export type CustomerDemographicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDemographics to fetch.
     */
    where?: CustomerDemographicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDemographics to fetch.
     */
    orderBy?: CustomerDemographicsOrderByWithRelationInput | CustomerDemographicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDemographics.
     */
    cursor?: CustomerDemographicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDemographics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDemographics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDemographics.
     */
    distinct?: CustomerDemographicsScalarFieldEnum | CustomerDemographicsScalarFieldEnum[]
  }

  /**
   * CustomerDemographics findMany
   */
  export type CustomerDemographicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDemographics to fetch.
     */
    where?: CustomerDemographicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDemographics to fetch.
     */
    orderBy?: CustomerDemographicsOrderByWithRelationInput | CustomerDemographicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerDemographics.
     */
    cursor?: CustomerDemographicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDemographics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDemographics.
     */
    skip?: number
    distinct?: CustomerDemographicsScalarFieldEnum | CustomerDemographicsScalarFieldEnum[]
  }

  /**
   * CustomerDemographics create
   */
  export type CustomerDemographicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerDemographics.
     */
    data: XOR<CustomerDemographicsCreateInput, CustomerDemographicsUncheckedCreateInput>
  }

  /**
   * CustomerDemographics createMany
   */
  export type CustomerDemographicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerDemographics.
     */
    data: CustomerDemographicsCreateManyInput | CustomerDemographicsCreateManyInput[]
  }

  /**
   * CustomerDemographics createManyAndReturn
   */
  export type CustomerDemographicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerDemographics.
     */
    data: CustomerDemographicsCreateManyInput | CustomerDemographicsCreateManyInput[]
  }

  /**
   * CustomerDemographics update
   */
  export type CustomerDemographicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerDemographics.
     */
    data: XOR<CustomerDemographicsUpdateInput, CustomerDemographicsUncheckedUpdateInput>
    /**
     * Choose, which CustomerDemographics to update.
     */
    where: CustomerDemographicsWhereUniqueInput
  }

  /**
   * CustomerDemographics updateMany
   */
  export type CustomerDemographicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerDemographics.
     */
    data: XOR<CustomerDemographicsUpdateManyMutationInput, CustomerDemographicsUncheckedUpdateManyInput>
    /**
     * Filter which CustomerDemographics to update
     */
    where?: CustomerDemographicsWhereInput
    /**
     * Limit how many CustomerDemographics to update.
     */
    limit?: number
  }

  /**
   * CustomerDemographics updateManyAndReturn
   */
  export type CustomerDemographicsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * The data used to update CustomerDemographics.
     */
    data: XOR<CustomerDemographicsUpdateManyMutationInput, CustomerDemographicsUncheckedUpdateManyInput>
    /**
     * Filter which CustomerDemographics to update
     */
    where?: CustomerDemographicsWhereInput
    /**
     * Limit how many CustomerDemographics to update.
     */
    limit?: number
  }

  /**
   * CustomerDemographics upsert
   */
  export type CustomerDemographicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerDemographics to update in case it exists.
     */
    where: CustomerDemographicsWhereUniqueInput
    /**
     * In case the CustomerDemographics found by the `where` argument doesn't exist, create a new CustomerDemographics with this data.
     */
    create: XOR<CustomerDemographicsCreateInput, CustomerDemographicsUncheckedCreateInput>
    /**
     * In case the CustomerDemographics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerDemographicsUpdateInput, CustomerDemographicsUncheckedUpdateInput>
  }

  /**
   * CustomerDemographics delete
   */
  export type CustomerDemographicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
    /**
     * Filter which CustomerDemographics to delete.
     */
    where: CustomerDemographicsWhereUniqueInput
  }

  /**
   * CustomerDemographics deleteMany
   */
  export type CustomerDemographicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDemographics to delete
     */
    where?: CustomerDemographicsWhereInput
    /**
     * Limit how many CustomerDemographics to delete.
     */
    limit?: number
  }

  /**
   * CustomerDemographics.CustomerCustomerDemo
   */
  export type CustomerDemographics$CustomerCustomerDemoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCustomerDemo
     */
    select?: CustomerCustomerDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCustomerDemo
     */
    omit?: CustomerCustomerDemoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCustomerDemoInclude<ExtArgs> | null
    where?: CustomerCustomerDemoWhereInput
    orderBy?: CustomerCustomerDemoOrderByWithRelationInput | CustomerCustomerDemoOrderByWithRelationInput[]
    cursor?: CustomerCustomerDemoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerCustomerDemoScalarFieldEnum | CustomerCustomerDemoScalarFieldEnum[]
  }

  /**
   * CustomerDemographics without action
   */
  export type CustomerDemographicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDemographics
     */
    select?: CustomerDemographicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDemographics
     */
    omit?: CustomerDemographicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDemographicsInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeTerritories
   */

  export type AggregateEmployeeTerritories = {
    _count: EmployeeTerritoriesCountAggregateOutputType | null
    _avg: EmployeeTerritoriesAvgAggregateOutputType | null
    _sum: EmployeeTerritoriesSumAggregateOutputType | null
    _min: EmployeeTerritoriesMinAggregateOutputType | null
    _max: EmployeeTerritoriesMaxAggregateOutputType | null
  }

  export type EmployeeTerritoriesAvgAggregateOutputType = {
    EmployeeID: number | null
  }

  export type EmployeeTerritoriesSumAggregateOutputType = {
    EmployeeID: number | null
  }

  export type EmployeeTerritoriesMinAggregateOutputType = {
    EmployeeID: number | null
    TerritoryID: string | null
  }

  export type EmployeeTerritoriesMaxAggregateOutputType = {
    EmployeeID: number | null
    TerritoryID: string | null
  }

  export type EmployeeTerritoriesCountAggregateOutputType = {
    EmployeeID: number
    TerritoryID: number
    _all: number
  }


  export type EmployeeTerritoriesAvgAggregateInputType = {
    EmployeeID?: true
  }

  export type EmployeeTerritoriesSumAggregateInputType = {
    EmployeeID?: true
  }

  export type EmployeeTerritoriesMinAggregateInputType = {
    EmployeeID?: true
    TerritoryID?: true
  }

  export type EmployeeTerritoriesMaxAggregateInputType = {
    EmployeeID?: true
    TerritoryID?: true
  }

  export type EmployeeTerritoriesCountAggregateInputType = {
    EmployeeID?: true
    TerritoryID?: true
    _all?: true
  }

  export type EmployeeTerritoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeTerritories to aggregate.
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTerritories to fetch.
     */
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeTerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTerritories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTerritories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeTerritories
    **/
    _count?: true | EmployeeTerritoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeTerritoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeTerritoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeTerritoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeTerritoriesMaxAggregateInputType
  }

  export type GetEmployeeTerritoriesAggregateType<T extends EmployeeTerritoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeTerritories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeTerritories[P]>
      : GetScalarType<T[P], AggregateEmployeeTerritories[P]>
  }




  export type EmployeeTerritoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeTerritoriesWhereInput
    orderBy?: EmployeeTerritoriesOrderByWithAggregationInput | EmployeeTerritoriesOrderByWithAggregationInput[]
    by: EmployeeTerritoriesScalarFieldEnum[] | EmployeeTerritoriesScalarFieldEnum
    having?: EmployeeTerritoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeTerritoriesCountAggregateInputType | true
    _avg?: EmployeeTerritoriesAvgAggregateInputType
    _sum?: EmployeeTerritoriesSumAggregateInputType
    _min?: EmployeeTerritoriesMinAggregateInputType
    _max?: EmployeeTerritoriesMaxAggregateInputType
  }

  export type EmployeeTerritoriesGroupByOutputType = {
    EmployeeID: number
    TerritoryID: string
    _count: EmployeeTerritoriesCountAggregateOutputType | null
    _avg: EmployeeTerritoriesAvgAggregateOutputType | null
    _sum: EmployeeTerritoriesSumAggregateOutputType | null
    _min: EmployeeTerritoriesMinAggregateOutputType | null
    _max: EmployeeTerritoriesMaxAggregateOutputType | null
  }

  type GetEmployeeTerritoriesGroupByPayload<T extends EmployeeTerritoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeTerritoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeTerritoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeTerritoriesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeTerritoriesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeTerritoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    TerritoryID?: boolean
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeTerritories"]>

  export type EmployeeTerritoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    TerritoryID?: boolean
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeTerritories"]>

  export type EmployeeTerritoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    TerritoryID?: boolean
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeTerritories"]>

  export type EmployeeTerritoriesSelectScalar = {
    EmployeeID?: boolean
    TerritoryID?: boolean
  }

  export type EmployeeTerritoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EmployeeID" | "TerritoryID", ExtArgs["result"]["employeeTerritories"]>
  export type EmployeeTerritoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type EmployeeTerritoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type EmployeeTerritoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Territories?: boolean | TerritoriesDefaultArgs<ExtArgs>
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }

  export type $EmployeeTerritoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeTerritories"
    objects: {
      Territories: Prisma.$TerritoriesPayload<ExtArgs>
      Employees: Prisma.$EmployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      EmployeeID: number
      TerritoryID: string
    }, ExtArgs["result"]["employeeTerritories"]>
    composites: {}
  }

  type EmployeeTerritoriesGetPayload<S extends boolean | null | undefined | EmployeeTerritoriesDefaultArgs> = $Result.GetResult<Prisma.$EmployeeTerritoriesPayload, S>

  type EmployeeTerritoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeTerritoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeTerritoriesCountAggregateInputType | true
    }

  export interface EmployeeTerritoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeTerritories'], meta: { name: 'EmployeeTerritories' } }
    /**
     * Find zero or one EmployeeTerritories that matches the filter.
     * @param {EmployeeTerritoriesFindUniqueArgs} args - Arguments to find a EmployeeTerritories
     * @example
     * // Get one EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeTerritoriesFindUniqueArgs>(args: SelectSubset<T, EmployeeTerritoriesFindUniqueArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeTerritories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeTerritoriesFindUniqueOrThrowArgs} args - Arguments to find a EmployeeTerritories
     * @example
     * // Get one EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeTerritoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeTerritoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeTerritories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesFindFirstArgs} args - Arguments to find a EmployeeTerritories
     * @example
     * // Get one EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeTerritoriesFindFirstArgs>(args?: SelectSubset<T, EmployeeTerritoriesFindFirstArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeTerritories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesFindFirstOrThrowArgs} args - Arguments to find a EmployeeTerritories
     * @example
     * // Get one EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeTerritoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeTerritoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeTerritories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findMany()
     * 
     * // Get first 10 EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.findMany({ take: 10 })
     * 
     * // Only select the `EmployeeID`
     * const employeeTerritoriesWithEmployeeIDOnly = await prisma.employeeTerritories.findMany({ select: { EmployeeID: true } })
     * 
     */
    findMany<T extends EmployeeTerritoriesFindManyArgs>(args?: SelectSubset<T, EmployeeTerritoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeTerritories.
     * @param {EmployeeTerritoriesCreateArgs} args - Arguments to create a EmployeeTerritories.
     * @example
     * // Create one EmployeeTerritories
     * const EmployeeTerritories = await prisma.employeeTerritories.create({
     *   data: {
     *     // ... data to create a EmployeeTerritories
     *   }
     * })
     * 
     */
    create<T extends EmployeeTerritoriesCreateArgs>(args: SelectSubset<T, EmployeeTerritoriesCreateArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeTerritories.
     * @param {EmployeeTerritoriesCreateManyArgs} args - Arguments to create many EmployeeTerritories.
     * @example
     * // Create many EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeTerritoriesCreateManyArgs>(args?: SelectSubset<T, EmployeeTerritoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeTerritories and returns the data saved in the database.
     * @param {EmployeeTerritoriesCreateManyAndReturnArgs} args - Arguments to create many EmployeeTerritories.
     * @example
     * // Create many EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeTerritories and only return the `EmployeeID`
     * const employeeTerritoriesWithEmployeeIDOnly = await prisma.employeeTerritories.createManyAndReturn({
     *   select: { EmployeeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeTerritoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeTerritoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeTerritories.
     * @param {EmployeeTerritoriesDeleteArgs} args - Arguments to delete one EmployeeTerritories.
     * @example
     * // Delete one EmployeeTerritories
     * const EmployeeTerritories = await prisma.employeeTerritories.delete({
     *   where: {
     *     // ... filter to delete one EmployeeTerritories
     *   }
     * })
     * 
     */
    delete<T extends EmployeeTerritoriesDeleteArgs>(args: SelectSubset<T, EmployeeTerritoriesDeleteArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeTerritories.
     * @param {EmployeeTerritoriesUpdateArgs} args - Arguments to update one EmployeeTerritories.
     * @example
     * // Update one EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeTerritoriesUpdateArgs>(args: SelectSubset<T, EmployeeTerritoriesUpdateArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeTerritories.
     * @param {EmployeeTerritoriesDeleteManyArgs} args - Arguments to filter EmployeeTerritories to delete.
     * @example
     * // Delete a few EmployeeTerritories
     * const { count } = await prisma.employeeTerritories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeTerritoriesDeleteManyArgs>(args?: SelectSubset<T, EmployeeTerritoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeTerritories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeTerritoriesUpdateManyArgs>(args: SelectSubset<T, EmployeeTerritoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeTerritories and returns the data updated in the database.
     * @param {EmployeeTerritoriesUpdateManyAndReturnArgs} args - Arguments to update many EmployeeTerritories.
     * @example
     * // Update many EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeTerritories and only return the `EmployeeID`
     * const employeeTerritoriesWithEmployeeIDOnly = await prisma.employeeTerritories.updateManyAndReturn({
     *   select: { EmployeeID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeTerritoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeTerritoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeTerritories.
     * @param {EmployeeTerritoriesUpsertArgs} args - Arguments to update or create a EmployeeTerritories.
     * @example
     * // Update or create a EmployeeTerritories
     * const employeeTerritories = await prisma.employeeTerritories.upsert({
     *   create: {
     *     // ... data to create a EmployeeTerritories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeTerritories we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeTerritoriesUpsertArgs>(args: SelectSubset<T, EmployeeTerritoriesUpsertArgs<ExtArgs>>): Prisma__EmployeeTerritoriesClient<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeTerritories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesCountArgs} args - Arguments to filter EmployeeTerritories to count.
     * @example
     * // Count the number of EmployeeTerritories
     * const count = await prisma.employeeTerritories.count({
     *   where: {
     *     // ... the filter for the EmployeeTerritories we want to count
     *   }
     * })
    **/
    count<T extends EmployeeTerritoriesCountArgs>(
      args?: Subset<T, EmployeeTerritoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeTerritoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeTerritories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeTerritoriesAggregateArgs>(args: Subset<T, EmployeeTerritoriesAggregateArgs>): Prisma.PrismaPromise<GetEmployeeTerritoriesAggregateType<T>>

    /**
     * Group by EmployeeTerritories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTerritoriesGroupByArgs} args - Group by arguments.
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
      T extends EmployeeTerritoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeTerritoriesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeTerritoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeTerritoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeTerritoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeTerritories model
   */
  readonly fields: EmployeeTerritoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeTerritories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeTerritoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Territories<T extends TerritoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TerritoriesDefaultArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Employees<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeTerritories model
   */
  interface EmployeeTerritoriesFieldRefs {
    readonly EmployeeID: FieldRef<"EmployeeTerritories", 'Int'>
    readonly TerritoryID: FieldRef<"EmployeeTerritories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeTerritories findUnique
   */
  export type EmployeeTerritoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTerritories to fetch.
     */
    where: EmployeeTerritoriesWhereUniqueInput
  }

  /**
   * EmployeeTerritories findUniqueOrThrow
   */
  export type EmployeeTerritoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTerritories to fetch.
     */
    where: EmployeeTerritoriesWhereUniqueInput
  }

  /**
   * EmployeeTerritories findFirst
   */
  export type EmployeeTerritoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTerritories to fetch.
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTerritories to fetch.
     */
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeTerritories.
     */
    cursor?: EmployeeTerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTerritories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTerritories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeTerritories.
     */
    distinct?: EmployeeTerritoriesScalarFieldEnum | EmployeeTerritoriesScalarFieldEnum[]
  }

  /**
   * EmployeeTerritories findFirstOrThrow
   */
  export type EmployeeTerritoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTerritories to fetch.
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTerritories to fetch.
     */
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeTerritories.
     */
    cursor?: EmployeeTerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTerritories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTerritories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeTerritories.
     */
    distinct?: EmployeeTerritoriesScalarFieldEnum | EmployeeTerritoriesScalarFieldEnum[]
  }

  /**
   * EmployeeTerritories findMany
   */
  export type EmployeeTerritoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTerritories to fetch.
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTerritories to fetch.
     */
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeTerritories.
     */
    cursor?: EmployeeTerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTerritories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTerritories.
     */
    skip?: number
    distinct?: EmployeeTerritoriesScalarFieldEnum | EmployeeTerritoriesScalarFieldEnum[]
  }

  /**
   * EmployeeTerritories create
   */
  export type EmployeeTerritoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeTerritories.
     */
    data: XOR<EmployeeTerritoriesCreateInput, EmployeeTerritoriesUncheckedCreateInput>
  }

  /**
   * EmployeeTerritories createMany
   */
  export type EmployeeTerritoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeTerritories.
     */
    data: EmployeeTerritoriesCreateManyInput | EmployeeTerritoriesCreateManyInput[]
  }

  /**
   * EmployeeTerritories createManyAndReturn
   */
  export type EmployeeTerritoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeTerritories.
     */
    data: EmployeeTerritoriesCreateManyInput | EmployeeTerritoriesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeTerritories update
   */
  export type EmployeeTerritoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeTerritories.
     */
    data: XOR<EmployeeTerritoriesUpdateInput, EmployeeTerritoriesUncheckedUpdateInput>
    /**
     * Choose, which EmployeeTerritories to update.
     */
    where: EmployeeTerritoriesWhereUniqueInput
  }

  /**
   * EmployeeTerritories updateMany
   */
  export type EmployeeTerritoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeTerritories.
     */
    data: XOR<EmployeeTerritoriesUpdateManyMutationInput, EmployeeTerritoriesUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeTerritories to update
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * Limit how many EmployeeTerritories to update.
     */
    limit?: number
  }

  /**
   * EmployeeTerritories updateManyAndReturn
   */
  export type EmployeeTerritoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeTerritories.
     */
    data: XOR<EmployeeTerritoriesUpdateManyMutationInput, EmployeeTerritoriesUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeTerritories to update
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * Limit how many EmployeeTerritories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeTerritories upsert
   */
  export type EmployeeTerritoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeTerritories to update in case it exists.
     */
    where: EmployeeTerritoriesWhereUniqueInput
    /**
     * In case the EmployeeTerritories found by the `where` argument doesn't exist, create a new EmployeeTerritories with this data.
     */
    create: XOR<EmployeeTerritoriesCreateInput, EmployeeTerritoriesUncheckedCreateInput>
    /**
     * In case the EmployeeTerritories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeTerritoriesUpdateInput, EmployeeTerritoriesUncheckedUpdateInput>
  }

  /**
   * EmployeeTerritories delete
   */
  export type EmployeeTerritoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    /**
     * Filter which EmployeeTerritories to delete.
     */
    where: EmployeeTerritoriesWhereUniqueInput
  }

  /**
   * EmployeeTerritories deleteMany
   */
  export type EmployeeTerritoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeTerritories to delete
     */
    where?: EmployeeTerritoriesWhereInput
    /**
     * Limit how many EmployeeTerritories to delete.
     */
    limit?: number
  }

  /**
   * EmployeeTerritories without action
   */
  export type EmployeeTerritoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
  }


  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    EmployeeID: number | null
    ReportsTo: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    EmployeeID: number | null
    ReportsTo: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    EmployeeID: number | null
    LastName: string | null
    FirstName: string | null
    Title: string | null
    TitleOfCourtesy: string | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    HomePhone: string | null
    Extension: string | null
    Photo: Uint8Array | null
    Notes: string | null
    ReportsTo: number | null
    PhotoPath: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    EmployeeID: number | null
    LastName: string | null
    FirstName: string | null
    Title: string | null
    TitleOfCourtesy: string | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    HomePhone: string | null
    Extension: string | null
    Photo: Uint8Array | null
    Notes: string | null
    ReportsTo: number | null
    PhotoPath: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    EmployeeID: number
    LastName: number
    FirstName: number
    Title: number
    TitleOfCourtesy: number
    BirthDate: number
    HireDate: number
    Address: number
    City: number
    Region: number
    PostalCode: number
    Country: number
    HomePhone: number
    Extension: number
    Photo: number
    Notes: number
    ReportsTo: number
    PhotoPath: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    EmployeeID?: true
    ReportsTo?: true
  }

  export type EmployeesSumAggregateInputType = {
    EmployeeID?: true
    ReportsTo?: true
  }

  export type EmployeesMinAggregateInputType = {
    EmployeeID?: true
    LastName?: true
    FirstName?: true
    Title?: true
    TitleOfCourtesy?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    HomePhone?: true
    Extension?: true
    Photo?: true
    Notes?: true
    ReportsTo?: true
    PhotoPath?: true
  }

  export type EmployeesMaxAggregateInputType = {
    EmployeeID?: true
    LastName?: true
    FirstName?: true
    Title?: true
    TitleOfCourtesy?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    HomePhone?: true
    Extension?: true
    Photo?: true
    Notes?: true
    ReportsTo?: true
    PhotoPath?: true
  }

  export type EmployeesCountAggregateInputType = {
    EmployeeID?: true
    LastName?: true
    FirstName?: true
    Title?: true
    TitleOfCourtesy?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    HomePhone?: true
    Extension?: true
    Photo?: true
    Notes?: true
    ReportsTo?: true
    PhotoPath?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    EmployeeID: number
    LastName: string | null
    FirstName: string | null
    Title: string | null
    TitleOfCourtesy: string | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    HomePhone: string | null
    Extension: string | null
    Photo: Uint8Array | null
    Notes: string | null
    ReportsTo: number | null
    PhotoPath: string | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    TitleOfCourtesy?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    HomePhone?: boolean
    Extension?: boolean
    Photo?: boolean
    Notes?: boolean
    ReportsTo?: boolean
    PhotoPath?: boolean
    EmployeeTerritories?: boolean | Employees$EmployeeTerritoriesArgs<ExtArgs>
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
    other_Employees?: boolean | Employees$other_EmployeesArgs<ExtArgs>
    Orders?: boolean | Employees$OrdersArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    TitleOfCourtesy?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    HomePhone?: boolean
    Extension?: boolean
    Photo?: boolean
    Notes?: boolean
    ReportsTo?: boolean
    PhotoPath?: boolean
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeID?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    TitleOfCourtesy?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    HomePhone?: boolean
    Extension?: boolean
    Photo?: boolean
    Notes?: boolean
    ReportsTo?: boolean
    PhotoPath?: boolean
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    EmployeeID?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    TitleOfCourtesy?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    HomePhone?: boolean
    Extension?: boolean
    Photo?: boolean
    Notes?: boolean
    ReportsTo?: boolean
    PhotoPath?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EmployeeID" | "LastName" | "FirstName" | "Title" | "TitleOfCourtesy" | "BirthDate" | "HireDate" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "HomePhone" | "Extension" | "Photo" | "Notes" | "ReportsTo" | "PhotoPath", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmployeeTerritories?: boolean | Employees$EmployeeTerritoriesArgs<ExtArgs>
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
    other_Employees?: boolean | Employees$other_EmployeesArgs<ExtArgs>
    Orders?: boolean | Employees$OrdersArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
  }
  export type EmployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employees?: boolean | Employees$EmployeesArgs<ExtArgs>
  }

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      EmployeeTerritories: Prisma.$EmployeeTerritoriesPayload<ExtArgs>[]
      Employees: Prisma.$EmployeesPayload<ExtArgs> | null
      other_Employees: Prisma.$EmployeesPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      EmployeeID: number
      LastName: string | null
      FirstName: string | null
      Title: string | null
      TitleOfCourtesy: string | null
      BirthDate: Date | null
      HireDate: Date | null
      Address: string | null
      City: string | null
      Region: string | null
      PostalCode: string | null
      Country: string | null
      HomePhone: string | null
      Extension: string | null
      Photo: Uint8Array | null
      Notes: string | null
      ReportsTo: number | null
      PhotoPath: string | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeesFindUniqueArgs>(args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeesFindFirstArgs>(args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `EmployeeID`
     * const employeesWithEmployeeIDOnly = await prisma.employees.findMany({ select: { EmployeeID: true } })
     * 
     */
    findMany<T extends EmployeesFindManyArgs>(args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends EmployeesCreateArgs>(args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeesCreateManyArgs>(args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `EmployeeID`
     * const employeesWithEmployeeIDOnly = await prisma.employees.createManyAndReturn({
     *   select: { EmployeeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends EmployeesDeleteArgs>(args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeesUpdateArgs>(args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeesDeleteManyArgs>(args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeesUpdateManyArgs>(args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `EmployeeID`
     * const employeesWithEmployeeIDOnly = await prisma.employees.updateManyAndReturn({
     *   select: { EmployeeID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends EmployeesUpsertArgs>(args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
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
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EmployeeTerritories<T extends Employees$EmployeeTerritoriesArgs<ExtArgs> = {}>(args?: Subset<T, Employees$EmployeeTerritoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Employees<T extends Employees$EmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Employees$EmployeesArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_Employees<T extends Employees$other_EmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Employees$other_EmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Employees$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Employees$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employees model
   */
  interface EmployeesFieldRefs {
    readonly EmployeeID: FieldRef<"Employees", 'Int'>
    readonly LastName: FieldRef<"Employees", 'String'>
    readonly FirstName: FieldRef<"Employees", 'String'>
    readonly Title: FieldRef<"Employees", 'String'>
    readonly TitleOfCourtesy: FieldRef<"Employees", 'String'>
    readonly BirthDate: FieldRef<"Employees", 'DateTime'>
    readonly HireDate: FieldRef<"Employees", 'DateTime'>
    readonly Address: FieldRef<"Employees", 'String'>
    readonly City: FieldRef<"Employees", 'String'>
    readonly Region: FieldRef<"Employees", 'String'>
    readonly PostalCode: FieldRef<"Employees", 'String'>
    readonly Country: FieldRef<"Employees", 'String'>
    readonly HomePhone: FieldRef<"Employees", 'String'>
    readonly Extension: FieldRef<"Employees", 'String'>
    readonly Photo: FieldRef<"Employees", 'Bytes'>
    readonly Notes: FieldRef<"Employees", 'String'>
    readonly ReportsTo: FieldRef<"Employees", 'Int'>
    readonly PhotoPath: FieldRef<"Employees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data?: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }

  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
  }

  /**
   * Employees createManyAndReturn
   */
  export type EmployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees updateManyAndReturn
   */
  export type EmployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }

  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employees.EmployeeTerritories
   */
  export type Employees$EmployeeTerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    where?: EmployeeTerritoriesWhereInput
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    cursor?: EmployeeTerritoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeTerritoriesScalarFieldEnum | EmployeeTerritoriesScalarFieldEnum[]
  }

  /**
   * Employees.Employees
   */
  export type Employees$EmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
  }

  /**
   * Employees.other_Employees
   */
  export type Employees$other_EmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    cursor?: EmployeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees.Orders
   */
  export type Employees$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
  }


  /**
   * Model Order_Details
   */

  export type AggregateOrder_Details = {
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  export type Order_DetailsAvgAggregateOutputType = {
    OrderID: number | null
    ProductID: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
    Discount: number | null
  }

  export type Order_DetailsSumAggregateOutputType = {
    OrderID: number | null
    ProductID: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
    Discount: number | null
  }

  export type Order_DetailsMinAggregateOutputType = {
    OrderID: number | null
    ProductID: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
    Discount: number | null
  }

  export type Order_DetailsMaxAggregateOutputType = {
    OrderID: number | null
    ProductID: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
    Discount: number | null
  }

  export type Order_DetailsCountAggregateOutputType = {
    OrderID: number
    ProductID: number
    UnitPrice: number
    Quantity: number
    Discount: number
    _all: number
  }


  export type Order_DetailsAvgAggregateInputType = {
    OrderID?: true
    ProductID?: true
    UnitPrice?: true
    Quantity?: true
    Discount?: true
  }

  export type Order_DetailsSumAggregateInputType = {
    OrderID?: true
    ProductID?: true
    UnitPrice?: true
    Quantity?: true
    Discount?: true
  }

  export type Order_DetailsMinAggregateInputType = {
    OrderID?: true
    ProductID?: true
    UnitPrice?: true
    Quantity?: true
    Discount?: true
  }

  export type Order_DetailsMaxAggregateInputType = {
    OrderID?: true
    ProductID?: true
    UnitPrice?: true
    Quantity?: true
    Discount?: true
  }

  export type Order_DetailsCountAggregateInputType = {
    OrderID?: true
    ProductID?: true
    UnitPrice?: true
    Quantity?: true
    Discount?: true
    _all?: true
  }

  export type Order_DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to aggregate.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_Details
    **/
    _count?: true | Order_DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type GetOrder_DetailsAggregateType<T extends Order_DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_Details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_Details[P]>
      : GetScalarType<T[P], AggregateOrder_Details[P]>
  }




  export type Order_DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithAggregationInput | Order_DetailsOrderByWithAggregationInput[]
    by: Order_DetailsScalarFieldEnum[] | Order_DetailsScalarFieldEnum
    having?: Order_DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_DetailsCountAggregateInputType | true
    _avg?: Order_DetailsAvgAggregateInputType
    _sum?: Order_DetailsSumAggregateInputType
    _min?: Order_DetailsMinAggregateInputType
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type Order_DetailsGroupByOutputType = {
    OrderID: number
    ProductID: number
    UnitPrice: Decimal
    Quantity: number
    Discount: number
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  type GetOrder_DetailsGroupByPayload<T extends Order_DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
        }
      >
    >


  export type Order_DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    ProductID?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Discount?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    ProductID?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Discount?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    ProductID?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Discount?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectScalar = {
    OrderID?: boolean
    ProductID?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Discount?: boolean
  }

  export type Order_DetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderID" | "ProductID" | "UnitPrice" | "Quantity" | "Discount", ExtArgs["result"]["order_Details"]>
  export type Order_DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type Order_DetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type Order_DetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $Order_DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_Details"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>
      Orders: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderID: number
      ProductID: number
      UnitPrice: Prisma.Decimal
      Quantity: number
      Discount: number
    }, ExtArgs["result"]["order_Details"]>
    composites: {}
  }

  type Order_DetailsGetPayload<S extends boolean | null | undefined | Order_DetailsDefaultArgs> = $Result.GetResult<Prisma.$Order_DetailsPayload, S>

  type Order_DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Order_DetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_DetailsCountAggregateInputType | true
    }

  export interface Order_DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_Details'], meta: { name: 'Order_Details' } }
    /**
     * Find zero or one Order_Details that matches the filter.
     * @param {Order_DetailsFindUniqueArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_DetailsFindUniqueArgs>(args: SelectSubset<T, Order_DetailsFindUniqueArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Order_DetailsFindUniqueOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_DetailsFindFirstArgs>(args?: SelectSubset<T, Order_DetailsFindFirstArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_Details
     * const order_Details = await prisma.order_Details.findMany()
     * 
     * // Get first 10 Order_Details
     * const order_Details = await prisma.order_Details.findMany({ take: 10 })
     * 
     * // Only select the `OrderID`
     * const order_DetailsWithOrderIDOnly = await prisma.order_Details.findMany({ select: { OrderID: true } })
     * 
     */
    findMany<T extends Order_DetailsFindManyArgs>(args?: SelectSubset<T, Order_DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_Details.
     * @param {Order_DetailsCreateArgs} args - Arguments to create a Order_Details.
     * @example
     * // Create one Order_Details
     * const Order_Details = await prisma.order_Details.create({
     *   data: {
     *     // ... data to create a Order_Details
     *   }
     * })
     * 
     */
    create<T extends Order_DetailsCreateArgs>(args: SelectSubset<T, Order_DetailsCreateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_Details.
     * @param {Order_DetailsCreateManyArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_DetailsCreateManyArgs>(args?: SelectSubset<T, Order_DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_Details and returns the data saved in the database.
     * @param {Order_DetailsCreateManyAndReturnArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_Details and only return the `OrderID`
     * const order_DetailsWithOrderIDOnly = await prisma.order_Details.createManyAndReturn({
     *   select: { OrderID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_DetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_Details.
     * @param {Order_DetailsDeleteArgs} args - Arguments to delete one Order_Details.
     * @example
     * // Delete one Order_Details
     * const Order_Details = await prisma.order_Details.delete({
     *   where: {
     *     // ... filter to delete one Order_Details
     *   }
     * })
     * 
     */
    delete<T extends Order_DetailsDeleteArgs>(args: SelectSubset<T, Order_DetailsDeleteArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_Details.
     * @param {Order_DetailsUpdateArgs} args - Arguments to update one Order_Details.
     * @example
     * // Update one Order_Details
     * const order_Details = await prisma.order_Details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_DetailsUpdateArgs>(args: SelectSubset<T, Order_DetailsUpdateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_Details.
     * @param {Order_DetailsDeleteManyArgs} args - Arguments to filter Order_Details to delete.
     * @example
     * // Delete a few Order_Details
     * const { count } = await prisma.order_Details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_DetailsDeleteManyArgs>(args?: SelectSubset<T, Order_DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_Details
     * const order_Details = await prisma.order_Details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_DetailsUpdateManyArgs>(args: SelectSubset<T, Order_DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Details and returns the data updated in the database.
     * @param {Order_DetailsUpdateManyAndReturnArgs} args - Arguments to update many Order_Details.
     * @example
     * // Update many Order_Details
     * const order_Details = await prisma.order_Details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_Details and only return the `OrderID`
     * const order_DetailsWithOrderIDOnly = await prisma.order_Details.updateManyAndReturn({
     *   select: { OrderID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Order_DetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, Order_DetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_Details.
     * @param {Order_DetailsUpsertArgs} args - Arguments to update or create a Order_Details.
     * @example
     * // Update or create a Order_Details
     * const order_Details = await prisma.order_Details.upsert({
     *   create: {
     *     // ... data to create a Order_Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_Details we want to update
     *   }
     * })
     */
    upsert<T extends Order_DetailsUpsertArgs>(args: SelectSubset<T, Order_DetailsUpsertArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsCountArgs} args - Arguments to filter Order_Details to count.
     * @example
     * // Count the number of Order_Details
     * const count = await prisma.order_Details.count({
     *   where: {
     *     // ... the filter for the Order_Details we want to count
     *   }
     * })
    **/
    count<T extends Order_DetailsCountArgs>(
      args?: Subset<T, Order_DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_DetailsAggregateArgs>(args: Subset<T, Order_DetailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_DetailsAggregateType<T>>

    /**
     * Group by Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsGroupByArgs} args - Group by arguments.
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
      T extends Order_DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_DetailsGroupByArgs['orderBy'] }
        : { orderBy?: Order_DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Order_DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_DetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_Details model
   */
  readonly fields: Order_DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order_Details model
   */
  interface Order_DetailsFieldRefs {
    readonly OrderID: FieldRef<"Order_Details", 'Int'>
    readonly ProductID: FieldRef<"Order_Details", 'Int'>
    readonly UnitPrice: FieldRef<"Order_Details", 'Decimal'>
    readonly Quantity: FieldRef<"Order_Details", 'Int'>
    readonly Discount: FieldRef<"Order_Details", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Order_Details findUnique
   */
  export type Order_DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findUniqueOrThrow
   */
  export type Order_DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findFirst
   */
  export type Order_DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findFirstOrThrow
   */
  export type Order_DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findMany
   */
  export type Order_DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details create
   */
  export type Order_DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_Details.
     */
    data: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
  }

  /**
   * Order_Details createMany
   */
  export type Order_DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
  }

  /**
   * Order_Details createManyAndReturn
   */
  export type Order_DetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Details update
   */
  export type Order_DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_Details.
     */
    data: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
    /**
     * Choose, which Order_Details to update.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details updateMany
   */
  export type Order_DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_Details.
     */
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Order_Details to update
     */
    where?: Order_DetailsWhereInput
    /**
     * Limit how many Order_Details to update.
     */
    limit?: number
  }

  /**
   * Order_Details updateManyAndReturn
   */
  export type Order_DetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * The data used to update Order_Details.
     */
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Order_Details to update
     */
    where?: Order_DetailsWhereInput
    /**
     * Limit how many Order_Details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Details upsert
   */
  export type Order_DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_Details to update in case it exists.
     */
    where: Order_DetailsWhereUniqueInput
    /**
     * In case the Order_Details found by the `where` argument doesn't exist, create a new Order_Details with this data.
     */
    create: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
    /**
     * In case the Order_Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
  }

  /**
   * Order_Details delete
   */
  export type Order_DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter which Order_Details to delete.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details deleteMany
   */
  export type Order_DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to delete
     */
    where?: Order_DetailsWhereInput
    /**
     * Limit how many Order_Details to delete.
     */
    limit?: number
  }

  /**
   * Order_Details without action
   */
  export type Order_DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    OrderID: number | null
    EmployeeID: number | null
    ShipVia: number | null
    Freight: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    OrderID: number | null
    EmployeeID: number | null
    ShipVia: number | null
    Freight: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    OrderID: number | null
    CustomerID: string | null
    EmployeeID: number | null
    OrderDate: Date | null
    RequiredDate: Date | null
    ShippedDate: Date | null
    ShipVia: number | null
    Freight: Decimal | null
    ShipName: string | null
    ShipAddress: string | null
    ShipCity: string | null
    ShipRegion: string | null
    ShipPostalCode: string | null
    ShipCountry: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    OrderID: number | null
    CustomerID: string | null
    EmployeeID: number | null
    OrderDate: Date | null
    RequiredDate: Date | null
    ShippedDate: Date | null
    ShipVia: number | null
    Freight: Decimal | null
    ShipName: string | null
    ShipAddress: string | null
    ShipCity: string | null
    ShipRegion: string | null
    ShipPostalCode: string | null
    ShipCountry: string | null
  }

  export type OrdersCountAggregateOutputType = {
    OrderID: number
    CustomerID: number
    EmployeeID: number
    OrderDate: number
    RequiredDate: number
    ShippedDate: number
    ShipVia: number
    Freight: number
    ShipName: number
    ShipAddress: number
    ShipCity: number
    ShipRegion: number
    ShipPostalCode: number
    ShipCountry: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    OrderID?: true
    EmployeeID?: true
    ShipVia?: true
    Freight?: true
  }

  export type OrdersSumAggregateInputType = {
    OrderID?: true
    EmployeeID?: true
    ShipVia?: true
    Freight?: true
  }

  export type OrdersMinAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    EmployeeID?: true
    OrderDate?: true
    RequiredDate?: true
    ShippedDate?: true
    ShipVia?: true
    Freight?: true
    ShipName?: true
    ShipAddress?: true
    ShipCity?: true
    ShipRegion?: true
    ShipPostalCode?: true
    ShipCountry?: true
  }

  export type OrdersMaxAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    EmployeeID?: true
    OrderDate?: true
    RequiredDate?: true
    ShippedDate?: true
    ShipVia?: true
    Freight?: true
    ShipName?: true
    ShipAddress?: true
    ShipCity?: true
    ShipRegion?: true
    ShipPostalCode?: true
    ShipCountry?: true
  }

  export type OrdersCountAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    EmployeeID?: true
    OrderDate?: true
    RequiredDate?: true
    ShippedDate?: true
    ShipVia?: true
    Freight?: true
    ShipName?: true
    ShipAddress?: true
    ShipCity?: true
    ShipRegion?: true
    ShipPostalCode?: true
    ShipCountry?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    OrderID: number
    CustomerID: string | null
    EmployeeID: number | null
    OrderDate: Date | null
    RequiredDate: Date | null
    ShippedDate: Date | null
    ShipVia: number | null
    Freight: Decimal | null
    ShipName: string | null
    ShipAddress: string | null
    ShipCity: string | null
    ShipRegion: string | null
    ShipPostalCode: string | null
    ShipCountry: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    CustomerID?: boolean
    EmployeeID?: boolean
    OrderDate?: boolean
    RequiredDate?: boolean
    ShippedDate?: boolean
    ShipVia?: boolean
    Freight?: boolean
    ShipName?: boolean
    ShipAddress?: boolean
    ShipCity?: boolean
    ShipRegion?: boolean
    ShipPostalCode?: boolean
    ShipCountry?: boolean
    Order_Details?: boolean | Orders$Order_DetailsArgs<ExtArgs>
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    CustomerID?: boolean
    EmployeeID?: boolean
    OrderDate?: boolean
    RequiredDate?: boolean
    ShippedDate?: boolean
    ShipVia?: boolean
    Freight?: boolean
    ShipName?: boolean
    ShipAddress?: boolean
    ShipCity?: boolean
    ShipRegion?: boolean
    ShipPostalCode?: boolean
    ShipCountry?: boolean
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    CustomerID?: boolean
    EmployeeID?: boolean
    OrderDate?: boolean
    RequiredDate?: boolean
    ShippedDate?: boolean
    ShipVia?: boolean
    Freight?: boolean
    ShipName?: boolean
    ShipAddress?: boolean
    ShipCity?: boolean
    ShipRegion?: boolean
    ShipPostalCode?: boolean
    ShipCountry?: boolean
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    OrderID?: boolean
    CustomerID?: boolean
    EmployeeID?: boolean
    OrderDate?: boolean
    RequiredDate?: boolean
    ShippedDate?: boolean
    ShipVia?: boolean
    Freight?: boolean
    ShipName?: boolean
    ShipAddress?: boolean
    ShipCity?: boolean
    ShipRegion?: boolean
    ShipPostalCode?: boolean
    ShipCountry?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderID" | "CustomerID" | "EmployeeID" | "OrderDate" | "RequiredDate" | "ShippedDate" | "ShipVia" | "Freight" | "ShipName" | "ShipAddress" | "ShipCity" | "ShipRegion" | "ShipPostalCode" | "ShipCountry", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | Orders$Order_DetailsArgs<ExtArgs>
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shippers?: boolean | Orders$ShippersArgs<ExtArgs>
    Employees?: boolean | Orders$EmployeesArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Order_Details: Prisma.$Order_DetailsPayload<ExtArgs>[]
      Shippers: Prisma.$ShippersPayload<ExtArgs> | null
      Employees: Prisma.$EmployeesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderID: number
      CustomerID: string | null
      EmployeeID: number | null
      OrderDate: Date | null
      RequiredDate: Date | null
      ShippedDate: Date | null
      ShipVia: number | null
      Freight: Prisma.Decimal | null
      ShipName: string | null
      ShipAddress: string | null
      ShipCity: string | null
      ShipRegion: string | null
      ShipPostalCode: string | null
      ShipCountry: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.findMany({ select: { OrderID: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.createManyAndReturn({
     *   select: { OrderID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.updateManyAndReturn({
     *   select: { OrderID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order_Details<T extends Orders$Order_DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$Order_DetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Shippers<T extends Orders$ShippersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$ShippersArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Employees<T extends Orders$EmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Orders$EmployeesArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly OrderID: FieldRef<"Orders", 'Int'>
    readonly CustomerID: FieldRef<"Orders", 'String'>
    readonly EmployeeID: FieldRef<"Orders", 'Int'>
    readonly OrderDate: FieldRef<"Orders", 'DateTime'>
    readonly RequiredDate: FieldRef<"Orders", 'DateTime'>
    readonly ShippedDate: FieldRef<"Orders", 'DateTime'>
    readonly ShipVia: FieldRef<"Orders", 'Int'>
    readonly Freight: FieldRef<"Orders", 'Decimal'>
    readonly ShipName: FieldRef<"Orders", 'String'>
    readonly ShipAddress: FieldRef<"Orders", 'String'>
    readonly ShipCity: FieldRef<"Orders", 'String'>
    readonly ShipRegion: FieldRef<"Orders", 'String'>
    readonly ShipPostalCode: FieldRef<"Orders", 'String'>
    readonly ShipCountry: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data?: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Order_Details
   */
  export type Orders$Order_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Orders.Shippers
   */
  export type Orders$ShippersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    where?: ShippersWhereInput
  }

  /**
   * Orders.Employees
   */
  export type Orders$EmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    ProductID: number | null
    SupplierID: number | null
    CategoryID: number | null
    UnitPrice: Decimal | null
    UnitsInStock: number | null
    UnitsOnOrder: number | null
    ReorderLevel: number | null
  }

  export type ProductsSumAggregateOutputType = {
    ProductID: number | null
    SupplierID: number | null
    CategoryID: number | null
    UnitPrice: Decimal | null
    UnitsInStock: number | null
    UnitsOnOrder: number | null
    ReorderLevel: number | null
  }

  export type ProductsMinAggregateOutputType = {
    ProductID: number | null
    ProductName: string | null
    SupplierID: number | null
    CategoryID: number | null
    QuantityPerUnit: string | null
    UnitPrice: Decimal | null
    UnitsInStock: number | null
    UnitsOnOrder: number | null
    ReorderLevel: number | null
    Discontinued: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    ProductID: number | null
    ProductName: string | null
    SupplierID: number | null
    CategoryID: number | null
    QuantityPerUnit: string | null
    UnitPrice: Decimal | null
    UnitsInStock: number | null
    UnitsOnOrder: number | null
    ReorderLevel: number | null
    Discontinued: string | null
  }

  export type ProductsCountAggregateOutputType = {
    ProductID: number
    ProductName: number
    SupplierID: number
    CategoryID: number
    QuantityPerUnit: number
    UnitPrice: number
    UnitsInStock: number
    UnitsOnOrder: number
    ReorderLevel: number
    Discontinued: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    ProductID?: true
    SupplierID?: true
    CategoryID?: true
    UnitPrice?: true
    UnitsInStock?: true
    UnitsOnOrder?: true
    ReorderLevel?: true
  }

  export type ProductsSumAggregateInputType = {
    ProductID?: true
    SupplierID?: true
    CategoryID?: true
    UnitPrice?: true
    UnitsInStock?: true
    UnitsOnOrder?: true
    ReorderLevel?: true
  }

  export type ProductsMinAggregateInputType = {
    ProductID?: true
    ProductName?: true
    SupplierID?: true
    CategoryID?: true
    QuantityPerUnit?: true
    UnitPrice?: true
    UnitsInStock?: true
    UnitsOnOrder?: true
    ReorderLevel?: true
    Discontinued?: true
  }

  export type ProductsMaxAggregateInputType = {
    ProductID?: true
    ProductName?: true
    SupplierID?: true
    CategoryID?: true
    QuantityPerUnit?: true
    UnitPrice?: true
    UnitsInStock?: true
    UnitsOnOrder?: true
    ReorderLevel?: true
    Discontinued?: true
  }

  export type ProductsCountAggregateInputType = {
    ProductID?: true
    ProductName?: true
    SupplierID?: true
    CategoryID?: true
    QuantityPerUnit?: true
    UnitPrice?: true
    UnitsInStock?: true
    UnitsOnOrder?: true
    ReorderLevel?: true
    Discontinued?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    ProductID: number
    ProductName: string
    SupplierID: number | null
    CategoryID: number | null
    QuantityPerUnit: string | null
    UnitPrice: Decimal | null
    UnitsInStock: number | null
    UnitsOnOrder: number | null
    ReorderLevel: number | null
    Discontinued: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    ProductName?: boolean
    SupplierID?: boolean
    CategoryID?: boolean
    QuantityPerUnit?: boolean
    UnitPrice?: boolean
    UnitsInStock?: boolean
    UnitsOnOrder?: boolean
    ReorderLevel?: boolean
    Discontinued?: boolean
    Order_Details?: boolean | Products$Order_DetailsArgs<ExtArgs>
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    ProductName?: boolean
    SupplierID?: boolean
    CategoryID?: boolean
    QuantityPerUnit?: boolean
    UnitPrice?: boolean
    UnitsInStock?: boolean
    UnitsOnOrder?: boolean
    ReorderLevel?: boolean
    Discontinued?: boolean
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    ProductName?: boolean
    SupplierID?: boolean
    CategoryID?: boolean
    QuantityPerUnit?: boolean
    UnitPrice?: boolean
    UnitsInStock?: boolean
    UnitsOnOrder?: boolean
    ReorderLevel?: boolean
    Discontinued?: boolean
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    ProductID?: boolean
    ProductName?: boolean
    SupplierID?: boolean
    CategoryID?: boolean
    QuantityPerUnit?: boolean
    UnitPrice?: boolean
    UnitsInStock?: boolean
    UnitsOnOrder?: boolean
    ReorderLevel?: boolean
    Discontinued?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductID" | "ProductName" | "SupplierID" | "CategoryID" | "QuantityPerUnit" | "UnitPrice" | "UnitsInStock" | "UnitsOnOrder" | "ReorderLevel" | "Discontinued", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | Products$Order_DetailsArgs<ExtArgs>
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Suppliers?: boolean | Products$SuppliersArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Order_Details: Prisma.$Order_DetailsPayload<ExtArgs>[]
      Suppliers: Prisma.$SuppliersPayload<ExtArgs> | null
      Categories: Prisma.$CategoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ProductID: number
      ProductName: string
      SupplierID: number | null
      CategoryID: number | null
      QuantityPerUnit: string | null
      UnitPrice: Prisma.Decimal | null
      UnitsInStock: number | null
      UnitsOnOrder: number | null
      ReorderLevel: number | null
      Discontinued: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `ProductID`
     * const productsWithProductIDOnly = await prisma.products.findMany({ select: { ProductID: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `ProductID`
     * const productsWithProductIDOnly = await prisma.products.createManyAndReturn({
     *   select: { ProductID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `ProductID`
     * const productsWithProductIDOnly = await prisma.products.updateManyAndReturn({
     *   select: { ProductID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order_Details<T extends Products$Order_DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Products$Order_DetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Suppliers<T extends Products$SuppliersArgs<ExtArgs> = {}>(args?: Subset<T, Products$SuppliersArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Categories<T extends Products$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$CategoriesArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly ProductID: FieldRef<"Products", 'Int'>
    readonly ProductName: FieldRef<"Products", 'String'>
    readonly SupplierID: FieldRef<"Products", 'Int'>
    readonly CategoryID: FieldRef<"Products", 'Int'>
    readonly QuantityPerUnit: FieldRef<"Products", 'String'>
    readonly UnitPrice: FieldRef<"Products", 'Decimal'>
    readonly UnitsInStock: FieldRef<"Products", 'Int'>
    readonly UnitsOnOrder: FieldRef<"Products", 'Int'>
    readonly ReorderLevel: FieldRef<"Products", 'Int'>
    readonly Discontinued: FieldRef<"Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Order_Details
   */
  export type Products$Order_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Details
     */
    omit?: Order_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Products.Suppliers
   */
  export type Products$SuppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    where?: SuppliersWhereInput
  }

  /**
   * Products.Categories
   */
  export type Products$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    RegionID: number | null
  }

  export type RegionsSumAggregateOutputType = {
    RegionID: number | null
  }

  export type RegionsMinAggregateOutputType = {
    RegionID: number | null
    RegionDescription: string | null
  }

  export type RegionsMaxAggregateOutputType = {
    RegionID: number | null
    RegionDescription: string | null
  }

  export type RegionsCountAggregateOutputType = {
    RegionID: number
    RegionDescription: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    RegionID?: true
  }

  export type RegionsSumAggregateInputType = {
    RegionID?: true
  }

  export type RegionsMinAggregateInputType = {
    RegionID?: true
    RegionDescription?: true
  }

  export type RegionsMaxAggregateInputType = {
    RegionID?: true
    RegionDescription?: true
  }

  export type RegionsCountAggregateInputType = {
    RegionID?: true
    RegionDescription?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to aggregate.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type RegionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionsWhereInput
    orderBy?: RegionsOrderByWithAggregationInput | RegionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: RegionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    RegionID: number
    RegionDescription: string
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends RegionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type RegionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RegionID?: boolean
    RegionDescription?: boolean
    Territories?: boolean | Regions$TerritoriesArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RegionID?: boolean
    RegionDescription?: boolean
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RegionID?: boolean
    RegionDescription?: boolean
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectScalar = {
    RegionID?: boolean
    RegionDescription?: boolean
  }

  export type RegionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RegionID" | "RegionDescription", ExtArgs["result"]["regions"]>
  export type RegionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Territories?: boolean | Regions$TerritoriesArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regions"
    objects: {
      Territories: Prisma.$TerritoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      RegionID: number
      RegionDescription: string
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type RegionsGetPayload<S extends boolean | null | undefined | RegionsDefaultArgs> = $Result.GetResult<Prisma.$RegionsPayload, S>

  type RegionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface RegionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regions'], meta: { name: 'Regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {RegionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionsFindUniqueArgs>(args: SelectSubset<T, RegionsFindUniqueArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionsFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionsFindFirstArgs>(args?: SelectSubset<T, RegionsFindFirstArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionsFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `RegionID`
     * const regionsWithRegionIDOnly = await prisma.regions.findMany({ select: { RegionID: true } })
     * 
     */
    findMany<T extends RegionsFindManyArgs>(args?: SelectSubset<T, RegionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regions.
     * @param {RegionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends RegionsCreateArgs>(args: SelectSubset<T, RegionsCreateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionsCreateManyArgs>(args?: SelectSubset<T, RegionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `RegionID`
     * const regionsWithRegionIDOnly = await prisma.regions.createManyAndReturn({
     *   select: { RegionID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionsCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regions.
     * @param {RegionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends RegionsDeleteArgs>(args: SelectSubset<T, RegionsDeleteArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regions.
     * @param {RegionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionsUpdateArgs>(args: SelectSubset<T, RegionsUpdateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionsDeleteManyArgs>(args?: SelectSubset<T, RegionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionsUpdateManyArgs>(args: SelectSubset<T, RegionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionsUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `RegionID`
     * const regionsWithRegionIDOnly = await prisma.regions.updateManyAndReturn({
     *   select: { RegionID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionsUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regions.
     * @param {RegionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends RegionsUpsertArgs>(args: SelectSubset<T, RegionsUpsertArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionsCountArgs>(
      args?: Subset<T, RegionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsGroupByArgs} args - Group by arguments.
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
      T extends RegionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionsGroupByArgs['orderBy'] }
        : { orderBy?: RegionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RegionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regions model
   */
  readonly fields: RegionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Territories<T extends Regions$TerritoriesArgs<ExtArgs> = {}>(args?: Subset<T, Regions$TerritoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Regions model
   */
  interface RegionsFieldRefs {
    readonly RegionID: FieldRef<"Regions", 'Int'>
    readonly RegionDescription: FieldRef<"Regions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Regions findUnique
   */
  export type RegionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findUniqueOrThrow
   */
  export type RegionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findFirst
   */
  export type RegionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findFirstOrThrow
   */
  export type RegionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findMany
   */
  export type RegionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions create
   */
  export type RegionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Regions.
     */
    data: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
  }

  /**
   * Regions createMany
   */
  export type RegionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
  }

  /**
   * Regions createManyAndReturn
   */
  export type RegionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
  }

  /**
   * Regions update
   */
  export type RegionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Regions.
     */
    data: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
    /**
     * Choose, which Regions to update.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions updateMany
   */
  export type RegionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Regions updateManyAndReturn
   */
  export type RegionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Regions upsert
   */
  export type RegionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Regions to update in case it exists.
     */
    where: RegionsWhereUniqueInput
    /**
     * In case the Regions found by the `where` argument doesn't exist, create a new Regions with this data.
     */
    create: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
    /**
     * In case the Regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
  }

  /**
   * Regions delete
   */
  export type RegionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter which Regions to delete.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions deleteMany
   */
  export type RegionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Regions.Territories
   */
  export type Regions$TerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    where?: TerritoriesWhereInput
    orderBy?: TerritoriesOrderByWithRelationInput | TerritoriesOrderByWithRelationInput[]
    cursor?: TerritoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TerritoriesScalarFieldEnum | TerritoriesScalarFieldEnum[]
  }

  /**
   * Regions without action
   */
  export type RegionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
  }


  /**
   * Model Shippers
   */

  export type AggregateShippers = {
    _count: ShippersCountAggregateOutputType | null
    _avg: ShippersAvgAggregateOutputType | null
    _sum: ShippersSumAggregateOutputType | null
    _min: ShippersMinAggregateOutputType | null
    _max: ShippersMaxAggregateOutputType | null
  }

  export type ShippersAvgAggregateOutputType = {
    ShipperID: number | null
  }

  export type ShippersSumAggregateOutputType = {
    ShipperID: number | null
  }

  export type ShippersMinAggregateOutputType = {
    ShipperID: number | null
    CompanyName: string | null
    Phone: string | null
  }

  export type ShippersMaxAggregateOutputType = {
    ShipperID: number | null
    CompanyName: string | null
    Phone: string | null
  }

  export type ShippersCountAggregateOutputType = {
    ShipperID: number
    CompanyName: number
    Phone: number
    _all: number
  }


  export type ShippersAvgAggregateInputType = {
    ShipperID?: true
  }

  export type ShippersSumAggregateInputType = {
    ShipperID?: true
  }

  export type ShippersMinAggregateInputType = {
    ShipperID?: true
    CompanyName?: true
    Phone?: true
  }

  export type ShippersMaxAggregateInputType = {
    ShipperID?: true
    CompanyName?: true
    Phone?: true
  }

  export type ShippersCountAggregateInputType = {
    ShipperID?: true
    CompanyName?: true
    Phone?: true
    _all?: true
  }

  export type ShippersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shippers to aggregate.
     */
    where?: ShippersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippers to fetch.
     */
    orderBy?: ShippersOrderByWithRelationInput | ShippersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shippers
    **/
    _count?: true | ShippersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippersMaxAggregateInputType
  }

  export type GetShippersAggregateType<T extends ShippersAggregateArgs> = {
        [P in keyof T & keyof AggregateShippers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippers[P]>
      : GetScalarType<T[P], AggregateShippers[P]>
  }




  export type ShippersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippersWhereInput
    orderBy?: ShippersOrderByWithAggregationInput | ShippersOrderByWithAggregationInput[]
    by: ShippersScalarFieldEnum[] | ShippersScalarFieldEnum
    having?: ShippersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippersCountAggregateInputType | true
    _avg?: ShippersAvgAggregateInputType
    _sum?: ShippersSumAggregateInputType
    _min?: ShippersMinAggregateInputType
    _max?: ShippersMaxAggregateInputType
  }

  export type ShippersGroupByOutputType = {
    ShipperID: number
    CompanyName: string
    Phone: string | null
    _count: ShippersCountAggregateOutputType | null
    _avg: ShippersAvgAggregateOutputType | null
    _sum: ShippersSumAggregateOutputType | null
    _min: ShippersMinAggregateOutputType | null
    _max: ShippersMaxAggregateOutputType | null
  }

  type GetShippersGroupByPayload<T extends ShippersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippersGroupByOutputType[P]>
            : GetScalarType<T[P], ShippersGroupByOutputType[P]>
        }
      >
    >


  export type ShippersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ShipperID?: boolean
    CompanyName?: boolean
    Phone?: boolean
    Orders?: boolean | Shippers$OrdersArgs<ExtArgs>
    _count?: boolean | ShippersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippers"]>

  export type ShippersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ShipperID?: boolean
    CompanyName?: boolean
    Phone?: boolean
  }, ExtArgs["result"]["shippers"]>

  export type ShippersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ShipperID?: boolean
    CompanyName?: boolean
    Phone?: boolean
  }, ExtArgs["result"]["shippers"]>

  export type ShippersSelectScalar = {
    ShipperID?: boolean
    CompanyName?: boolean
    Phone?: boolean
  }

  export type ShippersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ShipperID" | "CompanyName" | "Phone", ExtArgs["result"]["shippers"]>
  export type ShippersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | Shippers$OrdersArgs<ExtArgs>
    _count?: boolean | ShippersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShippersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShippersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShippersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shippers"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ShipperID: number
      CompanyName: string
      Phone: string | null
    }, ExtArgs["result"]["shippers"]>
    composites: {}
  }

  type ShippersGetPayload<S extends boolean | null | undefined | ShippersDefaultArgs> = $Result.GetResult<Prisma.$ShippersPayload, S>

  type ShippersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippersCountAggregateInputType | true
    }

  export interface ShippersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shippers'], meta: { name: 'Shippers' } }
    /**
     * Find zero or one Shippers that matches the filter.
     * @param {ShippersFindUniqueArgs} args - Arguments to find a Shippers
     * @example
     * // Get one Shippers
     * const shippers = await prisma.shippers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippersFindUniqueArgs>(args: SelectSubset<T, ShippersFindUniqueArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shippers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippersFindUniqueOrThrowArgs} args - Arguments to find a Shippers
     * @example
     * // Get one Shippers
     * const shippers = await prisma.shippers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippersFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shippers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersFindFirstArgs} args - Arguments to find a Shippers
     * @example
     * // Get one Shippers
     * const shippers = await prisma.shippers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippersFindFirstArgs>(args?: SelectSubset<T, ShippersFindFirstArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shippers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersFindFirstOrThrowArgs} args - Arguments to find a Shippers
     * @example
     * // Get one Shippers
     * const shippers = await prisma.shippers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippersFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shippers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shippers
     * const shippers = await prisma.shippers.findMany()
     * 
     * // Get first 10 Shippers
     * const shippers = await prisma.shippers.findMany({ take: 10 })
     * 
     * // Only select the `ShipperID`
     * const shippersWithShipperIDOnly = await prisma.shippers.findMany({ select: { ShipperID: true } })
     * 
     */
    findMany<T extends ShippersFindManyArgs>(args?: SelectSubset<T, ShippersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shippers.
     * @param {ShippersCreateArgs} args - Arguments to create a Shippers.
     * @example
     * // Create one Shippers
     * const Shippers = await prisma.shippers.create({
     *   data: {
     *     // ... data to create a Shippers
     *   }
     * })
     * 
     */
    create<T extends ShippersCreateArgs>(args: SelectSubset<T, ShippersCreateArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shippers.
     * @param {ShippersCreateManyArgs} args - Arguments to create many Shippers.
     * @example
     * // Create many Shippers
     * const shippers = await prisma.shippers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippersCreateManyArgs>(args?: SelectSubset<T, ShippersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shippers and returns the data saved in the database.
     * @param {ShippersCreateManyAndReturnArgs} args - Arguments to create many Shippers.
     * @example
     * // Create many Shippers
     * const shippers = await prisma.shippers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shippers and only return the `ShipperID`
     * const shippersWithShipperIDOnly = await prisma.shippers.createManyAndReturn({
     *   select: { ShipperID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippersCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shippers.
     * @param {ShippersDeleteArgs} args - Arguments to delete one Shippers.
     * @example
     * // Delete one Shippers
     * const Shippers = await prisma.shippers.delete({
     *   where: {
     *     // ... filter to delete one Shippers
     *   }
     * })
     * 
     */
    delete<T extends ShippersDeleteArgs>(args: SelectSubset<T, ShippersDeleteArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shippers.
     * @param {ShippersUpdateArgs} args - Arguments to update one Shippers.
     * @example
     * // Update one Shippers
     * const shippers = await prisma.shippers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippersUpdateArgs>(args: SelectSubset<T, ShippersUpdateArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shippers.
     * @param {ShippersDeleteManyArgs} args - Arguments to filter Shippers to delete.
     * @example
     * // Delete a few Shippers
     * const { count } = await prisma.shippers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippersDeleteManyArgs>(args?: SelectSubset<T, ShippersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shippers
     * const shippers = await prisma.shippers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippersUpdateManyArgs>(args: SelectSubset<T, ShippersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippers and returns the data updated in the database.
     * @param {ShippersUpdateManyAndReturnArgs} args - Arguments to update many Shippers.
     * @example
     * // Update many Shippers
     * const shippers = await prisma.shippers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shippers and only return the `ShipperID`
     * const shippersWithShipperIDOnly = await prisma.shippers.updateManyAndReturn({
     *   select: { ShipperID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShippersUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shippers.
     * @param {ShippersUpsertArgs} args - Arguments to update or create a Shippers.
     * @example
     * // Update or create a Shippers
     * const shippers = await prisma.shippers.upsert({
     *   create: {
     *     // ... data to create a Shippers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shippers we want to update
     *   }
     * })
     */
    upsert<T extends ShippersUpsertArgs>(args: SelectSubset<T, ShippersUpsertArgs<ExtArgs>>): Prisma__ShippersClient<$Result.GetResult<Prisma.$ShippersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shippers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersCountArgs} args - Arguments to filter Shippers to count.
     * @example
     * // Count the number of Shippers
     * const count = await prisma.shippers.count({
     *   where: {
     *     // ... the filter for the Shippers we want to count
     *   }
     * })
    **/
    count<T extends ShippersCountArgs>(
      args?: Subset<T, ShippersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shippers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShippersAggregateArgs>(args: Subset<T, ShippersAggregateArgs>): Prisma.PrismaPromise<GetShippersAggregateType<T>>

    /**
     * Group by Shippers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippersGroupByArgs} args - Group by arguments.
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
      T extends ShippersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippersGroupByArgs['orderBy'] }
        : { orderBy?: ShippersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ShippersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shippers model
   */
  readonly fields: ShippersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shippers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends Shippers$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Shippers$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shippers model
   */
  interface ShippersFieldRefs {
    readonly ShipperID: FieldRef<"Shippers", 'Int'>
    readonly CompanyName: FieldRef<"Shippers", 'String'>
    readonly Phone: FieldRef<"Shippers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shippers findUnique
   */
  export type ShippersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter, which Shippers to fetch.
     */
    where: ShippersWhereUniqueInput
  }

  /**
   * Shippers findUniqueOrThrow
   */
  export type ShippersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter, which Shippers to fetch.
     */
    where: ShippersWhereUniqueInput
  }

  /**
   * Shippers findFirst
   */
  export type ShippersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter, which Shippers to fetch.
     */
    where?: ShippersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippers to fetch.
     */
    orderBy?: ShippersOrderByWithRelationInput | ShippersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shippers.
     */
    cursor?: ShippersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shippers.
     */
    distinct?: ShippersScalarFieldEnum | ShippersScalarFieldEnum[]
  }

  /**
   * Shippers findFirstOrThrow
   */
  export type ShippersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter, which Shippers to fetch.
     */
    where?: ShippersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippers to fetch.
     */
    orderBy?: ShippersOrderByWithRelationInput | ShippersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shippers.
     */
    cursor?: ShippersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shippers.
     */
    distinct?: ShippersScalarFieldEnum | ShippersScalarFieldEnum[]
  }

  /**
   * Shippers findMany
   */
  export type ShippersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter, which Shippers to fetch.
     */
    where?: ShippersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippers to fetch.
     */
    orderBy?: ShippersOrderByWithRelationInput | ShippersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shippers.
     */
    cursor?: ShippersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippers.
     */
    skip?: number
    distinct?: ShippersScalarFieldEnum | ShippersScalarFieldEnum[]
  }

  /**
   * Shippers create
   */
  export type ShippersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * The data needed to create a Shippers.
     */
    data: XOR<ShippersCreateInput, ShippersUncheckedCreateInput>
  }

  /**
   * Shippers createMany
   */
  export type ShippersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shippers.
     */
    data: ShippersCreateManyInput | ShippersCreateManyInput[]
  }

  /**
   * Shippers createManyAndReturn
   */
  export type ShippersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * The data used to create many Shippers.
     */
    data: ShippersCreateManyInput | ShippersCreateManyInput[]
  }

  /**
   * Shippers update
   */
  export type ShippersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * The data needed to update a Shippers.
     */
    data: XOR<ShippersUpdateInput, ShippersUncheckedUpdateInput>
    /**
     * Choose, which Shippers to update.
     */
    where: ShippersWhereUniqueInput
  }

  /**
   * Shippers updateMany
   */
  export type ShippersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shippers.
     */
    data: XOR<ShippersUpdateManyMutationInput, ShippersUncheckedUpdateManyInput>
    /**
     * Filter which Shippers to update
     */
    where?: ShippersWhereInput
    /**
     * Limit how many Shippers to update.
     */
    limit?: number
  }

  /**
   * Shippers updateManyAndReturn
   */
  export type ShippersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * The data used to update Shippers.
     */
    data: XOR<ShippersUpdateManyMutationInput, ShippersUncheckedUpdateManyInput>
    /**
     * Filter which Shippers to update
     */
    where?: ShippersWhereInput
    /**
     * Limit how many Shippers to update.
     */
    limit?: number
  }

  /**
   * Shippers upsert
   */
  export type ShippersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * The filter to search for the Shippers to update in case it exists.
     */
    where: ShippersWhereUniqueInput
    /**
     * In case the Shippers found by the `where` argument doesn't exist, create a new Shippers with this data.
     */
    create: XOR<ShippersCreateInput, ShippersUncheckedCreateInput>
    /**
     * In case the Shippers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippersUpdateInput, ShippersUncheckedUpdateInput>
  }

  /**
   * Shippers delete
   */
  export type ShippersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
    /**
     * Filter which Shippers to delete.
     */
    where: ShippersWhereUniqueInput
  }

  /**
   * Shippers deleteMany
   */
  export type ShippersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shippers to delete
     */
    where?: ShippersWhereInput
    /**
     * Limit how many Shippers to delete.
     */
    limit?: number
  }

  /**
   * Shippers.Orders
   */
  export type Shippers$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Shippers without action
   */
  export type ShippersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shippers
     */
    select?: ShippersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shippers
     */
    omit?: ShippersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippersInclude<ExtArgs> | null
  }


  /**
   * Model Suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    SupplierID: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    SupplierID: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    SupplierID: number | null
    CompanyName: string | null
    ContactName: string | null
    ContactTitle: string | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    Phone: string | null
    Fax: string | null
    HomePage: string | null
  }

  export type SuppliersMaxAggregateOutputType = {
    SupplierID: number | null
    CompanyName: string | null
    ContactName: string | null
    ContactTitle: string | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    Phone: string | null
    Fax: string | null
    HomePage: string | null
  }

  export type SuppliersCountAggregateOutputType = {
    SupplierID: number
    CompanyName: number
    ContactName: number
    ContactTitle: number
    Address: number
    City: number
    Region: number
    PostalCode: number
    Country: number
    Phone: number
    Fax: number
    HomePage: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    SupplierID?: true
  }

  export type SuppliersSumAggregateInputType = {
    SupplierID?: true
  }

  export type SuppliersMinAggregateInputType = {
    SupplierID?: true
    CompanyName?: true
    ContactName?: true
    ContactTitle?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    Phone?: true
    Fax?: true
    HomePage?: true
  }

  export type SuppliersMaxAggregateInputType = {
    SupplierID?: true
    CompanyName?: true
    ContactName?: true
    ContactTitle?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    Phone?: true
    Fax?: true
    HomePage?: true
  }

  export type SuppliersCountAggregateInputType = {
    SupplierID?: true
    CompanyName?: true
    ContactName?: true
    ContactTitle?: true
    Address?: true
    City?: true
    Region?: true
    PostalCode?: true
    Country?: true
    Phone?: true
    Fax?: true
    HomePage?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to aggregate.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type SuppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuppliersWhereInput
    orderBy?: SuppliersOrderByWithAggregationInput | SuppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: SuppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    SupplierID: number
    CompanyName: string
    ContactName: string | null
    ContactTitle: string | null
    Address: string | null
    City: string | null
    Region: string | null
    PostalCode: string | null
    Country: string | null
    Phone: string | null
    Fax: string | null
    HomePage: string | null
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type SuppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SupplierID?: boolean
    CompanyName?: boolean
    ContactName?: boolean
    ContactTitle?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    Phone?: boolean
    Fax?: boolean
    HomePage?: boolean
    Products?: boolean | Suppliers$ProductsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SupplierID?: boolean
    CompanyName?: boolean
    ContactName?: boolean
    ContactTitle?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    Phone?: boolean
    Fax?: boolean
    HomePage?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SupplierID?: boolean
    CompanyName?: boolean
    ContactName?: boolean
    ContactTitle?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    Phone?: boolean
    Fax?: boolean
    HomePage?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectScalar = {
    SupplierID?: boolean
    CompanyName?: boolean
    ContactName?: boolean
    ContactTitle?: boolean
    Address?: boolean
    City?: boolean
    Region?: boolean
    PostalCode?: boolean
    Country?: boolean
    Phone?: boolean
    Fax?: boolean
    HomePage?: boolean
  }

  export type SuppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SupplierID" | "CompanyName" | "ContactName" | "ContactTitle" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "Phone" | "Fax" | "HomePage", ExtArgs["result"]["suppliers"]>
  export type SuppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Suppliers$ProductsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suppliers"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SupplierID: number
      CompanyName: string
      ContactName: string | null
      ContactTitle: string | null
      Address: string | null
      City: string | null
      Region: string | null
      PostalCode: string | null
      Country: string | null
      Phone: string | null
      Fax: string | null
      HomePage: string | null
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type SuppliersGetPayload<S extends boolean | null | undefined | SuppliersDefaultArgs> = $Result.GetResult<Prisma.$SuppliersPayload, S>

  type SuppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface SuppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suppliers'], meta: { name: 'Suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {SuppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuppliersFindUniqueArgs>(args: SelectSubset<T, SuppliersFindUniqueArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, SuppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuppliersFindFirstArgs>(args?: SelectSubset<T, SuppliersFindFirstArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, SuppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `SupplierID`
     * const suppliersWithSupplierIDOnly = await prisma.suppliers.findMany({ select: { SupplierID: true } })
     * 
     */
    findMany<T extends SuppliersFindManyArgs>(args?: SelectSubset<T, SuppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {SuppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends SuppliersCreateArgs>(args: SelectSubset<T, SuppliersCreateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SuppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuppliersCreateManyArgs>(args?: SelectSubset<T, SuppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SuppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `SupplierID`
     * const suppliersWithSupplierIDOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { SupplierID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, SuppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {SuppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends SuppliersDeleteArgs>(args: SelectSubset<T, SuppliersDeleteArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {SuppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuppliersUpdateArgs>(args: SelectSubset<T, SuppliersUpdateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SuppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuppliersDeleteManyArgs>(args?: SelectSubset<T, SuppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuppliersUpdateManyArgs>(args: SelectSubset<T, SuppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SuppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `SupplierID`
     * const suppliersWithSupplierIDOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { SupplierID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, SuppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {SuppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends SuppliersUpsertArgs>(args: SelectSubset<T, SuppliersUpsertArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SuppliersCountArgs>(
      args?: Subset<T, SuppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
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
      T extends SuppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuppliersGroupByArgs['orderBy'] }
        : { orderBy?: SuppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suppliers model
   */
  readonly fields: SuppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Suppliers$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Suppliers$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Suppliers model
   */
  interface SuppliersFieldRefs {
    readonly SupplierID: FieldRef<"Suppliers", 'Int'>
    readonly CompanyName: FieldRef<"Suppliers", 'String'>
    readonly ContactName: FieldRef<"Suppliers", 'String'>
    readonly ContactTitle: FieldRef<"Suppliers", 'String'>
    readonly Address: FieldRef<"Suppliers", 'String'>
    readonly City: FieldRef<"Suppliers", 'String'>
    readonly Region: FieldRef<"Suppliers", 'String'>
    readonly PostalCode: FieldRef<"Suppliers", 'String'>
    readonly Country: FieldRef<"Suppliers", 'String'>
    readonly Phone: FieldRef<"Suppliers", 'String'>
    readonly Fax: FieldRef<"Suppliers", 'String'>
    readonly HomePage: FieldRef<"Suppliers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Suppliers findUnique
   */
  export type SuppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findUniqueOrThrow
   */
  export type SuppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findFirst
   */
  export type SuppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findFirstOrThrow
   */
  export type SuppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findMany
   */
  export type SuppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers create
   */
  export type SuppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a Suppliers.
     */
    data: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
  }

  /**
   * Suppliers createMany
   */
  export type SuppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
  }

  /**
   * Suppliers createManyAndReturn
   */
  export type SuppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
  }

  /**
   * Suppliers update
   */
  export type SuppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a Suppliers.
     */
    data: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
    /**
     * Choose, which Suppliers to update.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers updateMany
   */
  export type SuppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers updateManyAndReturn
   */
  export type SuppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers upsert
   */
  export type SuppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the Suppliers to update in case it exists.
     */
    where: SuppliersWhereUniqueInput
    /**
     * In case the Suppliers found by the `where` argument doesn't exist, create a new Suppliers with this data.
     */
    create: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
    /**
     * In case the Suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
  }

  /**
   * Suppliers delete
   */
  export type SuppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter which Suppliers to delete.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers deleteMany
   */
  export type SuppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Suppliers.Products
   */
  export type Suppliers$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Suppliers without action
   */
  export type SuppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
  }


  /**
   * Model Territories
   */

  export type AggregateTerritories = {
    _count: TerritoriesCountAggregateOutputType | null
    _avg: TerritoriesAvgAggregateOutputType | null
    _sum: TerritoriesSumAggregateOutputType | null
    _min: TerritoriesMinAggregateOutputType | null
    _max: TerritoriesMaxAggregateOutputType | null
  }

  export type TerritoriesAvgAggregateOutputType = {
    RegionID: number | null
  }

  export type TerritoriesSumAggregateOutputType = {
    RegionID: number | null
  }

  export type TerritoriesMinAggregateOutputType = {
    TerritoryID: string | null
    TerritoryDescription: string | null
    RegionID: number | null
  }

  export type TerritoriesMaxAggregateOutputType = {
    TerritoryID: string | null
    TerritoryDescription: string | null
    RegionID: number | null
  }

  export type TerritoriesCountAggregateOutputType = {
    TerritoryID: number
    TerritoryDescription: number
    RegionID: number
    _all: number
  }


  export type TerritoriesAvgAggregateInputType = {
    RegionID?: true
  }

  export type TerritoriesSumAggregateInputType = {
    RegionID?: true
  }

  export type TerritoriesMinAggregateInputType = {
    TerritoryID?: true
    TerritoryDescription?: true
    RegionID?: true
  }

  export type TerritoriesMaxAggregateInputType = {
    TerritoryID?: true
    TerritoryDescription?: true
    RegionID?: true
  }

  export type TerritoriesCountAggregateInputType = {
    TerritoryID?: true
    TerritoryDescription?: true
    RegionID?: true
    _all?: true
  }

  export type TerritoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Territories to aggregate.
     */
    where?: TerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Territories to fetch.
     */
    orderBy?: TerritoriesOrderByWithRelationInput | TerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Territories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Territories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Territories
    **/
    _count?: true | TerritoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerritoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerritoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerritoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerritoriesMaxAggregateInputType
  }

  export type GetTerritoriesAggregateType<T extends TerritoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateTerritories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerritories[P]>
      : GetScalarType<T[P], AggregateTerritories[P]>
  }




  export type TerritoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerritoriesWhereInput
    orderBy?: TerritoriesOrderByWithAggregationInput | TerritoriesOrderByWithAggregationInput[]
    by: TerritoriesScalarFieldEnum[] | TerritoriesScalarFieldEnum
    having?: TerritoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerritoriesCountAggregateInputType | true
    _avg?: TerritoriesAvgAggregateInputType
    _sum?: TerritoriesSumAggregateInputType
    _min?: TerritoriesMinAggregateInputType
    _max?: TerritoriesMaxAggregateInputType
  }

  export type TerritoriesGroupByOutputType = {
    TerritoryID: string
    TerritoryDescription: string
    RegionID: number
    _count: TerritoriesCountAggregateOutputType | null
    _avg: TerritoriesAvgAggregateOutputType | null
    _sum: TerritoriesSumAggregateOutputType | null
    _min: TerritoriesMinAggregateOutputType | null
    _max: TerritoriesMaxAggregateOutputType | null
  }

  type GetTerritoriesGroupByPayload<T extends TerritoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerritoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerritoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerritoriesGroupByOutputType[P]>
            : GetScalarType<T[P], TerritoriesGroupByOutputType[P]>
        }
      >
    >


  export type TerritoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TerritoryID?: boolean
    TerritoryDescription?: boolean
    RegionID?: boolean
    EmployeeTerritories?: boolean | Territories$EmployeeTerritoriesArgs<ExtArgs>
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
    _count?: boolean | TerritoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["territories"]>

  export type TerritoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TerritoryID?: boolean
    TerritoryDescription?: boolean
    RegionID?: boolean
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["territories"]>

  export type TerritoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TerritoryID?: boolean
    TerritoryDescription?: boolean
    RegionID?: boolean
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["territories"]>

  export type TerritoriesSelectScalar = {
    TerritoryID?: boolean
    TerritoryDescription?: boolean
    RegionID?: boolean
  }

  export type TerritoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TerritoryID" | "TerritoryDescription" | "RegionID", ExtArgs["result"]["territories"]>
  export type TerritoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmployeeTerritories?: boolean | Territories$EmployeeTerritoriesArgs<ExtArgs>
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
    _count?: boolean | TerritoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TerritoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
  }
  export type TerritoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regions?: boolean | RegionsDefaultArgs<ExtArgs>
  }

  export type $TerritoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Territories"
    objects: {
      EmployeeTerritories: Prisma.$EmployeeTerritoriesPayload<ExtArgs>[]
      Regions: Prisma.$RegionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TerritoryID: string
      TerritoryDescription: string
      RegionID: number
    }, ExtArgs["result"]["territories"]>
    composites: {}
  }

  type TerritoriesGetPayload<S extends boolean | null | undefined | TerritoriesDefaultArgs> = $Result.GetResult<Prisma.$TerritoriesPayload, S>

  type TerritoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerritoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerritoriesCountAggregateInputType | true
    }

  export interface TerritoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Territories'], meta: { name: 'Territories' } }
    /**
     * Find zero or one Territories that matches the filter.
     * @param {TerritoriesFindUniqueArgs} args - Arguments to find a Territories
     * @example
     * // Get one Territories
     * const territories = await prisma.territories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerritoriesFindUniqueArgs>(args: SelectSubset<T, TerritoriesFindUniqueArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Territories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerritoriesFindUniqueOrThrowArgs} args - Arguments to find a Territories
     * @example
     * // Get one Territories
     * const territories = await prisma.territories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerritoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, TerritoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Territories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesFindFirstArgs} args - Arguments to find a Territories
     * @example
     * // Get one Territories
     * const territories = await prisma.territories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerritoriesFindFirstArgs>(args?: SelectSubset<T, TerritoriesFindFirstArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Territories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesFindFirstOrThrowArgs} args - Arguments to find a Territories
     * @example
     * // Get one Territories
     * const territories = await prisma.territories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerritoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, TerritoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Territories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Territories
     * const territories = await prisma.territories.findMany()
     * 
     * // Get first 10 Territories
     * const territories = await prisma.territories.findMany({ take: 10 })
     * 
     * // Only select the `TerritoryID`
     * const territoriesWithTerritoryIDOnly = await prisma.territories.findMany({ select: { TerritoryID: true } })
     * 
     */
    findMany<T extends TerritoriesFindManyArgs>(args?: SelectSubset<T, TerritoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Territories.
     * @param {TerritoriesCreateArgs} args - Arguments to create a Territories.
     * @example
     * // Create one Territories
     * const Territories = await prisma.territories.create({
     *   data: {
     *     // ... data to create a Territories
     *   }
     * })
     * 
     */
    create<T extends TerritoriesCreateArgs>(args: SelectSubset<T, TerritoriesCreateArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Territories.
     * @param {TerritoriesCreateManyArgs} args - Arguments to create many Territories.
     * @example
     * // Create many Territories
     * const territories = await prisma.territories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerritoriesCreateManyArgs>(args?: SelectSubset<T, TerritoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Territories and returns the data saved in the database.
     * @param {TerritoriesCreateManyAndReturnArgs} args - Arguments to create many Territories.
     * @example
     * // Create many Territories
     * const territories = await prisma.territories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Territories and only return the `TerritoryID`
     * const territoriesWithTerritoryIDOnly = await prisma.territories.createManyAndReturn({
     *   select: { TerritoryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TerritoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, TerritoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Territories.
     * @param {TerritoriesDeleteArgs} args - Arguments to delete one Territories.
     * @example
     * // Delete one Territories
     * const Territories = await prisma.territories.delete({
     *   where: {
     *     // ... filter to delete one Territories
     *   }
     * })
     * 
     */
    delete<T extends TerritoriesDeleteArgs>(args: SelectSubset<T, TerritoriesDeleteArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Territories.
     * @param {TerritoriesUpdateArgs} args - Arguments to update one Territories.
     * @example
     * // Update one Territories
     * const territories = await prisma.territories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerritoriesUpdateArgs>(args: SelectSubset<T, TerritoriesUpdateArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Territories.
     * @param {TerritoriesDeleteManyArgs} args - Arguments to filter Territories to delete.
     * @example
     * // Delete a few Territories
     * const { count } = await prisma.territories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerritoriesDeleteManyArgs>(args?: SelectSubset<T, TerritoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Territories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Territories
     * const territories = await prisma.territories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerritoriesUpdateManyArgs>(args: SelectSubset<T, TerritoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Territories and returns the data updated in the database.
     * @param {TerritoriesUpdateManyAndReturnArgs} args - Arguments to update many Territories.
     * @example
     * // Update many Territories
     * const territories = await prisma.territories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Territories and only return the `TerritoryID`
     * const territoriesWithTerritoryIDOnly = await prisma.territories.updateManyAndReturn({
     *   select: { TerritoryID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TerritoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, TerritoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Territories.
     * @param {TerritoriesUpsertArgs} args - Arguments to update or create a Territories.
     * @example
     * // Update or create a Territories
     * const territories = await prisma.territories.upsert({
     *   create: {
     *     // ... data to create a Territories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Territories we want to update
     *   }
     * })
     */
    upsert<T extends TerritoriesUpsertArgs>(args: SelectSubset<T, TerritoriesUpsertArgs<ExtArgs>>): Prisma__TerritoriesClient<$Result.GetResult<Prisma.$TerritoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Territories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesCountArgs} args - Arguments to filter Territories to count.
     * @example
     * // Count the number of Territories
     * const count = await prisma.territories.count({
     *   where: {
     *     // ... the filter for the Territories we want to count
     *   }
     * })
    **/
    count<T extends TerritoriesCountArgs>(
      args?: Subset<T, TerritoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerritoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Territories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TerritoriesAggregateArgs>(args: Subset<T, TerritoriesAggregateArgs>): Prisma.PrismaPromise<GetTerritoriesAggregateType<T>>

    /**
     * Group by Territories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerritoriesGroupByArgs} args - Group by arguments.
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
      T extends TerritoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerritoriesGroupByArgs['orderBy'] }
        : { orderBy?: TerritoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TerritoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerritoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Territories model
   */
  readonly fields: TerritoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Territories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerritoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EmployeeTerritories<T extends Territories$EmployeeTerritoriesArgs<ExtArgs> = {}>(args?: Subset<T, Territories$EmployeeTerritoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTerritoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Regions<T extends RegionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionsDefaultArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Territories model
   */
  interface TerritoriesFieldRefs {
    readonly TerritoryID: FieldRef<"Territories", 'String'>
    readonly TerritoryDescription: FieldRef<"Territories", 'String'>
    readonly RegionID: FieldRef<"Territories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Territories findUnique
   */
  export type TerritoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which Territories to fetch.
     */
    where: TerritoriesWhereUniqueInput
  }

  /**
   * Territories findUniqueOrThrow
   */
  export type TerritoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which Territories to fetch.
     */
    where: TerritoriesWhereUniqueInput
  }

  /**
   * Territories findFirst
   */
  export type TerritoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which Territories to fetch.
     */
    where?: TerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Territories to fetch.
     */
    orderBy?: TerritoriesOrderByWithRelationInput | TerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Territories.
     */
    cursor?: TerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Territories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Territories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Territories.
     */
    distinct?: TerritoriesScalarFieldEnum | TerritoriesScalarFieldEnum[]
  }

  /**
   * Territories findFirstOrThrow
   */
  export type TerritoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which Territories to fetch.
     */
    where?: TerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Territories to fetch.
     */
    orderBy?: TerritoriesOrderByWithRelationInput | TerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Territories.
     */
    cursor?: TerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Territories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Territories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Territories.
     */
    distinct?: TerritoriesScalarFieldEnum | TerritoriesScalarFieldEnum[]
  }

  /**
   * Territories findMany
   */
  export type TerritoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter, which Territories to fetch.
     */
    where?: TerritoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Territories to fetch.
     */
    orderBy?: TerritoriesOrderByWithRelationInput | TerritoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Territories.
     */
    cursor?: TerritoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Territories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Territories.
     */
    skip?: number
    distinct?: TerritoriesScalarFieldEnum | TerritoriesScalarFieldEnum[]
  }

  /**
   * Territories create
   */
  export type TerritoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Territories.
     */
    data: XOR<TerritoriesCreateInput, TerritoriesUncheckedCreateInput>
  }

  /**
   * Territories createMany
   */
  export type TerritoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Territories.
     */
    data: TerritoriesCreateManyInput | TerritoriesCreateManyInput[]
  }

  /**
   * Territories createManyAndReturn
   */
  export type TerritoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Territories.
     */
    data: TerritoriesCreateManyInput | TerritoriesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Territories update
   */
  export type TerritoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Territories.
     */
    data: XOR<TerritoriesUpdateInput, TerritoriesUncheckedUpdateInput>
    /**
     * Choose, which Territories to update.
     */
    where: TerritoriesWhereUniqueInput
  }

  /**
   * Territories updateMany
   */
  export type TerritoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Territories.
     */
    data: XOR<TerritoriesUpdateManyMutationInput, TerritoriesUncheckedUpdateManyInput>
    /**
     * Filter which Territories to update
     */
    where?: TerritoriesWhereInput
    /**
     * Limit how many Territories to update.
     */
    limit?: number
  }

  /**
   * Territories updateManyAndReturn
   */
  export type TerritoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * The data used to update Territories.
     */
    data: XOR<TerritoriesUpdateManyMutationInput, TerritoriesUncheckedUpdateManyInput>
    /**
     * Filter which Territories to update
     */
    where?: TerritoriesWhereInput
    /**
     * Limit how many Territories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Territories upsert
   */
  export type TerritoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Territories to update in case it exists.
     */
    where: TerritoriesWhereUniqueInput
    /**
     * In case the Territories found by the `where` argument doesn't exist, create a new Territories with this data.
     */
    create: XOR<TerritoriesCreateInput, TerritoriesUncheckedCreateInput>
    /**
     * In case the Territories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerritoriesUpdateInput, TerritoriesUncheckedUpdateInput>
  }

  /**
   * Territories delete
   */
  export type TerritoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
    /**
     * Filter which Territories to delete.
     */
    where: TerritoriesWhereUniqueInput
  }

  /**
   * Territories deleteMany
   */
  export type TerritoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Territories to delete
     */
    where?: TerritoriesWhereInput
    /**
     * Limit how many Territories to delete.
     */
    limit?: number
  }

  /**
   * Territories.EmployeeTerritories
   */
  export type Territories$EmployeeTerritoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTerritories
     */
    select?: EmployeeTerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeTerritories
     */
    omit?: EmployeeTerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTerritoriesInclude<ExtArgs> | null
    where?: EmployeeTerritoriesWhereInput
    orderBy?: EmployeeTerritoriesOrderByWithRelationInput | EmployeeTerritoriesOrderByWithRelationInput[]
    cursor?: EmployeeTerritoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeTerritoriesScalarFieldEnum | EmployeeTerritoriesScalarFieldEnum[]
  }

  /**
   * Territories without action
   */
  export type TerritoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Territories
     */
    select?: TerritoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Territories
     */
    omit?: TerritoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerritoriesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    CategoryID: 'CategoryID',
    CategoryName: 'CategoryName',
    Description: 'Description',
    Picture: 'Picture'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CustomerCustomerDemoScalarFieldEnum: {
    CustomerID: 'CustomerID',
    CustomerTypeID: 'CustomerTypeID'
  };

  export type CustomerCustomerDemoScalarFieldEnum = (typeof CustomerCustomerDemoScalarFieldEnum)[keyof typeof CustomerCustomerDemoScalarFieldEnum]


  export const CustomerDemographicsScalarFieldEnum: {
    CustomerTypeID: 'CustomerTypeID',
    CustomerDesc: 'CustomerDesc'
  };

  export type CustomerDemographicsScalarFieldEnum = (typeof CustomerDemographicsScalarFieldEnum)[keyof typeof CustomerDemographicsScalarFieldEnum]


  export const EmployeeTerritoriesScalarFieldEnum: {
    EmployeeID: 'EmployeeID',
    TerritoryID: 'TerritoryID'
  };

  export type EmployeeTerritoriesScalarFieldEnum = (typeof EmployeeTerritoriesScalarFieldEnum)[keyof typeof EmployeeTerritoriesScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    EmployeeID: 'EmployeeID',
    LastName: 'LastName',
    FirstName: 'FirstName',
    Title: 'Title',
    TitleOfCourtesy: 'TitleOfCourtesy',
    BirthDate: 'BirthDate',
    HireDate: 'HireDate',
    Address: 'Address',
    City: 'City',
    Region: 'Region',
    PostalCode: 'PostalCode',
    Country: 'Country',
    HomePhone: 'HomePhone',
    Extension: 'Extension',
    Photo: 'Photo',
    Notes: 'Notes',
    ReportsTo: 'ReportsTo',
    PhotoPath: 'PhotoPath'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const Order_DetailsScalarFieldEnum: {
    OrderID: 'OrderID',
    ProductID: 'ProductID',
    UnitPrice: 'UnitPrice',
    Quantity: 'Quantity',
    Discount: 'Discount'
  };

  export type Order_DetailsScalarFieldEnum = (typeof Order_DetailsScalarFieldEnum)[keyof typeof Order_DetailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    OrderID: 'OrderID',
    CustomerID: 'CustomerID',
    EmployeeID: 'EmployeeID',
    OrderDate: 'OrderDate',
    RequiredDate: 'RequiredDate',
    ShippedDate: 'ShippedDate',
    ShipVia: 'ShipVia',
    Freight: 'Freight',
    ShipName: 'ShipName',
    ShipAddress: 'ShipAddress',
    ShipCity: 'ShipCity',
    ShipRegion: 'ShipRegion',
    ShipPostalCode: 'ShipPostalCode',
    ShipCountry: 'ShipCountry'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    ProductID: 'ProductID',
    ProductName: 'ProductName',
    SupplierID: 'SupplierID',
    CategoryID: 'CategoryID',
    QuantityPerUnit: 'QuantityPerUnit',
    UnitPrice: 'UnitPrice',
    UnitsInStock: 'UnitsInStock',
    UnitsOnOrder: 'UnitsOnOrder',
    ReorderLevel: 'ReorderLevel',
    Discontinued: 'Discontinued'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    RegionID: 'RegionID',
    RegionDescription: 'RegionDescription'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const ShippersScalarFieldEnum: {
    ShipperID: 'ShipperID',
    CompanyName: 'CompanyName',
    Phone: 'Phone'
  };

  export type ShippersScalarFieldEnum = (typeof ShippersScalarFieldEnum)[keyof typeof ShippersScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    SupplierID: 'SupplierID',
    CompanyName: 'CompanyName',
    ContactName: 'ContactName',
    ContactTitle: 'ContactTitle',
    Address: 'Address',
    City: 'City',
    Region: 'Region',
    PostalCode: 'PostalCode',
    Country: 'Country',
    Phone: 'Phone',
    Fax: 'Fax',
    HomePage: 'HomePage'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const TerritoriesScalarFieldEnum: {
    TerritoryID: 'TerritoryID',
    TerritoryDescription: 'TerritoryDescription',
    RegionID: 'RegionID'
  };

  export type TerritoriesScalarFieldEnum = (typeof TerritoriesScalarFieldEnum)[keyof typeof TerritoriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    CategoryID?: IntFilter<"Categories"> | number
    CategoryName?: StringNullableFilter<"Categories"> | string | null
    Description?: StringNullableFilter<"Categories"> | string | null
    Picture?: BytesNullableFilter<"Categories"> | Uint8Array | null
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Picture?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    CategoryID?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    CategoryName?: StringNullableFilter<"Categories"> | string | null
    Description?: StringNullableFilter<"Categories"> | string | null
    Picture?: BytesNullableFilter<"Categories"> | Uint8Array | null
    Products?: ProductsListRelationFilter
  }, "CategoryID">

  export type CategoriesOrderByWithAggregationInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Picture?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    CategoryID?: IntWithAggregatesFilter<"Categories"> | number
    CategoryName?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    Description?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    Picture?: BytesNullableWithAggregatesFilter<"Categories"> | Uint8Array | null
  }

  export type CustomerCustomerDemoWhereInput = {
    AND?: CustomerCustomerDemoWhereInput | CustomerCustomerDemoWhereInput[]
    OR?: CustomerCustomerDemoWhereInput[]
    NOT?: CustomerCustomerDemoWhereInput | CustomerCustomerDemoWhereInput[]
    CustomerID?: StringFilter<"CustomerCustomerDemo"> | string
    CustomerTypeID?: StringFilter<"CustomerCustomerDemo"> | string
    CustomerDemographics?: XOR<CustomerDemographicsScalarRelationFilter, CustomerDemographicsWhereInput>
  }

  export type CustomerCustomerDemoOrderByWithRelationInput = {
    CustomerID?: SortOrder
    CustomerTypeID?: SortOrder
    CustomerDemographics?: CustomerDemographicsOrderByWithRelationInput
  }

  export type CustomerCustomerDemoWhereUniqueInput = Prisma.AtLeast<{
    CustomerID_CustomerTypeID?: CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput
    AND?: CustomerCustomerDemoWhereInput | CustomerCustomerDemoWhereInput[]
    OR?: CustomerCustomerDemoWhereInput[]
    NOT?: CustomerCustomerDemoWhereInput | CustomerCustomerDemoWhereInput[]
    CustomerID?: StringFilter<"CustomerCustomerDemo"> | string
    CustomerTypeID?: StringFilter<"CustomerCustomerDemo"> | string
    CustomerDemographics?: XOR<CustomerDemographicsScalarRelationFilter, CustomerDemographicsWhereInput>
  }, "CustomerID_CustomerTypeID">

  export type CustomerCustomerDemoOrderByWithAggregationInput = {
    CustomerID?: SortOrder
    CustomerTypeID?: SortOrder
    _count?: CustomerCustomerDemoCountOrderByAggregateInput
    _max?: CustomerCustomerDemoMaxOrderByAggregateInput
    _min?: CustomerCustomerDemoMinOrderByAggregateInput
  }

  export type CustomerCustomerDemoScalarWhereWithAggregatesInput = {
    AND?: CustomerCustomerDemoScalarWhereWithAggregatesInput | CustomerCustomerDemoScalarWhereWithAggregatesInput[]
    OR?: CustomerCustomerDemoScalarWhereWithAggregatesInput[]
    NOT?: CustomerCustomerDemoScalarWhereWithAggregatesInput | CustomerCustomerDemoScalarWhereWithAggregatesInput[]
    CustomerID?: StringWithAggregatesFilter<"CustomerCustomerDemo"> | string
    CustomerTypeID?: StringWithAggregatesFilter<"CustomerCustomerDemo"> | string
  }

  export type CustomerDemographicsWhereInput = {
    AND?: CustomerDemographicsWhereInput | CustomerDemographicsWhereInput[]
    OR?: CustomerDemographicsWhereInput[]
    NOT?: CustomerDemographicsWhereInput | CustomerDemographicsWhereInput[]
    CustomerTypeID?: StringFilter<"CustomerDemographics"> | string
    CustomerDesc?: StringNullableFilter<"CustomerDemographics"> | string | null
    CustomerCustomerDemo?: CustomerCustomerDemoListRelationFilter
  }

  export type CustomerDemographicsOrderByWithRelationInput = {
    CustomerTypeID?: SortOrder
    CustomerDesc?: SortOrderInput | SortOrder
    CustomerCustomerDemo?: CustomerCustomerDemoOrderByRelationAggregateInput
  }

  export type CustomerDemographicsWhereUniqueInput = Prisma.AtLeast<{
    CustomerTypeID?: string
    AND?: CustomerDemographicsWhereInput | CustomerDemographicsWhereInput[]
    OR?: CustomerDemographicsWhereInput[]
    NOT?: CustomerDemographicsWhereInput | CustomerDemographicsWhereInput[]
    CustomerDesc?: StringNullableFilter<"CustomerDemographics"> | string | null
    CustomerCustomerDemo?: CustomerCustomerDemoListRelationFilter
  }, "CustomerTypeID">

  export type CustomerDemographicsOrderByWithAggregationInput = {
    CustomerTypeID?: SortOrder
    CustomerDesc?: SortOrderInput | SortOrder
    _count?: CustomerDemographicsCountOrderByAggregateInput
    _max?: CustomerDemographicsMaxOrderByAggregateInput
    _min?: CustomerDemographicsMinOrderByAggregateInput
  }

  export type CustomerDemographicsScalarWhereWithAggregatesInput = {
    AND?: CustomerDemographicsScalarWhereWithAggregatesInput | CustomerDemographicsScalarWhereWithAggregatesInput[]
    OR?: CustomerDemographicsScalarWhereWithAggregatesInput[]
    NOT?: CustomerDemographicsScalarWhereWithAggregatesInput | CustomerDemographicsScalarWhereWithAggregatesInput[]
    CustomerTypeID?: StringWithAggregatesFilter<"CustomerDemographics"> | string
    CustomerDesc?: StringNullableWithAggregatesFilter<"CustomerDemographics"> | string | null
  }

  export type EmployeeTerritoriesWhereInput = {
    AND?: EmployeeTerritoriesWhereInput | EmployeeTerritoriesWhereInput[]
    OR?: EmployeeTerritoriesWhereInput[]
    NOT?: EmployeeTerritoriesWhereInput | EmployeeTerritoriesWhereInput[]
    EmployeeID?: IntFilter<"EmployeeTerritories"> | number
    TerritoryID?: StringFilter<"EmployeeTerritories"> | string
    Territories?: XOR<TerritoriesScalarRelationFilter, TerritoriesWhereInput>
    Employees?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }

  export type EmployeeTerritoriesOrderByWithRelationInput = {
    EmployeeID?: SortOrder
    TerritoryID?: SortOrder
    Territories?: TerritoriesOrderByWithRelationInput
    Employees?: EmployeesOrderByWithRelationInput
  }

  export type EmployeeTerritoriesWhereUniqueInput = Prisma.AtLeast<{
    EmployeeID_TerritoryID?: EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput
    AND?: EmployeeTerritoriesWhereInput | EmployeeTerritoriesWhereInput[]
    OR?: EmployeeTerritoriesWhereInput[]
    NOT?: EmployeeTerritoriesWhereInput | EmployeeTerritoriesWhereInput[]
    EmployeeID?: IntFilter<"EmployeeTerritories"> | number
    TerritoryID?: StringFilter<"EmployeeTerritories"> | string
    Territories?: XOR<TerritoriesScalarRelationFilter, TerritoriesWhereInput>
    Employees?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }, "EmployeeID_TerritoryID">

  export type EmployeeTerritoriesOrderByWithAggregationInput = {
    EmployeeID?: SortOrder
    TerritoryID?: SortOrder
    _count?: EmployeeTerritoriesCountOrderByAggregateInput
    _avg?: EmployeeTerritoriesAvgOrderByAggregateInput
    _max?: EmployeeTerritoriesMaxOrderByAggregateInput
    _min?: EmployeeTerritoriesMinOrderByAggregateInput
    _sum?: EmployeeTerritoriesSumOrderByAggregateInput
  }

  export type EmployeeTerritoriesScalarWhereWithAggregatesInput = {
    AND?: EmployeeTerritoriesScalarWhereWithAggregatesInput | EmployeeTerritoriesScalarWhereWithAggregatesInput[]
    OR?: EmployeeTerritoriesScalarWhereWithAggregatesInput[]
    NOT?: EmployeeTerritoriesScalarWhereWithAggregatesInput | EmployeeTerritoriesScalarWhereWithAggregatesInput[]
    EmployeeID?: IntWithAggregatesFilter<"EmployeeTerritories"> | number
    TerritoryID?: StringWithAggregatesFilter<"EmployeeTerritories"> | string
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    EmployeeID?: IntFilter<"Employees"> | number
    LastName?: StringNullableFilter<"Employees"> | string | null
    FirstName?: StringNullableFilter<"Employees"> | string | null
    Title?: StringNullableFilter<"Employees"> | string | null
    TitleOfCourtesy?: StringNullableFilter<"Employees"> | string | null
    BirthDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    Address?: StringNullableFilter<"Employees"> | string | null
    City?: StringNullableFilter<"Employees"> | string | null
    Region?: StringNullableFilter<"Employees"> | string | null
    PostalCode?: StringNullableFilter<"Employees"> | string | null
    Country?: StringNullableFilter<"Employees"> | string | null
    HomePhone?: StringNullableFilter<"Employees"> | string | null
    Extension?: StringNullableFilter<"Employees"> | string | null
    Photo?: BytesNullableFilter<"Employees"> | Uint8Array | null
    Notes?: StringNullableFilter<"Employees"> | string | null
    ReportsTo?: IntNullableFilter<"Employees"> | number | null
    PhotoPath?: StringNullableFilter<"Employees"> | string | null
    EmployeeTerritories?: EmployeeTerritoriesListRelationFilter
    Employees?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    other_Employees?: EmployeesListRelationFilter
    Orders?: OrdersListRelationFilter
  }

  export type EmployeesOrderByWithRelationInput = {
    EmployeeID?: SortOrder
    LastName?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    Title?: SortOrderInput | SortOrder
    TitleOfCourtesy?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    Region?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    HomePhone?: SortOrderInput | SortOrder
    Extension?: SortOrderInput | SortOrder
    Photo?: SortOrderInput | SortOrder
    Notes?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    PhotoPath?: SortOrderInput | SortOrder
    EmployeeTerritories?: EmployeeTerritoriesOrderByRelationAggregateInput
    Employees?: EmployeesOrderByWithRelationInput
    other_Employees?: EmployeesOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    EmployeeID?: number
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    LastName?: StringNullableFilter<"Employees"> | string | null
    FirstName?: StringNullableFilter<"Employees"> | string | null
    Title?: StringNullableFilter<"Employees"> | string | null
    TitleOfCourtesy?: StringNullableFilter<"Employees"> | string | null
    BirthDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    Address?: StringNullableFilter<"Employees"> | string | null
    City?: StringNullableFilter<"Employees"> | string | null
    Region?: StringNullableFilter<"Employees"> | string | null
    PostalCode?: StringNullableFilter<"Employees"> | string | null
    Country?: StringNullableFilter<"Employees"> | string | null
    HomePhone?: StringNullableFilter<"Employees"> | string | null
    Extension?: StringNullableFilter<"Employees"> | string | null
    Photo?: BytesNullableFilter<"Employees"> | Uint8Array | null
    Notes?: StringNullableFilter<"Employees"> | string | null
    ReportsTo?: IntNullableFilter<"Employees"> | number | null
    PhotoPath?: StringNullableFilter<"Employees"> | string | null
    EmployeeTerritories?: EmployeeTerritoriesListRelationFilter
    Employees?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    other_Employees?: EmployeesListRelationFilter
    Orders?: OrdersListRelationFilter
  }, "EmployeeID">

  export type EmployeesOrderByWithAggregationInput = {
    EmployeeID?: SortOrder
    LastName?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    Title?: SortOrderInput | SortOrder
    TitleOfCourtesy?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    Region?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    HomePhone?: SortOrderInput | SortOrder
    Extension?: SortOrderInput | SortOrder
    Photo?: SortOrderInput | SortOrder
    Notes?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    PhotoPath?: SortOrderInput | SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _avg?: EmployeesAvgOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
    _sum?: EmployeesSumOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    EmployeeID?: IntWithAggregatesFilter<"Employees"> | number
    LastName?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    FirstName?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    Title?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    TitleOfCourtesy?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    BirthDate?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
    HireDate?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    City?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    Region?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    HomePhone?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    Extension?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    Photo?: BytesNullableWithAggregatesFilter<"Employees"> | Uint8Array | null
    Notes?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    ReportsTo?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    PhotoPath?: StringNullableWithAggregatesFilter<"Employees"> | string | null
  }

  export type Order_DetailsWhereInput = {
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OrderID?: IntFilter<"Order_Details"> | number
    ProductID?: IntFilter<"Order_Details"> | number
    UnitPrice?: DecimalFilter<"Order_Details"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Order_Details"> | number
    Discount?: FloatFilter<"Order_Details"> | number
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type Order_DetailsOrderByWithRelationInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
    Products?: ProductsOrderByWithRelationInput
    Orders?: OrdersOrderByWithRelationInput
  }

  export type Order_DetailsWhereUniqueInput = Prisma.AtLeast<{
    OrderID_ProductID?: Order_DetailsOrderIDProductIDCompoundUniqueInput
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OrderID?: IntFilter<"Order_Details"> | number
    ProductID?: IntFilter<"Order_Details"> | number
    UnitPrice?: DecimalFilter<"Order_Details"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Order_Details"> | number
    Discount?: FloatFilter<"Order_Details"> | number
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "OrderID_ProductID">

  export type Order_DetailsOrderByWithAggregationInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
    _count?: Order_DetailsCountOrderByAggregateInput
    _avg?: Order_DetailsAvgOrderByAggregateInput
    _max?: Order_DetailsMaxOrderByAggregateInput
    _min?: Order_DetailsMinOrderByAggregateInput
    _sum?: Order_DetailsSumOrderByAggregateInput
  }

  export type Order_DetailsScalarWhereWithAggregatesInput = {
    AND?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    OR?: Order_DetailsScalarWhereWithAggregatesInput[]
    NOT?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    OrderID?: IntWithAggregatesFilter<"Order_Details"> | number
    ProductID?: IntWithAggregatesFilter<"Order_Details"> | number
    UnitPrice?: DecimalWithAggregatesFilter<"Order_Details"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntWithAggregatesFilter<"Order_Details"> | number
    Discount?: FloatWithAggregatesFilter<"Order_Details"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    OrderID?: IntFilter<"Orders"> | number
    CustomerID?: StringNullableFilter<"Orders"> | string | null
    EmployeeID?: IntNullableFilter<"Orders"> | number | null
    OrderDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    RequiredDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShippedDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShipVia?: IntNullableFilter<"Orders"> | number | null
    Freight?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    ShipName?: StringNullableFilter<"Orders"> | string | null
    ShipAddress?: StringNullableFilter<"Orders"> | string | null
    ShipCity?: StringNullableFilter<"Orders"> | string | null
    ShipRegion?: StringNullableFilter<"Orders"> | string | null
    ShipPostalCode?: StringNullableFilter<"Orders"> | string | null
    ShipCountry?: StringNullableFilter<"Orders"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    Shippers?: XOR<ShippersNullableScalarRelationFilter, ShippersWhereInput> | null
    Employees?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    EmployeeID?: SortOrderInput | SortOrder
    OrderDate?: SortOrderInput | SortOrder
    RequiredDate?: SortOrderInput | SortOrder
    ShippedDate?: SortOrderInput | SortOrder
    ShipVia?: SortOrderInput | SortOrder
    Freight?: SortOrderInput | SortOrder
    ShipName?: SortOrderInput | SortOrder
    ShipAddress?: SortOrderInput | SortOrder
    ShipCity?: SortOrderInput | SortOrder
    ShipRegion?: SortOrderInput | SortOrder
    ShipPostalCode?: SortOrderInput | SortOrder
    ShipCountry?: SortOrderInput | SortOrder
    Order_Details?: Order_DetailsOrderByRelationAggregateInput
    Shippers?: ShippersOrderByWithRelationInput
    Employees?: EmployeesOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    OrderID?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    CustomerID?: StringNullableFilter<"Orders"> | string | null
    EmployeeID?: IntNullableFilter<"Orders"> | number | null
    OrderDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    RequiredDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShippedDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShipVia?: IntNullableFilter<"Orders"> | number | null
    Freight?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    ShipName?: StringNullableFilter<"Orders"> | string | null
    ShipAddress?: StringNullableFilter<"Orders"> | string | null
    ShipCity?: StringNullableFilter<"Orders"> | string | null
    ShipRegion?: StringNullableFilter<"Orders"> | string | null
    ShipPostalCode?: StringNullableFilter<"Orders"> | string | null
    ShipCountry?: StringNullableFilter<"Orders"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    Shippers?: XOR<ShippersNullableScalarRelationFilter, ShippersWhereInput> | null
    Employees?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
  }, "OrderID">

  export type OrdersOrderByWithAggregationInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    EmployeeID?: SortOrderInput | SortOrder
    OrderDate?: SortOrderInput | SortOrder
    RequiredDate?: SortOrderInput | SortOrder
    ShippedDate?: SortOrderInput | SortOrder
    ShipVia?: SortOrderInput | SortOrder
    Freight?: SortOrderInput | SortOrder
    ShipName?: SortOrderInput | SortOrder
    ShipAddress?: SortOrderInput | SortOrder
    ShipCity?: SortOrderInput | SortOrder
    ShipRegion?: SortOrderInput | SortOrder
    ShipPostalCode?: SortOrderInput | SortOrder
    ShipCountry?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OrderID?: IntWithAggregatesFilter<"Orders"> | number
    CustomerID?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    EmployeeID?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    OrderDate?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    RequiredDate?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    ShippedDate?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    ShipVia?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    Freight?: DecimalNullableWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    ShipName?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    ShipAddress?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    ShipCity?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    ShipRegion?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    ShipPostalCode?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    ShipCountry?: StringNullableWithAggregatesFilter<"Orders"> | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    ProductID?: IntFilter<"Products"> | number
    ProductName?: StringFilter<"Products"> | string
    SupplierID?: IntNullableFilter<"Products"> | number | null
    CategoryID?: IntNullableFilter<"Products"> | number | null
    QuantityPerUnit?: StringNullableFilter<"Products"> | string | null
    UnitPrice?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: IntNullableFilter<"Products"> | number | null
    UnitsOnOrder?: IntNullableFilter<"Products"> | number | null
    ReorderLevel?: IntNullableFilter<"Products"> | number | null
    Discontinued?: StringFilter<"Products"> | string
    Order_Details?: Order_DetailsListRelationFilter
    Suppliers?: XOR<SuppliersNullableScalarRelationFilter, SuppliersWhereInput> | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }

  export type ProductsOrderByWithRelationInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    SupplierID?: SortOrderInput | SortOrder
    CategoryID?: SortOrderInput | SortOrder
    QuantityPerUnit?: SortOrderInput | SortOrder
    UnitPrice?: SortOrderInput | SortOrder
    UnitsInStock?: SortOrderInput | SortOrder
    UnitsOnOrder?: SortOrderInput | SortOrder
    ReorderLevel?: SortOrderInput | SortOrder
    Discontinued?: SortOrder
    Order_Details?: Order_DetailsOrderByRelationAggregateInput
    Suppliers?: SuppliersOrderByWithRelationInput
    Categories?: CategoriesOrderByWithRelationInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    ProductID?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    ProductName?: StringFilter<"Products"> | string
    SupplierID?: IntNullableFilter<"Products"> | number | null
    CategoryID?: IntNullableFilter<"Products"> | number | null
    QuantityPerUnit?: StringNullableFilter<"Products"> | string | null
    UnitPrice?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: IntNullableFilter<"Products"> | number | null
    UnitsOnOrder?: IntNullableFilter<"Products"> | number | null
    ReorderLevel?: IntNullableFilter<"Products"> | number | null
    Discontinued?: StringFilter<"Products"> | string
    Order_Details?: Order_DetailsListRelationFilter
    Suppliers?: XOR<SuppliersNullableScalarRelationFilter, SuppliersWhereInput> | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }, "ProductID">

  export type ProductsOrderByWithAggregationInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    SupplierID?: SortOrderInput | SortOrder
    CategoryID?: SortOrderInput | SortOrder
    QuantityPerUnit?: SortOrderInput | SortOrder
    UnitPrice?: SortOrderInput | SortOrder
    UnitsInStock?: SortOrderInput | SortOrder
    UnitsOnOrder?: SortOrderInput | SortOrder
    ReorderLevel?: SortOrderInput | SortOrder
    Discontinued?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    ProductID?: IntWithAggregatesFilter<"Products"> | number
    ProductName?: StringWithAggregatesFilter<"Products"> | string
    SupplierID?: IntNullableWithAggregatesFilter<"Products"> | number | null
    CategoryID?: IntNullableWithAggregatesFilter<"Products"> | number | null
    QuantityPerUnit?: StringNullableWithAggregatesFilter<"Products"> | string | null
    UnitPrice?: DecimalNullableWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: IntNullableWithAggregatesFilter<"Products"> | number | null
    UnitsOnOrder?: IntNullableWithAggregatesFilter<"Products"> | number | null
    ReorderLevel?: IntNullableWithAggregatesFilter<"Products"> | number | null
    Discontinued?: StringWithAggregatesFilter<"Products"> | string
  }

  export type RegionsWhereInput = {
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    RegionID?: IntFilter<"Regions"> | number
    RegionDescription?: StringFilter<"Regions"> | string
    Territories?: TerritoriesListRelationFilter
  }

  export type RegionsOrderByWithRelationInput = {
    RegionID?: SortOrder
    RegionDescription?: SortOrder
    Territories?: TerritoriesOrderByRelationAggregateInput
  }

  export type RegionsWhereUniqueInput = Prisma.AtLeast<{
    RegionID?: number
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    RegionDescription?: StringFilter<"Regions"> | string
    Territories?: TerritoriesListRelationFilter
  }, "RegionID">

  export type RegionsOrderByWithAggregationInput = {
    RegionID?: SortOrder
    RegionDescription?: SortOrder
    _count?: RegionsCountOrderByAggregateInput
    _avg?: RegionsAvgOrderByAggregateInput
    _max?: RegionsMaxOrderByAggregateInput
    _min?: RegionsMinOrderByAggregateInput
    _sum?: RegionsSumOrderByAggregateInput
  }

  export type RegionsScalarWhereWithAggregatesInput = {
    AND?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    OR?: RegionsScalarWhereWithAggregatesInput[]
    NOT?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    RegionID?: IntWithAggregatesFilter<"Regions"> | number
    RegionDescription?: StringWithAggregatesFilter<"Regions"> | string
  }

  export type ShippersWhereInput = {
    AND?: ShippersWhereInput | ShippersWhereInput[]
    OR?: ShippersWhereInput[]
    NOT?: ShippersWhereInput | ShippersWhereInput[]
    ShipperID?: IntFilter<"Shippers"> | number
    CompanyName?: StringFilter<"Shippers"> | string
    Phone?: StringNullableFilter<"Shippers"> | string | null
    Orders?: OrdersListRelationFilter
  }

  export type ShippersOrderByWithRelationInput = {
    ShipperID?: SortOrder
    CompanyName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type ShippersWhereUniqueInput = Prisma.AtLeast<{
    ShipperID?: number
    AND?: ShippersWhereInput | ShippersWhereInput[]
    OR?: ShippersWhereInput[]
    NOT?: ShippersWhereInput | ShippersWhereInput[]
    CompanyName?: StringFilter<"Shippers"> | string
    Phone?: StringNullableFilter<"Shippers"> | string | null
    Orders?: OrdersListRelationFilter
  }, "ShipperID">

  export type ShippersOrderByWithAggregationInput = {
    ShipperID?: SortOrder
    CompanyName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    _count?: ShippersCountOrderByAggregateInput
    _avg?: ShippersAvgOrderByAggregateInput
    _max?: ShippersMaxOrderByAggregateInput
    _min?: ShippersMinOrderByAggregateInput
    _sum?: ShippersSumOrderByAggregateInput
  }

  export type ShippersScalarWhereWithAggregatesInput = {
    AND?: ShippersScalarWhereWithAggregatesInput | ShippersScalarWhereWithAggregatesInput[]
    OR?: ShippersScalarWhereWithAggregatesInput[]
    NOT?: ShippersScalarWhereWithAggregatesInput | ShippersScalarWhereWithAggregatesInput[]
    ShipperID?: IntWithAggregatesFilter<"Shippers"> | number
    CompanyName?: StringWithAggregatesFilter<"Shippers"> | string
    Phone?: StringNullableWithAggregatesFilter<"Shippers"> | string | null
  }

  export type SuppliersWhereInput = {
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    SupplierID?: IntFilter<"Suppliers"> | number
    CompanyName?: StringFilter<"Suppliers"> | string
    ContactName?: StringNullableFilter<"Suppliers"> | string | null
    ContactTitle?: StringNullableFilter<"Suppliers"> | string | null
    Address?: StringNullableFilter<"Suppliers"> | string | null
    City?: StringNullableFilter<"Suppliers"> | string | null
    Region?: StringNullableFilter<"Suppliers"> | string | null
    PostalCode?: StringNullableFilter<"Suppliers"> | string | null
    Country?: StringNullableFilter<"Suppliers"> | string | null
    Phone?: StringNullableFilter<"Suppliers"> | string | null
    Fax?: StringNullableFilter<"Suppliers"> | string | null
    HomePage?: StringNullableFilter<"Suppliers"> | string | null
    Products?: ProductsListRelationFilter
  }

  export type SuppliersOrderByWithRelationInput = {
    SupplierID?: SortOrder
    CompanyName?: SortOrder
    ContactName?: SortOrderInput | SortOrder
    ContactTitle?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    Region?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    HomePage?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type SuppliersWhereUniqueInput = Prisma.AtLeast<{
    SupplierID?: number
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    CompanyName?: StringFilter<"Suppliers"> | string
    ContactName?: StringNullableFilter<"Suppliers"> | string | null
    ContactTitle?: StringNullableFilter<"Suppliers"> | string | null
    Address?: StringNullableFilter<"Suppliers"> | string | null
    City?: StringNullableFilter<"Suppliers"> | string | null
    Region?: StringNullableFilter<"Suppliers"> | string | null
    PostalCode?: StringNullableFilter<"Suppliers"> | string | null
    Country?: StringNullableFilter<"Suppliers"> | string | null
    Phone?: StringNullableFilter<"Suppliers"> | string | null
    Fax?: StringNullableFilter<"Suppliers"> | string | null
    HomePage?: StringNullableFilter<"Suppliers"> | string | null
    Products?: ProductsListRelationFilter
  }, "SupplierID">

  export type SuppliersOrderByWithAggregationInput = {
    SupplierID?: SortOrder
    CompanyName?: SortOrder
    ContactName?: SortOrderInput | SortOrder
    ContactTitle?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    Region?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    HomePage?: SortOrderInput | SortOrder
    _count?: SuppliersCountOrderByAggregateInput
    _avg?: SuppliersAvgOrderByAggregateInput
    _max?: SuppliersMaxOrderByAggregateInput
    _min?: SuppliersMinOrderByAggregateInput
    _sum?: SuppliersSumOrderByAggregateInput
  }

  export type SuppliersScalarWhereWithAggregatesInput = {
    AND?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    OR?: SuppliersScalarWhereWithAggregatesInput[]
    NOT?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    SupplierID?: IntWithAggregatesFilter<"Suppliers"> | number
    CompanyName?: StringWithAggregatesFilter<"Suppliers"> | string
    ContactName?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    ContactTitle?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    Address?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    City?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    Region?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    HomePage?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
  }

  export type TerritoriesWhereInput = {
    AND?: TerritoriesWhereInput | TerritoriesWhereInput[]
    OR?: TerritoriesWhereInput[]
    NOT?: TerritoriesWhereInput | TerritoriesWhereInput[]
    TerritoryID?: StringFilter<"Territories"> | string
    TerritoryDescription?: StringFilter<"Territories"> | string
    RegionID?: IntFilter<"Territories"> | number
    EmployeeTerritories?: EmployeeTerritoriesListRelationFilter
    Regions?: XOR<RegionsScalarRelationFilter, RegionsWhereInput>
  }

  export type TerritoriesOrderByWithRelationInput = {
    TerritoryID?: SortOrder
    TerritoryDescription?: SortOrder
    RegionID?: SortOrder
    EmployeeTerritories?: EmployeeTerritoriesOrderByRelationAggregateInput
    Regions?: RegionsOrderByWithRelationInput
  }

  export type TerritoriesWhereUniqueInput = Prisma.AtLeast<{
    TerritoryID?: string
    AND?: TerritoriesWhereInput | TerritoriesWhereInput[]
    OR?: TerritoriesWhereInput[]
    NOT?: TerritoriesWhereInput | TerritoriesWhereInput[]
    TerritoryDescription?: StringFilter<"Territories"> | string
    RegionID?: IntFilter<"Territories"> | number
    EmployeeTerritories?: EmployeeTerritoriesListRelationFilter
    Regions?: XOR<RegionsScalarRelationFilter, RegionsWhereInput>
  }, "TerritoryID">

  export type TerritoriesOrderByWithAggregationInput = {
    TerritoryID?: SortOrder
    TerritoryDescription?: SortOrder
    RegionID?: SortOrder
    _count?: TerritoriesCountOrderByAggregateInput
    _avg?: TerritoriesAvgOrderByAggregateInput
    _max?: TerritoriesMaxOrderByAggregateInput
    _min?: TerritoriesMinOrderByAggregateInput
    _sum?: TerritoriesSumOrderByAggregateInput
  }

  export type TerritoriesScalarWhereWithAggregatesInput = {
    AND?: TerritoriesScalarWhereWithAggregatesInput | TerritoriesScalarWhereWithAggregatesInput[]
    OR?: TerritoriesScalarWhereWithAggregatesInput[]
    NOT?: TerritoriesScalarWhereWithAggregatesInput | TerritoriesScalarWhereWithAggregatesInput[]
    TerritoryID?: StringWithAggregatesFilter<"Territories"> | string
    TerritoryDescription?: StringWithAggregatesFilter<"Territories"> | string
    RegionID?: IntWithAggregatesFilter<"Territories"> | number
  }

  export type CategoriesCreateInput = {
    CategoryName?: string | null
    Description?: string | null
    Picture?: Uint8Array | null
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    CategoryID?: number
    CategoryName?: string | null
    Description?: string | null
    Picture?: Uint8Array | null
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    CategoryID?: number
    CategoryName?: string | null
    Description?: string | null
    Picture?: Uint8Array | null
  }

  export type CategoriesUpdateManyMutationInput = {
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type CustomerCustomerDemoCreateInput = {
    CustomerDemographics: CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput
  }

  export type CustomerCustomerDemoUncheckedCreateInput = {
    CustomerID: string
    CustomerTypeID: string
  }

  export type CustomerCustomerDemoUpdateInput = {
    CustomerDemographics?: CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput
  }

  export type CustomerCustomerDemoUncheckedUpdateInput = {
    CustomerID?: StringFieldUpdateOperationsInput | string
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCustomerDemoCreateManyInput = {
    CustomerID: string
    CustomerTypeID: string
  }

  export type CustomerCustomerDemoUpdateManyMutationInput = {

  }

  export type CustomerCustomerDemoUncheckedUpdateManyInput = {
    CustomerID?: StringFieldUpdateOperationsInput | string
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerDemographicsCreateInput = {
    CustomerTypeID: string
    CustomerDesc?: string | null
    CustomerCustomerDemo?: CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput
  }

  export type CustomerDemographicsUncheckedCreateInput = {
    CustomerTypeID: string
    CustomerDesc?: string | null
    CustomerCustomerDemo?: CustomerCustomerDemoUncheckedCreateNestedManyWithoutCustomerDemographicsInput
  }

  export type CustomerDemographicsUpdateInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerCustomerDemo?: CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput
  }

  export type CustomerDemographicsUncheckedUpdateInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerCustomerDemo?: CustomerCustomerDemoUncheckedUpdateManyWithoutCustomerDemographicsNestedInput
  }

  export type CustomerDemographicsCreateManyInput = {
    CustomerTypeID: string
    CustomerDesc?: string | null
  }

  export type CustomerDemographicsUpdateManyMutationInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerDemographicsUncheckedUpdateManyInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeTerritoriesCreateInput = {
    Territories: TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput
    Employees: EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput
  }

  export type EmployeeTerritoriesUncheckedCreateInput = {
    EmployeeID: number
    TerritoryID: string
  }

  export type EmployeeTerritoriesUpdateInput = {
    Territories?: TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput
    Employees?: EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput
  }

  export type EmployeeTerritoriesUncheckedUpdateInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    TerritoryID?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeTerritoriesCreateManyInput = {
    EmployeeID: number
    TerritoryID: string
  }

  export type EmployeeTerritoriesUpdateManyMutationInput = {

  }

  export type EmployeeTerritoriesUncheckedUpdateManyInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    TerritoryID?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesCreateInput = {
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput
    Employees?: EmployeesCreateNestedOneWithoutOther_EmployeesInput
    other_Employees?: EmployeesCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    ReportsTo?: number | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutEmployeesInput
    other_Employees?: EmployeesUncheckedCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUpdateInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput
    Employees?: EmployeesUpdateOneWithoutOther_EmployeesNestedInput
    other_Employees?: EmployeesUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesNestedInput
    other_Employees?: EmployeesUncheckedUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesCreateManyInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    ReportsTo?: number | null
    PhotoPath?: string | null
  }

  export type EmployeesUpdateManyMutationInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUncheckedUpdateManyInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_DetailsCreateInput = {
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
    Products: ProductsCreateNestedOneWithoutOrder_DetailsInput
    Orders: OrdersCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateInput = {
    OrderID: number
    ProductID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsUpdateInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
    Products?: ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput
    Orders?: OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type Order_DetailsCreateManyInput = {
    OrderID: number
    ProductID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsUpdateManyMutationInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrdersInput
    Shippers?: ShippersCreateNestedOneWithoutOrdersInput
    Employees?: EmployeesCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    OrderID?: number
    CustomerID?: string | null
    EmployeeID?: number | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    ShipVia?: number | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrdersNestedInput
    Shippers?: ShippersUpdateOneWithoutOrdersNestedInput
    Employees?: EmployeesUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShipVia?: NullableIntFieldUpdateOperationsInput | number | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    OrderID?: number
    CustomerID?: string | null
    EmployeeID?: number | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    ShipVia?: number | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
  }

  export type OrdersUpdateManyMutationInput = {
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShipVia?: NullableIntFieldUpdateOperationsInput | number | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateInput = {
    ProductName: string
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsCreateNestedManyWithoutProductsInput
    Suppliers?: SuppliersCreateNestedOneWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    ProductID?: number
    ProductName: string
    SupplierID?: number | null
    CategoryID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUpdateManyWithoutProductsNestedInput
    Suppliers?: SuppliersUpdateOneWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    SupplierID?: NullableIntFieldUpdateOperationsInput | number | null
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    ProductID?: number
    ProductName: string
    SupplierID?: number | null
    CategoryID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
  }

  export type ProductsUpdateManyMutationInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    SupplierID?: NullableIntFieldUpdateOperationsInput | number | null
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsCreateInput = {
    RegionDescription: string
    Territories?: TerritoriesCreateNestedManyWithoutRegionsInput
  }

  export type RegionsUncheckedCreateInput = {
    RegionID?: number
    RegionDescription: string
    Territories?: TerritoriesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type RegionsUpdateInput = {
    RegionDescription?: StringFieldUpdateOperationsInput | string
    Territories?: TerritoriesUpdateManyWithoutRegionsNestedInput
  }

  export type RegionsUncheckedUpdateInput = {
    RegionID?: IntFieldUpdateOperationsInput | number
    RegionDescription?: StringFieldUpdateOperationsInput | string
    Territories?: TerritoriesUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type RegionsCreateManyInput = {
    RegionID?: number
    RegionDescription: string
  }

  export type RegionsUpdateManyMutationInput = {
    RegionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUncheckedUpdateManyInput = {
    RegionID?: IntFieldUpdateOperationsInput | number
    RegionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ShippersCreateInput = {
    CompanyName: string
    Phone?: string | null
    Orders?: OrdersCreateNestedManyWithoutShippersInput
  }

  export type ShippersUncheckedCreateInput = {
    ShipperID?: number
    CompanyName: string
    Phone?: string | null
    Orders?: OrdersUncheckedCreateNestedManyWithoutShippersInput
  }

  export type ShippersUpdateInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUpdateManyWithoutShippersNestedInput
  }

  export type ShippersUncheckedUpdateInput = {
    ShipperID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUncheckedUpdateManyWithoutShippersNestedInput
  }

  export type ShippersCreateManyInput = {
    ShipperID?: number
    CompanyName: string
    Phone?: string | null
  }

  export type ShippersUpdateManyMutationInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippersUncheckedUpdateManyInput = {
    ShipperID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuppliersCreateInput = {
    CompanyName: string
    ContactName?: string | null
    ContactTitle?: string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    Phone?: string | null
    Fax?: string | null
    HomePage?: string | null
    Products?: ProductsCreateNestedManyWithoutSuppliersInput
  }

  export type SuppliersUncheckedCreateInput = {
    SupplierID?: number
    CompanyName: string
    ContactName?: string | null
    ContactTitle?: string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    Phone?: string | null
    Fax?: string | null
    HomePage?: string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type SuppliersUpdateInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
    Products?: ProductsUpdateManyWithoutSuppliersNestedInput
  }

  export type SuppliersUncheckedUpdateInput = {
    SupplierID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
    Products?: ProductsUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type SuppliersCreateManyInput = {
    SupplierID?: number
    CompanyName: string
    ContactName?: string | null
    ContactTitle?: string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    Phone?: string | null
    Fax?: string | null
    HomePage?: string | null
  }

  export type SuppliersUpdateManyMutationInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuppliersUncheckedUpdateManyInput = {
    SupplierID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TerritoriesCreateInput = {
    TerritoryID: string
    TerritoryDescription: string
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput
    Regions: RegionsCreateNestedOneWithoutTerritoriesInput
  }

  export type TerritoriesUncheckedCreateInput = {
    TerritoryID: string
    TerritoryDescription: string
    RegionID: number
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutTerritoriesInput
  }

  export type TerritoriesUpdateInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput
    Regions?: RegionsUpdateOneRequiredWithoutTerritoriesNestedInput
  }

  export type TerritoriesUncheckedUpdateInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    RegionID?: IntFieldUpdateOperationsInput | number
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutTerritoriesNestedInput
  }

  export type TerritoriesCreateManyInput = {
    TerritoryID: string
    TerritoryDescription: string
    RegionID: number
  }

  export type TerritoriesUpdateManyMutationInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
  }

  export type TerritoriesUncheckedUpdateManyInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    RegionID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    Description?: SortOrder
    Picture?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    CategoryID?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    Description?: SortOrder
    Picture?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    Description?: SortOrder
    Picture?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    CategoryID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CustomerDemographicsScalarRelationFilter = {
    is?: CustomerDemographicsWhereInput
    isNot?: CustomerDemographicsWhereInput
  }

  export type CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput = {
    CustomerID: string
    CustomerTypeID: string
  }

  export type CustomerCustomerDemoCountOrderByAggregateInput = {
    CustomerID?: SortOrder
    CustomerTypeID?: SortOrder
  }

  export type CustomerCustomerDemoMaxOrderByAggregateInput = {
    CustomerID?: SortOrder
    CustomerTypeID?: SortOrder
  }

  export type CustomerCustomerDemoMinOrderByAggregateInput = {
    CustomerID?: SortOrder
    CustomerTypeID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CustomerCustomerDemoListRelationFilter = {
    every?: CustomerCustomerDemoWhereInput
    some?: CustomerCustomerDemoWhereInput
    none?: CustomerCustomerDemoWhereInput
  }

  export type CustomerCustomerDemoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerDemographicsCountOrderByAggregateInput = {
    CustomerTypeID?: SortOrder
    CustomerDesc?: SortOrder
  }

  export type CustomerDemographicsMaxOrderByAggregateInput = {
    CustomerTypeID?: SortOrder
    CustomerDesc?: SortOrder
  }

  export type CustomerDemographicsMinOrderByAggregateInput = {
    CustomerTypeID?: SortOrder
    CustomerDesc?: SortOrder
  }

  export type TerritoriesScalarRelationFilter = {
    is?: TerritoriesWhereInput
    isNot?: TerritoriesWhereInput
  }

  export type EmployeesScalarRelationFilter = {
    is?: EmployeesWhereInput
    isNot?: EmployeesWhereInput
  }

  export type EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput = {
    EmployeeID: number
    TerritoryID: string
  }

  export type EmployeeTerritoriesCountOrderByAggregateInput = {
    EmployeeID?: SortOrder
    TerritoryID?: SortOrder
  }

  export type EmployeeTerritoriesAvgOrderByAggregateInput = {
    EmployeeID?: SortOrder
  }

  export type EmployeeTerritoriesMaxOrderByAggregateInput = {
    EmployeeID?: SortOrder
    TerritoryID?: SortOrder
  }

  export type EmployeeTerritoriesMinOrderByAggregateInput = {
    EmployeeID?: SortOrder
    TerritoryID?: SortOrder
  }

  export type EmployeeTerritoriesSumOrderByAggregateInput = {
    EmployeeID?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeTerritoriesListRelationFilter = {
    every?: EmployeeTerritoriesWhereInput
    some?: EmployeeTerritoriesWhereInput
    none?: EmployeeTerritoriesWhereInput
  }

  export type EmployeesNullableScalarRelationFilter = {
    is?: EmployeesWhereInput | null
    isNot?: EmployeesWhereInput | null
  }

  export type EmployeesListRelationFilter = {
    every?: EmployeesWhereInput
    some?: EmployeesWhereInput
    none?: EmployeesWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type EmployeeTerritoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesCountOrderByAggregateInput = {
    EmployeeID?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    TitleOfCourtesy?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    HomePhone?: SortOrder
    Extension?: SortOrder
    Photo?: SortOrder
    Notes?: SortOrder
    ReportsTo?: SortOrder
    PhotoPath?: SortOrder
  }

  export type EmployeesAvgOrderByAggregateInput = {
    EmployeeID?: SortOrder
    ReportsTo?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    EmployeeID?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    TitleOfCourtesy?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    HomePhone?: SortOrder
    Extension?: SortOrder
    Photo?: SortOrder
    Notes?: SortOrder
    ReportsTo?: SortOrder
    PhotoPath?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    EmployeeID?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    TitleOfCourtesy?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    HomePhone?: SortOrder
    Extension?: SortOrder
    Photo?: SortOrder
    Notes?: SortOrder
    ReportsTo?: SortOrder
    PhotoPath?: SortOrder
  }

  export type EmployeesSumOrderByAggregateInput = {
    EmployeeID?: SortOrder
    ReportsTo?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type Order_DetailsOrderIDProductIDCompoundUniqueInput = {
    OrderID: number
    ProductID: number
  }

  export type Order_DetailsCountOrderByAggregateInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
  }

  export type Order_DetailsAvgOrderByAggregateInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
  }

  export type Order_DetailsMaxOrderByAggregateInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
  }

  export type Order_DetailsMinOrderByAggregateInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
  }

  export type Order_DetailsSumOrderByAggregateInput = {
    OrderID?: SortOrder
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Discount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Order_DetailsListRelationFilter = {
    every?: Order_DetailsWhereInput
    some?: Order_DetailsWhereInput
    none?: Order_DetailsWhereInput
  }

  export type ShippersNullableScalarRelationFilter = {
    is?: ShippersWhereInput | null
    isNot?: ShippersWhereInput | null
  }

  export type Order_DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    EmployeeID?: SortOrder
    OrderDate?: SortOrder
    RequiredDate?: SortOrder
    ShippedDate?: SortOrder
    ShipVia?: SortOrder
    Freight?: SortOrder
    ShipName?: SortOrder
    ShipAddress?: SortOrder
    ShipCity?: SortOrder
    ShipRegion?: SortOrder
    ShipPostalCode?: SortOrder
    ShipCountry?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    OrderID?: SortOrder
    EmployeeID?: SortOrder
    ShipVia?: SortOrder
    Freight?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    EmployeeID?: SortOrder
    OrderDate?: SortOrder
    RequiredDate?: SortOrder
    ShippedDate?: SortOrder
    ShipVia?: SortOrder
    Freight?: SortOrder
    ShipName?: SortOrder
    ShipAddress?: SortOrder
    ShipCity?: SortOrder
    ShipRegion?: SortOrder
    ShipPostalCode?: SortOrder
    ShipCountry?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    EmployeeID?: SortOrder
    OrderDate?: SortOrder
    RequiredDate?: SortOrder
    ShippedDate?: SortOrder
    ShipVia?: SortOrder
    Freight?: SortOrder
    ShipName?: SortOrder
    ShipAddress?: SortOrder
    ShipCity?: SortOrder
    ShipRegion?: SortOrder
    ShipPostalCode?: SortOrder
    ShipCountry?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    OrderID?: SortOrder
    EmployeeID?: SortOrder
    ShipVia?: SortOrder
    Freight?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SuppliersNullableScalarRelationFilter = {
    is?: SuppliersWhereInput | null
    isNot?: SuppliersWhereInput | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type ProductsCountOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    SupplierID?: SortOrder
    CategoryID?: SortOrder
    QuantityPerUnit?: SortOrder
    UnitPrice?: SortOrder
    UnitsInStock?: SortOrder
    UnitsOnOrder?: SortOrder
    ReorderLevel?: SortOrder
    Discontinued?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    ProductID?: SortOrder
    SupplierID?: SortOrder
    CategoryID?: SortOrder
    UnitPrice?: SortOrder
    UnitsInStock?: SortOrder
    UnitsOnOrder?: SortOrder
    ReorderLevel?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    SupplierID?: SortOrder
    CategoryID?: SortOrder
    QuantityPerUnit?: SortOrder
    UnitPrice?: SortOrder
    UnitsInStock?: SortOrder
    UnitsOnOrder?: SortOrder
    ReorderLevel?: SortOrder
    Discontinued?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    SupplierID?: SortOrder
    CategoryID?: SortOrder
    QuantityPerUnit?: SortOrder
    UnitPrice?: SortOrder
    UnitsInStock?: SortOrder
    UnitsOnOrder?: SortOrder
    ReorderLevel?: SortOrder
    Discontinued?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    ProductID?: SortOrder
    SupplierID?: SortOrder
    CategoryID?: SortOrder
    UnitPrice?: SortOrder
    UnitsInStock?: SortOrder
    UnitsOnOrder?: SortOrder
    ReorderLevel?: SortOrder
  }

  export type TerritoriesListRelationFilter = {
    every?: TerritoriesWhereInput
    some?: TerritoriesWhereInput
    none?: TerritoriesWhereInput
  }

  export type TerritoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionsCountOrderByAggregateInput = {
    RegionID?: SortOrder
    RegionDescription?: SortOrder
  }

  export type RegionsAvgOrderByAggregateInput = {
    RegionID?: SortOrder
  }

  export type RegionsMaxOrderByAggregateInput = {
    RegionID?: SortOrder
    RegionDescription?: SortOrder
  }

  export type RegionsMinOrderByAggregateInput = {
    RegionID?: SortOrder
    RegionDescription?: SortOrder
  }

  export type RegionsSumOrderByAggregateInput = {
    RegionID?: SortOrder
  }

  export type ShippersCountOrderByAggregateInput = {
    ShipperID?: SortOrder
    CompanyName?: SortOrder
    Phone?: SortOrder
  }

  export type ShippersAvgOrderByAggregateInput = {
    ShipperID?: SortOrder
  }

  export type ShippersMaxOrderByAggregateInput = {
    ShipperID?: SortOrder
    CompanyName?: SortOrder
    Phone?: SortOrder
  }

  export type ShippersMinOrderByAggregateInput = {
    ShipperID?: SortOrder
    CompanyName?: SortOrder
    Phone?: SortOrder
  }

  export type ShippersSumOrderByAggregateInput = {
    ShipperID?: SortOrder
  }

  export type SuppliersCountOrderByAggregateInput = {
    SupplierID?: SortOrder
    CompanyName?: SortOrder
    ContactName?: SortOrder
    ContactTitle?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    HomePage?: SortOrder
  }

  export type SuppliersAvgOrderByAggregateInput = {
    SupplierID?: SortOrder
  }

  export type SuppliersMaxOrderByAggregateInput = {
    SupplierID?: SortOrder
    CompanyName?: SortOrder
    ContactName?: SortOrder
    ContactTitle?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    HomePage?: SortOrder
  }

  export type SuppliersMinOrderByAggregateInput = {
    SupplierID?: SortOrder
    CompanyName?: SortOrder
    ContactName?: SortOrder
    ContactTitle?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    Region?: SortOrder
    PostalCode?: SortOrder
    Country?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    HomePage?: SortOrder
  }

  export type SuppliersSumOrderByAggregateInput = {
    SupplierID?: SortOrder
  }

  export type RegionsScalarRelationFilter = {
    is?: RegionsWhereInput
    isNot?: RegionsWhereInput
  }

  export type TerritoriesCountOrderByAggregateInput = {
    TerritoryID?: SortOrder
    TerritoryDescription?: SortOrder
    RegionID?: SortOrder
  }

  export type TerritoriesAvgOrderByAggregateInput = {
    RegionID?: SortOrder
  }

  export type TerritoriesMaxOrderByAggregateInput = {
    TerritoryID?: SortOrder
    TerritoryDescription?: SortOrder
    RegionID?: SortOrder
  }

  export type TerritoriesMinOrderByAggregateInput = {
    TerritoryID?: SortOrder
    TerritoryDescription?: SortOrder
    RegionID?: SortOrder
  }

  export type TerritoriesSumOrderByAggregateInput = {
    RegionID?: SortOrder
  }

  export type ProductsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type ProductsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput = {
    create?: XOR<CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedCreateWithoutCustomerCustomerDemoInput>
    connectOrCreate?: CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput
    connect?: CustomerDemographicsWhereUniqueInput
  }

  export type CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput = {
    create?: XOR<CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedCreateWithoutCustomerCustomerDemoInput>
    connectOrCreate?: CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput
    upsert?: CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput
    connect?: CustomerDemographicsWhereUniqueInput
    update?: XOR<XOR<CustomerDemographicsUpdateToOneWithWhereWithoutCustomerCustomerDemoInput, CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput>, CustomerDemographicsUncheckedUpdateWithoutCustomerCustomerDemoInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput = {
    create?: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput> | CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput[]
    connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput | CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[]
    createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope
    connect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
  }

  export type CustomerCustomerDemoUncheckedCreateNestedManyWithoutCustomerDemographicsInput = {
    create?: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput> | CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput[]
    connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput | CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[]
    createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope
    connect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
  }

  export type CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput = {
    create?: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput> | CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput[]
    connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput | CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[]
    upsert?: CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput | CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput[]
    createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope
    set?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    disconnect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    delete?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    connect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    update?: CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput | CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput[]
    updateMany?: CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput | CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput[]
    deleteMany?: CustomerCustomerDemoScalarWhereInput | CustomerCustomerDemoScalarWhereInput[]
  }

  export type CustomerCustomerDemoUncheckedUpdateManyWithoutCustomerDemographicsNestedInput = {
    create?: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput> | CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput[]
    connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput | CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[]
    upsert?: CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput | CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput[]
    createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope
    set?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    disconnect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    delete?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    connect?: CustomerCustomerDemoWhereUniqueInput | CustomerCustomerDemoWhereUniqueInput[]
    update?: CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput | CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput[]
    updateMany?: CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput | CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput[]
    deleteMany?: CustomerCustomerDemoScalarWhereInput | CustomerCustomerDemoScalarWhereInput[]
  }

  export type TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput = {
    create?: XOR<TerritoriesCreateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedCreateWithoutEmployeeTerritoriesInput>
    connectOrCreate?: TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput
    connect?: TerritoriesWhereUniqueInput
  }

  export type EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput = {
    create?: XOR<EmployeesCreateWithoutEmployeeTerritoriesInput, EmployeesUncheckedCreateWithoutEmployeeTerritoriesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput
    connect?: EmployeesWhereUniqueInput
  }

  export type TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput = {
    create?: XOR<TerritoriesCreateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedCreateWithoutEmployeeTerritoriesInput>
    connectOrCreate?: TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput
    upsert?: TerritoriesUpsertWithoutEmployeeTerritoriesInput
    connect?: TerritoriesWhereUniqueInput
    update?: XOR<XOR<TerritoriesUpdateToOneWithWhereWithoutEmployeeTerritoriesInput, TerritoriesUpdateWithoutEmployeeTerritoriesInput>, TerritoriesUncheckedUpdateWithoutEmployeeTerritoriesInput>
  }

  export type EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput = {
    create?: XOR<EmployeesCreateWithoutEmployeeTerritoriesInput, EmployeesUncheckedCreateWithoutEmployeeTerritoriesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput
    upsert?: EmployeesUpsertWithoutEmployeeTerritoriesInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutEmployeeTerritoriesInput, EmployeesUpdateWithoutEmployeeTerritoriesInput>, EmployeesUncheckedUpdateWithoutEmployeeTerritoriesInput>
  }

  export type EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput> | EmployeeTerritoriesCreateWithoutEmployeesInput[] | EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput | EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[]
    createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
  }

  export type EmployeesCreateNestedOneWithoutOther_EmployeesInput = {
    create?: XOR<EmployeesCreateWithoutOther_EmployeesInput, EmployeesUncheckedCreateWithoutOther_EmployeesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutOther_EmployeesInput
    connect?: EmployeesWhereUniqueInput
  }

  export type EmployeesCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput> | EmployeesCreateWithoutEmployeesInput[] | EmployeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput | EmployeesCreateOrConnectWithoutEmployeesInput[]
    createMany?: EmployeesCreateManyEmployeesInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput> | OrdersCreateWithoutEmployeesInput[] | OrdersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput | OrdersCreateOrConnectWithoutEmployeesInput[]
    createMany?: OrdersCreateManyEmployeesInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type EmployeeTerritoriesUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput> | EmployeeTerritoriesCreateWithoutEmployeesInput[] | EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput | EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[]
    createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
  }

  export type EmployeesUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput> | EmployeesCreateWithoutEmployeesInput[] | EmployeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput | EmployeesCreateOrConnectWithoutEmployeesInput[]
    createMany?: EmployeesCreateManyEmployeesInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput> | OrdersCreateWithoutEmployeesInput[] | OrdersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput | OrdersCreateOrConnectWithoutEmployeesInput[]
    createMany?: OrdersCreateManyEmployeesInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput> | EmployeeTerritoriesCreateWithoutEmployeesInput[] | EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput | EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[]
    upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput | EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope
    set?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    disconnect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    delete?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput | EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput | EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
  }

  export type EmployeesUpdateOneWithoutOther_EmployeesNestedInput = {
    create?: XOR<EmployeesCreateWithoutOther_EmployeesInput, EmployeesUncheckedCreateWithoutOther_EmployeesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutOther_EmployeesInput
    upsert?: EmployeesUpsertWithoutOther_EmployeesInput
    disconnect?: EmployeesWhereInput | boolean
    delete?: EmployeesWhereInput | boolean
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutOther_EmployeesInput, EmployeesUpdateWithoutOther_EmployeesInput>, EmployeesUncheckedUpdateWithoutOther_EmployeesInput>
  }

  export type EmployeesUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput> | EmployeesCreateWithoutEmployeesInput[] | EmployeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput | EmployeesCreateOrConnectWithoutEmployeesInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutEmployeesInput | EmployeesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: EmployeesCreateManyEmployeesInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutEmployeesInput | EmployeesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutEmployeesInput | EmployeesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput> | OrdersCreateWithoutEmployeesInput[] | OrdersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput | OrdersCreateOrConnectWithoutEmployeesInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutEmployeesInput | OrdersUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: OrdersCreateManyEmployeesInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutEmployeesInput | OrdersUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutEmployeesInput | OrdersUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput> | EmployeeTerritoriesCreateWithoutEmployeesInput[] | EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput | EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[]
    upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput | EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope
    set?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    disconnect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    delete?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput | EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput | EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
  }

  export type EmployeesUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput> | EmployeesCreateWithoutEmployeesInput[] | EmployeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput | EmployeesCreateOrConnectWithoutEmployeesInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutEmployeesInput | EmployeesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: EmployeesCreateManyEmployeesInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutEmployeesInput | EmployeesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutEmployeesInput | EmployeesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput> | OrdersCreateWithoutEmployeesInput[] | OrdersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput | OrdersCreateOrConnectWithoutEmployeesInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutEmployeesInput | OrdersUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: OrdersCreateManyEmployeesInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutEmployeesInput | OrdersUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutEmployeesInput | OrdersUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutOrder_DetailsInput = {
    create?: XOR<ProductsCreateWithoutOrder_DetailsInput, ProductsUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_DetailsInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutOrder_DetailsInput = {
    create?: XOR<OrdersCreateWithoutOrder_DetailsInput, OrdersUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_DetailsInput
    connect?: OrdersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput = {
    create?: XOR<ProductsCreateWithoutOrder_DetailsInput, ProductsUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_DetailsInput
    upsert?: ProductsUpsertWithoutOrder_DetailsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrder_DetailsInput, ProductsUpdateWithoutOrder_DetailsInput>, ProductsUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_DetailsInput, OrdersUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_DetailsInput
    upsert?: OrdersUpsertWithoutOrder_DetailsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_DetailsInput, OrdersUpdateWithoutOrder_DetailsInput>, OrdersUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type Order_DetailsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput> | Order_DetailsCreateWithoutOrdersInput[] | Order_DetailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput | Order_DetailsCreateOrConnectWithoutOrdersInput[]
    createMany?: Order_DetailsCreateManyOrdersInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type ShippersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ShippersCreateWithoutOrdersInput, ShippersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShippersCreateOrConnectWithoutOrdersInput
    connect?: ShippersWhereUniqueInput
  }

  export type EmployeesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<EmployeesCreateWithoutOrdersInput, EmployeesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutOrdersInput
    connect?: EmployeesWhereUniqueInput
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput> | Order_DetailsCreateWithoutOrdersInput[] | Order_DetailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput | Order_DetailsCreateOrConnectWithoutOrdersInput[]
    createMany?: Order_DetailsCreateManyOrdersInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Order_DetailsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput> | Order_DetailsCreateWithoutOrdersInput[] | Order_DetailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput | Order_DetailsCreateOrConnectWithoutOrdersInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput | Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: Order_DetailsCreateManyOrdersInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput | Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrdersInput | Order_DetailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type ShippersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ShippersCreateWithoutOrdersInput, ShippersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShippersCreateOrConnectWithoutOrdersInput
    upsert?: ShippersUpsertWithoutOrdersInput
    disconnect?: ShippersWhereInput | boolean
    delete?: ShippersWhereInput | boolean
    connect?: ShippersWhereUniqueInput
    update?: XOR<XOR<ShippersUpdateToOneWithWhereWithoutOrdersInput, ShippersUpdateWithoutOrdersInput>, ShippersUncheckedUpdateWithoutOrdersInput>
  }

  export type EmployeesUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<EmployeesCreateWithoutOrdersInput, EmployeesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutOrdersInput
    upsert?: EmployeesUpsertWithoutOrdersInput
    disconnect?: EmployeesWhereInput | boolean
    delete?: EmployeesWhereInput | boolean
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutOrdersInput, EmployeesUpdateWithoutOrdersInput>, EmployeesUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput> | Order_DetailsCreateWithoutOrdersInput[] | Order_DetailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput | Order_DetailsCreateOrConnectWithoutOrdersInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput | Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: Order_DetailsCreateManyOrdersInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput | Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrdersInput | Order_DetailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type Order_DetailsCreateNestedManyWithoutProductsInput = {
    create?: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput> | Order_DetailsCreateWithoutProductsInput[] | Order_DetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput | Order_DetailsCreateOrConnectWithoutProductsInput[]
    createMany?: Order_DetailsCreateManyProductsInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type SuppliersCreateNestedOneWithoutProductsInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput
    connect?: SuppliersWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput> | Order_DetailsCreateWithoutProductsInput[] | Order_DetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput | Order_DetailsCreateOrConnectWithoutProductsInput[]
    createMany?: Order_DetailsCreateManyProductsInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type Order_DetailsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput> | Order_DetailsCreateWithoutProductsInput[] | Order_DetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput | Order_DetailsCreateOrConnectWithoutProductsInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutProductsInput | Order_DetailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: Order_DetailsCreateManyProductsInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutProductsInput | Order_DetailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutProductsInput | Order_DetailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type SuppliersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput
    upsert?: SuppliersUpsertWithoutProductsInput
    disconnect?: SuppliersWhereInput | boolean
    delete?: SuppliersWhereInput | boolean
    connect?: SuppliersWhereUniqueInput
    update?: XOR<XOR<SuppliersUpdateToOneWithWhereWithoutProductsInput, SuppliersUpdateWithoutProductsInput>, SuppliersUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type Order_DetailsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput> | Order_DetailsCreateWithoutProductsInput[] | Order_DetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput | Order_DetailsCreateOrConnectWithoutProductsInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutProductsInput | Order_DetailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: Order_DetailsCreateManyProductsInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutProductsInput | Order_DetailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutProductsInput | Order_DetailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type TerritoriesCreateNestedManyWithoutRegionsInput = {
    create?: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput> | TerritoriesCreateWithoutRegionsInput[] | TerritoriesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionsInput | TerritoriesCreateOrConnectWithoutRegionsInput[]
    createMany?: TerritoriesCreateManyRegionsInputEnvelope
    connect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
  }

  export type TerritoriesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput> | TerritoriesCreateWithoutRegionsInput[] | TerritoriesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionsInput | TerritoriesCreateOrConnectWithoutRegionsInput[]
    createMany?: TerritoriesCreateManyRegionsInputEnvelope
    connect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
  }

  export type TerritoriesUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput> | TerritoriesCreateWithoutRegionsInput[] | TerritoriesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionsInput | TerritoriesCreateOrConnectWithoutRegionsInput[]
    upsert?: TerritoriesUpsertWithWhereUniqueWithoutRegionsInput | TerritoriesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: TerritoriesCreateManyRegionsInputEnvelope
    set?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    disconnect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    delete?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    connect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    update?: TerritoriesUpdateWithWhereUniqueWithoutRegionsInput | TerritoriesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: TerritoriesUpdateManyWithWhereWithoutRegionsInput | TerritoriesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: TerritoriesScalarWhereInput | TerritoriesScalarWhereInput[]
  }

  export type TerritoriesUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput> | TerritoriesCreateWithoutRegionsInput[] | TerritoriesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionsInput | TerritoriesCreateOrConnectWithoutRegionsInput[]
    upsert?: TerritoriesUpsertWithWhereUniqueWithoutRegionsInput | TerritoriesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: TerritoriesCreateManyRegionsInputEnvelope
    set?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    disconnect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    delete?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    connect?: TerritoriesWhereUniqueInput | TerritoriesWhereUniqueInput[]
    update?: TerritoriesUpdateWithWhereUniqueWithoutRegionsInput | TerritoriesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: TerritoriesUpdateManyWithWhereWithoutRegionsInput | TerritoriesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: TerritoriesScalarWhereInput | TerritoriesScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutShippersInput = {
    create?: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput> | OrdersCreateWithoutShippersInput[] | OrdersUncheckedCreateWithoutShippersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput | OrdersCreateOrConnectWithoutShippersInput[]
    createMany?: OrdersCreateManyShippersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutShippersInput = {
    create?: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput> | OrdersCreateWithoutShippersInput[] | OrdersUncheckedCreateWithoutShippersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput | OrdersCreateOrConnectWithoutShippersInput[]
    createMany?: OrdersCreateManyShippersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutShippersNestedInput = {
    create?: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput> | OrdersCreateWithoutShippersInput[] | OrdersUncheckedCreateWithoutShippersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput | OrdersCreateOrConnectWithoutShippersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutShippersInput | OrdersUpsertWithWhereUniqueWithoutShippersInput[]
    createMany?: OrdersCreateManyShippersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutShippersInput | OrdersUpdateWithWhereUniqueWithoutShippersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutShippersInput | OrdersUpdateManyWithWhereWithoutShippersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutShippersNestedInput = {
    create?: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput> | OrdersCreateWithoutShippersInput[] | OrdersUncheckedCreateWithoutShippersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput | OrdersCreateOrConnectWithoutShippersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutShippersInput | OrdersUpsertWithWhereUniqueWithoutShippersInput[]
    createMany?: OrdersCreateManyShippersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutShippersInput | OrdersUpdateWithWhereUniqueWithoutShippersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutShippersInput | OrdersUpdateManyWithWhereWithoutShippersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput> | ProductsCreateWithoutSuppliersInput[] | ProductsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput | ProductsCreateOrConnectWithoutSuppliersInput[]
    createMany?: ProductsCreateManySuppliersInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput> | ProductsCreateWithoutSuppliersInput[] | ProductsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput | ProductsCreateOrConnectWithoutSuppliersInput[]
    createMany?: ProductsCreateManySuppliersInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput> | ProductsCreateWithoutSuppliersInput[] | ProductsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput | ProductsCreateOrConnectWithoutSuppliersInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSuppliersInput | ProductsUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: ProductsCreateManySuppliersInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSuppliersInput | ProductsUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSuppliersInput | ProductsUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput> | ProductsCreateWithoutSuppliersInput[] | ProductsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput | ProductsCreateOrConnectWithoutSuppliersInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSuppliersInput | ProductsUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: ProductsCreateManySuppliersInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSuppliersInput | ProductsUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSuppliersInput | ProductsUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput> | EmployeeTerritoriesCreateWithoutTerritoriesInput[] | EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput | EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[]
    createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
  }

  export type RegionsCreateNestedOneWithoutTerritoriesInput = {
    create?: XOR<RegionsCreateWithoutTerritoriesInput, RegionsUncheckedCreateWithoutTerritoriesInput>
    connectOrCreate?: RegionsCreateOrConnectWithoutTerritoriesInput
    connect?: RegionsWhereUniqueInput
  }

  export type EmployeeTerritoriesUncheckedCreateNestedManyWithoutTerritoriesInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput> | EmployeeTerritoriesCreateWithoutTerritoriesInput[] | EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput | EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[]
    createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
  }

  export type EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput> | EmployeeTerritoriesCreateWithoutTerritoriesInput[] | EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput | EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[]
    upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput | EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput[]
    createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope
    set?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    disconnect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    delete?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput | EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput[]
    updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput | EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput[]
    deleteMany?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
  }

  export type RegionsUpdateOneRequiredWithoutTerritoriesNestedInput = {
    create?: XOR<RegionsCreateWithoutTerritoriesInput, RegionsUncheckedCreateWithoutTerritoriesInput>
    connectOrCreate?: RegionsCreateOrConnectWithoutTerritoriesInput
    upsert?: RegionsUpsertWithoutTerritoriesInput
    connect?: RegionsWhereUniqueInput
    update?: XOR<XOR<RegionsUpdateToOneWithWhereWithoutTerritoriesInput, RegionsUpdateWithoutTerritoriesInput>, RegionsUncheckedUpdateWithoutTerritoriesInput>
  }

  export type EmployeeTerritoriesUncheckedUpdateManyWithoutTerritoriesNestedInput = {
    create?: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput> | EmployeeTerritoriesCreateWithoutTerritoriesInput[] | EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput[]
    connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput | EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[]
    upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput | EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput[]
    createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope
    set?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    disconnect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    delete?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    connect?: EmployeeTerritoriesWhereUniqueInput | EmployeeTerritoriesWhereUniqueInput[]
    update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput | EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput[]
    updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput | EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput[]
    deleteMany?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProductsCreateWithoutCategoriesInput = {
    ProductName: string
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsCreateNestedManyWithoutProductsInput
    Suppliers?: SuppliersCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoriesInput = {
    ProductID?: number
    ProductName: string
    SupplierID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateManyCategoriesInputEnvelope = {
    data: ProductsCreateManyCategoriesInput | ProductsCreateManyCategoriesInput[]
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    ProductID?: IntFilter<"Products"> | number
    ProductName?: StringFilter<"Products"> | string
    SupplierID?: IntNullableFilter<"Products"> | number | null
    CategoryID?: IntNullableFilter<"Products"> | number | null
    QuantityPerUnit?: StringNullableFilter<"Products"> | string | null
    UnitPrice?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: IntNullableFilter<"Products"> | number | null
    UnitsOnOrder?: IntNullableFilter<"Products"> | number | null
    ReorderLevel?: IntNullableFilter<"Products"> | number | null
    Discontinued?: StringFilter<"Products"> | string
  }

  export type CustomerDemographicsCreateWithoutCustomerCustomerDemoInput = {
    CustomerTypeID: string
    CustomerDesc?: string | null
  }

  export type CustomerDemographicsUncheckedCreateWithoutCustomerCustomerDemoInput = {
    CustomerTypeID: string
    CustomerDesc?: string | null
  }

  export type CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput = {
    where: CustomerDemographicsWhereUniqueInput
    create: XOR<CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedCreateWithoutCustomerCustomerDemoInput>
  }

  export type CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput = {
    update: XOR<CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedUpdateWithoutCustomerCustomerDemoInput>
    create: XOR<CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedCreateWithoutCustomerCustomerDemoInput>
    where?: CustomerDemographicsWhereInput
  }

  export type CustomerDemographicsUpdateToOneWithWhereWithoutCustomerCustomerDemoInput = {
    where?: CustomerDemographicsWhereInput
    data: XOR<CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput, CustomerDemographicsUncheckedUpdateWithoutCustomerCustomerDemoInput>
  }

  export type CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerDemographicsUncheckedUpdateWithoutCustomerCustomerDemoInput = {
    CustomerTypeID?: StringFieldUpdateOperationsInput | string
    CustomerDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCustomerDemoCreateWithoutCustomerDemographicsInput = {

  }

  export type CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput = {
    CustomerID: string
  }

  export type CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput = {
    where: CustomerCustomerDemoWhereUniqueInput
    create: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput>
  }

  export type CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope = {
    data: CustomerCustomerDemoCreateManyCustomerDemographicsInput | CustomerCustomerDemoCreateManyCustomerDemographicsInput[]
  }

  export type CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput = {
    where: CustomerCustomerDemoWhereUniqueInput
    update: XOR<CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedUpdateWithoutCustomerDemographicsInput>
    create: XOR<CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedCreateWithoutCustomerDemographicsInput>
  }

  export type CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput = {
    where: CustomerCustomerDemoWhereUniqueInput
    data: XOR<CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput, CustomerCustomerDemoUncheckedUpdateWithoutCustomerDemographicsInput>
  }

  export type CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput = {
    where: CustomerCustomerDemoScalarWhereInput
    data: XOR<CustomerCustomerDemoUpdateManyMutationInput, CustomerCustomerDemoUncheckedUpdateManyWithoutCustomerDemographicsInput>
  }

  export type CustomerCustomerDemoScalarWhereInput = {
    AND?: CustomerCustomerDemoScalarWhereInput | CustomerCustomerDemoScalarWhereInput[]
    OR?: CustomerCustomerDemoScalarWhereInput[]
    NOT?: CustomerCustomerDemoScalarWhereInput | CustomerCustomerDemoScalarWhereInput[]
    CustomerID?: StringFilter<"CustomerCustomerDemo"> | string
    CustomerTypeID?: StringFilter<"CustomerCustomerDemo"> | string
  }

  export type TerritoriesCreateWithoutEmployeeTerritoriesInput = {
    TerritoryID: string
    TerritoryDescription: string
    Regions: RegionsCreateNestedOneWithoutTerritoriesInput
  }

  export type TerritoriesUncheckedCreateWithoutEmployeeTerritoriesInput = {
    TerritoryID: string
    TerritoryDescription: string
    RegionID: number
  }

  export type TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput = {
    where: TerritoriesWhereUniqueInput
    create: XOR<TerritoriesCreateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedCreateWithoutEmployeeTerritoriesInput>
  }

  export type EmployeesCreateWithoutEmployeeTerritoriesInput = {
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    Employees?: EmployeesCreateNestedOneWithoutOther_EmployeesInput
    other_Employees?: EmployeesCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateWithoutEmployeeTerritoriesInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    ReportsTo?: number | null
    PhotoPath?: string | null
    other_Employees?: EmployeesUncheckedCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutEmployeeTerritoriesInput, EmployeesUncheckedCreateWithoutEmployeeTerritoriesInput>
  }

  export type TerritoriesUpsertWithoutEmployeeTerritoriesInput = {
    update: XOR<TerritoriesUpdateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedUpdateWithoutEmployeeTerritoriesInput>
    create: XOR<TerritoriesCreateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedCreateWithoutEmployeeTerritoriesInput>
    where?: TerritoriesWhereInput
  }

  export type TerritoriesUpdateToOneWithWhereWithoutEmployeeTerritoriesInput = {
    where?: TerritoriesWhereInput
    data: XOR<TerritoriesUpdateWithoutEmployeeTerritoriesInput, TerritoriesUncheckedUpdateWithoutEmployeeTerritoriesInput>
  }

  export type TerritoriesUpdateWithoutEmployeeTerritoriesInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    Regions?: RegionsUpdateOneRequiredWithoutTerritoriesNestedInput
  }

  export type TerritoriesUncheckedUpdateWithoutEmployeeTerritoriesInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    RegionID?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeesUpsertWithoutEmployeeTerritoriesInput = {
    update: XOR<EmployeesUpdateWithoutEmployeeTerritoriesInput, EmployeesUncheckedUpdateWithoutEmployeeTerritoriesInput>
    create: XOR<EmployeesCreateWithoutEmployeeTerritoriesInput, EmployeesUncheckedCreateWithoutEmployeeTerritoriesInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutEmployeeTerritoriesInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutEmployeeTerritoriesInput, EmployeesUncheckedUpdateWithoutEmployeeTerritoriesInput>
  }

  export type EmployeesUpdateWithoutEmployeeTerritoriesInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    Employees?: EmployeesUpdateOneWithoutOther_EmployeesNestedInput
    other_Employees?: EmployeesUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutEmployeeTerritoriesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    other_Employees?: EmployeesUncheckedUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeeTerritoriesCreateWithoutEmployeesInput = {
    Territories: TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput
  }

  export type EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput = {
    TerritoryID: string
  }

  export type EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    create: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeTerritoriesCreateManyEmployeesInputEnvelope = {
    data: EmployeeTerritoriesCreateManyEmployeesInput | EmployeeTerritoriesCreateManyEmployeesInput[]
  }

  export type EmployeesCreateWithoutOther_EmployeesInput = {
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput
    Employees?: EmployeesCreateNestedOneWithoutOther_EmployeesInput
    Orders?: OrdersCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateWithoutOther_EmployeesInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    ReportsTo?: number | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesCreateOrConnectWithoutOther_EmployeesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutOther_EmployeesInput, EmployeesUncheckedCreateWithoutOther_EmployeesInput>
  }

  export type EmployeesCreateWithoutEmployeesInput = {
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput
    other_Employees?: EmployeesCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateWithoutEmployeesInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutEmployeesInput
    other_Employees?: EmployeesUncheckedCreateNestedManyWithoutEmployeesInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesCreateOrConnectWithoutEmployeesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesCreateManyEmployeesInputEnvelope = {
    data: EmployeesCreateManyEmployeesInput | EmployeesCreateManyEmployeesInput[]
  }

  export type OrdersCreateWithoutEmployeesInput = {
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrdersInput
    Shippers?: ShippersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutEmployeesInput = {
    OrderID?: number
    CustomerID?: string | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    ShipVia?: number | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutEmployeesInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput>
  }

  export type OrdersCreateManyEmployeesInputEnvelope = {
    data: OrdersCreateManyEmployeesInput | OrdersCreateManyEmployeesInput[]
  }

  export type EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    update: XOR<EmployeeTerritoriesUpdateWithoutEmployeesInput, EmployeeTerritoriesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EmployeeTerritoriesCreateWithoutEmployeesInput, EmployeeTerritoriesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    data: XOR<EmployeeTerritoriesUpdateWithoutEmployeesInput, EmployeeTerritoriesUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput = {
    where: EmployeeTerritoriesScalarWhereInput
    data: XOR<EmployeeTerritoriesUpdateManyMutationInput, EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeeTerritoriesScalarWhereInput = {
    AND?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
    OR?: EmployeeTerritoriesScalarWhereInput[]
    NOT?: EmployeeTerritoriesScalarWhereInput | EmployeeTerritoriesScalarWhereInput[]
    EmployeeID?: IntFilter<"EmployeeTerritories"> | number
    TerritoryID?: StringFilter<"EmployeeTerritories"> | string
  }

  export type EmployeesUpsertWithoutOther_EmployeesInput = {
    update: XOR<EmployeesUpdateWithoutOther_EmployeesInput, EmployeesUncheckedUpdateWithoutOther_EmployeesInput>
    create: XOR<EmployeesCreateWithoutOther_EmployeesInput, EmployeesUncheckedCreateWithoutOther_EmployeesInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutOther_EmployeesInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutOther_EmployeesInput, EmployeesUncheckedUpdateWithoutOther_EmployeesInput>
  }

  export type EmployeesUpdateWithoutOther_EmployeesInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput
    Employees?: EmployeesUpdateOneWithoutOther_EmployeesNestedInput
    Orders?: OrdersUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutOther_EmployeesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeesWhereUniqueInput
    update: XOR<EmployeesUpdateWithoutEmployeesInput, EmployeesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EmployeesCreateWithoutEmployeesInput, EmployeesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeesWhereUniqueInput
    data: XOR<EmployeesUpdateWithoutEmployeesInput, EmployeesUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeesUpdateManyWithWhereWithoutEmployeesInput = {
    where: EmployeesScalarWhereInput
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeesScalarWhereInput = {
    AND?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    OR?: EmployeesScalarWhereInput[]
    NOT?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    EmployeeID?: IntFilter<"Employees"> | number
    LastName?: StringNullableFilter<"Employees"> | string | null
    FirstName?: StringNullableFilter<"Employees"> | string | null
    Title?: StringNullableFilter<"Employees"> | string | null
    TitleOfCourtesy?: StringNullableFilter<"Employees"> | string | null
    BirthDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    Address?: StringNullableFilter<"Employees"> | string | null
    City?: StringNullableFilter<"Employees"> | string | null
    Region?: StringNullableFilter<"Employees"> | string | null
    PostalCode?: StringNullableFilter<"Employees"> | string | null
    Country?: StringNullableFilter<"Employees"> | string | null
    HomePhone?: StringNullableFilter<"Employees"> | string | null
    Extension?: StringNullableFilter<"Employees"> | string | null
    Photo?: BytesNullableFilter<"Employees"> | Uint8Array | null
    Notes?: StringNullableFilter<"Employees"> | string | null
    ReportsTo?: IntNullableFilter<"Employees"> | number | null
    PhotoPath?: StringNullableFilter<"Employees"> | string | null
  }

  export type OrdersUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutEmployeesInput, OrdersUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrdersCreateWithoutEmployeesInput, OrdersUncheckedCreateWithoutEmployeesInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutEmployeesInput, OrdersUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrdersUpdateManyWithWhereWithoutEmployeesInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OrderID?: IntFilter<"Orders"> | number
    CustomerID?: StringNullableFilter<"Orders"> | string | null
    EmployeeID?: IntNullableFilter<"Orders"> | number | null
    OrderDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    RequiredDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShippedDate?: DateTimeNullableFilter<"Orders"> | Date | string | null
    ShipVia?: IntNullableFilter<"Orders"> | number | null
    Freight?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    ShipName?: StringNullableFilter<"Orders"> | string | null
    ShipAddress?: StringNullableFilter<"Orders"> | string | null
    ShipCity?: StringNullableFilter<"Orders"> | string | null
    ShipRegion?: StringNullableFilter<"Orders"> | string | null
    ShipPostalCode?: StringNullableFilter<"Orders"> | string | null
    ShipCountry?: StringNullableFilter<"Orders"> | string | null
  }

  export type ProductsCreateWithoutOrder_DetailsInput = {
    ProductName: string
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Suppliers?: SuppliersCreateNestedOneWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutOrder_DetailsInput = {
    ProductID?: number
    ProductName: string
    SupplierID?: number | null
    CategoryID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
  }

  export type ProductsCreateOrConnectWithoutOrder_DetailsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrder_DetailsInput, ProductsUncheckedCreateWithoutOrder_DetailsInput>
  }

  export type OrdersCreateWithoutOrder_DetailsInput = {
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Shippers?: ShippersCreateNestedOneWithoutOrdersInput
    Employees?: EmployeesCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_DetailsInput = {
    OrderID?: number
    CustomerID?: string | null
    EmployeeID?: number | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    ShipVia?: number | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
  }

  export type OrdersCreateOrConnectWithoutOrder_DetailsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_DetailsInput, OrdersUncheckedCreateWithoutOrder_DetailsInput>
  }

  export type ProductsUpsertWithoutOrder_DetailsInput = {
    update: XOR<ProductsUpdateWithoutOrder_DetailsInput, ProductsUncheckedUpdateWithoutOrder_DetailsInput>
    create: XOR<ProductsCreateWithoutOrder_DetailsInput, ProductsUncheckedCreateWithoutOrder_DetailsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrder_DetailsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrder_DetailsInput, ProductsUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type ProductsUpdateWithoutOrder_DetailsInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Suppliers?: SuppliersUpdateOneWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrder_DetailsInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    SupplierID?: NullableIntFieldUpdateOperationsInput | number | null
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpsertWithoutOrder_DetailsInput = {
    update: XOR<OrdersUpdateWithoutOrder_DetailsInput, OrdersUncheckedUpdateWithoutOrder_DetailsInput>
    create: XOR<OrdersCreateWithoutOrder_DetailsInput, OrdersUncheckedCreateWithoutOrder_DetailsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_DetailsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_DetailsInput, OrdersUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type OrdersUpdateWithoutOrder_DetailsInput = {
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Shippers?: ShippersUpdateOneWithoutOrdersNestedInput
    Employees?: EmployeesUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_DetailsInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShipVia?: NullableIntFieldUpdateOperationsInput | number | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_DetailsCreateWithoutOrdersInput = {
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
    Products: ProductsCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutOrdersInput = {
    ProductID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsCreateOrConnectWithoutOrdersInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput>
  }

  export type Order_DetailsCreateManyOrdersInputEnvelope = {
    data: Order_DetailsCreateManyOrdersInput | Order_DetailsCreateManyOrdersInput[]
  }

  export type ShippersCreateWithoutOrdersInput = {
    CompanyName: string
    Phone?: string | null
  }

  export type ShippersUncheckedCreateWithoutOrdersInput = {
    ShipperID?: number
    CompanyName: string
    Phone?: string | null
  }

  export type ShippersCreateOrConnectWithoutOrdersInput = {
    where: ShippersWhereUniqueInput
    create: XOR<ShippersCreateWithoutOrdersInput, ShippersUncheckedCreateWithoutOrdersInput>
  }

  export type EmployeesCreateWithoutOrdersInput = {
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput
    Employees?: EmployeesCreateNestedOneWithoutOther_EmployeesInput
    other_Employees?: EmployeesCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateWithoutOrdersInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    ReportsTo?: number | null
    PhotoPath?: string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutEmployeesInput
    other_Employees?: EmployeesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesCreateOrConnectWithoutOrdersInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutOrdersInput, EmployeesUncheckedCreateWithoutOrdersInput>
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutOrdersInput, Order_DetailsUncheckedUpdateWithoutOrdersInput>
    create: XOR<Order_DetailsCreateWithoutOrdersInput, Order_DetailsUncheckedCreateWithoutOrdersInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutOrdersInput, Order_DetailsUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutOrdersInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type Order_DetailsScalarWhereInput = {
    AND?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    OR?: Order_DetailsScalarWhereInput[]
    NOT?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    OrderID?: IntFilter<"Order_Details"> | number
    ProductID?: IntFilter<"Order_Details"> | number
    UnitPrice?: DecimalFilter<"Order_Details"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Order_Details"> | number
    Discount?: FloatFilter<"Order_Details"> | number
  }

  export type ShippersUpsertWithoutOrdersInput = {
    update: XOR<ShippersUpdateWithoutOrdersInput, ShippersUncheckedUpdateWithoutOrdersInput>
    create: XOR<ShippersCreateWithoutOrdersInput, ShippersUncheckedCreateWithoutOrdersInput>
    where?: ShippersWhereInput
  }

  export type ShippersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ShippersWhereInput
    data: XOR<ShippersUpdateWithoutOrdersInput, ShippersUncheckedUpdateWithoutOrdersInput>
  }

  export type ShippersUpdateWithoutOrdersInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippersUncheckedUpdateWithoutOrdersInput = {
    ShipperID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUpsertWithoutOrdersInput = {
    update: XOR<EmployeesUpdateWithoutOrdersInput, EmployeesUncheckedUpdateWithoutOrdersInput>
    create: XOR<EmployeesCreateWithoutOrdersInput, EmployeesUncheckedCreateWithoutOrdersInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutOrdersInput, EmployeesUncheckedUpdateWithoutOrdersInput>
  }

  export type EmployeesUpdateWithoutOrdersInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput
    Employees?: EmployeesUpdateOneWithoutOther_EmployeesNestedInput
    other_Employees?: EmployeesUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutOrdersInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesNestedInput
    other_Employees?: EmployeesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type Order_DetailsCreateWithoutProductsInput = {
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
    Orders: OrdersCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutProductsInput = {
    OrderID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsCreateOrConnectWithoutProductsInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput>
  }

  export type Order_DetailsCreateManyProductsInputEnvelope = {
    data: Order_DetailsCreateManyProductsInput | Order_DetailsCreateManyProductsInput[]
  }

  export type SuppliersCreateWithoutProductsInput = {
    CompanyName: string
    ContactName?: string | null
    ContactTitle?: string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    Phone?: string | null
    Fax?: string | null
    HomePage?: string | null
  }

  export type SuppliersUncheckedCreateWithoutProductsInput = {
    SupplierID?: number
    CompanyName: string
    ContactName?: string | null
    ContactTitle?: string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    Phone?: string | null
    Fax?: string | null
    HomePage?: string | null
  }

  export type SuppliersCreateOrConnectWithoutProductsInput = {
    where: SuppliersWhereUniqueInput
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
  }

  export type CategoriesCreateWithoutProductsInput = {
    CategoryName?: string | null
    Description?: string | null
    Picture?: Uint8Array | null
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    CategoryID?: number
    CategoryName?: string | null
    Description?: string | null
    Picture?: Uint8Array | null
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutProductsInput, Order_DetailsUncheckedUpdateWithoutProductsInput>
    create: XOR<Order_DetailsCreateWithoutProductsInput, Order_DetailsUncheckedCreateWithoutProductsInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutProductsInput, Order_DetailsUncheckedUpdateWithoutProductsInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutProductsInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutProductsInput>
  }

  export type SuppliersUpsertWithoutProductsInput = {
    update: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    where?: SuppliersWhereInput
  }

  export type SuppliersUpdateToOneWithWhereWithoutProductsInput = {
    where?: SuppliersWhereInput
    data: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
  }

  export type SuppliersUpdateWithoutProductsInput = {
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuppliersUncheckedUpdateWithoutProductsInput = {
    SupplierID?: IntFieldUpdateOperationsInput | number
    CompanyName?: StringFieldUpdateOperationsInput | string
    ContactName?: NullableStringFieldUpdateOperationsInput | string | null
    ContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    HomePage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type TerritoriesCreateWithoutRegionsInput = {
    TerritoryID: string
    TerritoryDescription: string
    EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput
  }

  export type TerritoriesUncheckedCreateWithoutRegionsInput = {
    TerritoryID: string
    TerritoryDescription: string
    EmployeeTerritories?: EmployeeTerritoriesUncheckedCreateNestedManyWithoutTerritoriesInput
  }

  export type TerritoriesCreateOrConnectWithoutRegionsInput = {
    where: TerritoriesWhereUniqueInput
    create: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput>
  }

  export type TerritoriesCreateManyRegionsInputEnvelope = {
    data: TerritoriesCreateManyRegionsInput | TerritoriesCreateManyRegionsInput[]
  }

  export type TerritoriesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: TerritoriesWhereUniqueInput
    update: XOR<TerritoriesUpdateWithoutRegionsInput, TerritoriesUncheckedUpdateWithoutRegionsInput>
    create: XOR<TerritoriesCreateWithoutRegionsInput, TerritoriesUncheckedCreateWithoutRegionsInput>
  }

  export type TerritoriesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: TerritoriesWhereUniqueInput
    data: XOR<TerritoriesUpdateWithoutRegionsInput, TerritoriesUncheckedUpdateWithoutRegionsInput>
  }

  export type TerritoriesUpdateManyWithWhereWithoutRegionsInput = {
    where: TerritoriesScalarWhereInput
    data: XOR<TerritoriesUpdateManyMutationInput, TerritoriesUncheckedUpdateManyWithoutRegionsInput>
  }

  export type TerritoriesScalarWhereInput = {
    AND?: TerritoriesScalarWhereInput | TerritoriesScalarWhereInput[]
    OR?: TerritoriesScalarWhereInput[]
    NOT?: TerritoriesScalarWhereInput | TerritoriesScalarWhereInput[]
    TerritoryID?: StringFilter<"Territories"> | string
    TerritoryDescription?: StringFilter<"Territories"> | string
    RegionID?: IntFilter<"Territories"> | number
  }

  export type OrdersCreateWithoutShippersInput = {
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrdersInput
    Employees?: EmployeesCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutShippersInput = {
    OrderID?: number
    CustomerID?: string | null
    EmployeeID?: number | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutShippersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput>
  }

  export type OrdersCreateManyShippersInputEnvelope = {
    data: OrdersCreateManyShippersInput | OrdersCreateManyShippersInput[]
  }

  export type OrdersUpsertWithWhereUniqueWithoutShippersInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutShippersInput, OrdersUncheckedUpdateWithoutShippersInput>
    create: XOR<OrdersCreateWithoutShippersInput, OrdersUncheckedCreateWithoutShippersInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutShippersInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutShippersInput, OrdersUncheckedUpdateWithoutShippersInput>
  }

  export type OrdersUpdateManyWithWhereWithoutShippersInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutShippersInput>
  }

  export type ProductsCreateWithoutSuppliersInput = {
    ProductName: string
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsCreateNestedManyWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutSuppliersInput = {
    ProductID?: number
    ProductName: string
    CategoryID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutSuppliersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput>
  }

  export type ProductsCreateManySuppliersInputEnvelope = {
    data: ProductsCreateManySuppliersInput | ProductsCreateManySuppliersInput[]
  }

  export type ProductsUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSuppliersInput, ProductsUncheckedUpdateWithoutSuppliersInput>
    create: XOR<ProductsCreateWithoutSuppliersInput, ProductsUncheckedCreateWithoutSuppliersInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSuppliersInput, ProductsUncheckedUpdateWithoutSuppliersInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSuppliersInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type EmployeeTerritoriesCreateWithoutTerritoriesInput = {
    Employees: EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput
  }

  export type EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput = {
    EmployeeID: number
  }

  export type EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    create: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput>
  }

  export type EmployeeTerritoriesCreateManyTerritoriesInputEnvelope = {
    data: EmployeeTerritoriesCreateManyTerritoriesInput | EmployeeTerritoriesCreateManyTerritoriesInput[]
  }

  export type RegionsCreateWithoutTerritoriesInput = {
    RegionDescription: string
  }

  export type RegionsUncheckedCreateWithoutTerritoriesInput = {
    RegionID?: number
    RegionDescription: string
  }

  export type RegionsCreateOrConnectWithoutTerritoriesInput = {
    where: RegionsWhereUniqueInput
    create: XOR<RegionsCreateWithoutTerritoriesInput, RegionsUncheckedCreateWithoutTerritoriesInput>
  }

  export type EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    update: XOR<EmployeeTerritoriesUpdateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedUpdateWithoutTerritoriesInput>
    create: XOR<EmployeeTerritoriesCreateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedCreateWithoutTerritoriesInput>
  }

  export type EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput = {
    where: EmployeeTerritoriesWhereUniqueInput
    data: XOR<EmployeeTerritoriesUpdateWithoutTerritoriesInput, EmployeeTerritoriesUncheckedUpdateWithoutTerritoriesInput>
  }

  export type EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput = {
    where: EmployeeTerritoriesScalarWhereInput
    data: XOR<EmployeeTerritoriesUpdateManyMutationInput, EmployeeTerritoriesUncheckedUpdateManyWithoutTerritoriesInput>
  }

  export type RegionsUpsertWithoutTerritoriesInput = {
    update: XOR<RegionsUpdateWithoutTerritoriesInput, RegionsUncheckedUpdateWithoutTerritoriesInput>
    create: XOR<RegionsCreateWithoutTerritoriesInput, RegionsUncheckedCreateWithoutTerritoriesInput>
    where?: RegionsWhereInput
  }

  export type RegionsUpdateToOneWithWhereWithoutTerritoriesInput = {
    where?: RegionsWhereInput
    data: XOR<RegionsUpdateWithoutTerritoriesInput, RegionsUncheckedUpdateWithoutTerritoriesInput>
  }

  export type RegionsUpdateWithoutTerritoriesInput = {
    RegionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUncheckedUpdateWithoutTerritoriesInput = {
    RegionID?: IntFieldUpdateOperationsInput | number
    RegionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateManyCategoriesInput = {
    ProductID?: number
    ProductName: string
    SupplierID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
  }

  export type ProductsUpdateWithoutCategoriesInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUpdateManyWithoutProductsNestedInput
    Suppliers?: SuppliersUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoriesInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    SupplierID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    SupplierID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCustomerDemoCreateManyCustomerDemographicsInput = {
    CustomerID: string
  }

  export type CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput = {

  }

  export type CustomerCustomerDemoUncheckedUpdateWithoutCustomerDemographicsInput = {
    CustomerID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCustomerDemoUncheckedUpdateManyWithoutCustomerDemographicsInput = {
    CustomerID?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeTerritoriesCreateManyEmployeesInput = {
    TerritoryID: string
  }

  export type EmployeesCreateManyEmployeesInput = {
    EmployeeID?: number
    LastName?: string | null
    FirstName?: string | null
    Title?: string | null
    TitleOfCourtesy?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    Region?: string | null
    PostalCode?: string | null
    Country?: string | null
    HomePhone?: string | null
    Extension?: string | null
    Photo?: Uint8Array | null
    Notes?: string | null
    PhotoPath?: string | null
  }

  export type OrdersCreateManyEmployeesInput = {
    OrderID?: number
    CustomerID?: string | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    ShipVia?: number | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
  }

  export type EmployeeTerritoriesUpdateWithoutEmployeesInput = {
    Territories?: TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput
  }

  export type EmployeeTerritoriesUncheckedUpdateWithoutEmployeesInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesUpdateWithoutEmployeesInput = {
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput
    other_Employees?: EmployeesUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutEmployeesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutEmployeesNestedInput
    other_Employees?: EmployeesUncheckedUpdateManyWithoutEmployeesNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateManyWithoutEmployeesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    HomePhone?: NullableStringFieldUpdateOperationsInput | string | null
    Extension?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    PhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUpdateWithoutEmployeesInput = {
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrdersNestedInput
    Shippers?: ShippersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutEmployeesInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShipVia?: NullableIntFieldUpdateOperationsInput | number | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutEmployeesInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShipVia?: NullableIntFieldUpdateOperationsInput | number | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_DetailsCreateManyOrdersInput = {
    ProductID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsUpdateWithoutOrdersInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
    Products?: ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutOrdersInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrdersInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type Order_DetailsCreateManyProductsInput = {
    OrderID: number
    UnitPrice?: Decimal | DecimalJsLike | number | string
    Quantity?: number
    Discount?: number
  }

  export type Order_DetailsUpdateWithoutProductsInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
    Orders?: OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutProductsInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutProductsInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Discount?: FloatFieldUpdateOperationsInput | number
  }

  export type TerritoriesCreateManyRegionsInput = {
    TerritoryID: string
    TerritoryDescription: string
  }

  export type TerritoriesUpdateWithoutRegionsInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput
  }

  export type TerritoriesUncheckedUpdateWithoutRegionsInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
    EmployeeTerritories?: EmployeeTerritoriesUncheckedUpdateManyWithoutTerritoriesNestedInput
  }

  export type TerritoriesUncheckedUpdateManyWithoutRegionsInput = {
    TerritoryID?: StringFieldUpdateOperationsInput | string
    TerritoryDescription?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateManyShippersInput = {
    OrderID?: number
    CustomerID?: string | null
    EmployeeID?: number | null
    OrderDate?: Date | string | null
    RequiredDate?: Date | string | null
    ShippedDate?: Date | string | null
    Freight?: Decimal | DecimalJsLike | number | string | null
    ShipName?: string | null
    ShipAddress?: string | null
    ShipCity?: string | null
    ShipRegion?: string | null
    ShipPostalCode?: string | null
    ShipCountry?: string | null
  }

  export type OrdersUpdateWithoutShippersInput = {
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrdersNestedInput
    Employees?: EmployeesUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutShippersInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutShippersInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableStringFieldUpdateOperationsInput | string | null
    EmployeeID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Freight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ShipName?: NullableStringFieldUpdateOperationsInput | string | null
    ShipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCity?: NullableStringFieldUpdateOperationsInput | string | null
    ShipRegion?: NullableStringFieldUpdateOperationsInput | string | null
    ShipPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShipCountry?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateManySuppliersInput = {
    ProductID?: number
    ProductName: string
    CategoryID?: number | null
    QuantityPerUnit?: string | null
    UnitPrice?: Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: number | null
    UnitsOnOrder?: number | null
    ReorderLevel?: number | null
    Discontinued?: string
  }

  export type ProductsUpdateWithoutSuppliersInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUpdateManyWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSuppliersInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutSuppliersInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | string | null
    UnitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitsInStock?: NullableIntFieldUpdateOperationsInput | number | null
    UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | number | null
    ReorderLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Discontinued?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeTerritoriesCreateManyTerritoriesInput = {
    EmployeeID: number
  }

  export type EmployeeTerritoriesUpdateWithoutTerritoriesInput = {
    Employees?: EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput
  }

  export type EmployeeTerritoriesUncheckedUpdateWithoutTerritoriesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTerritoriesUncheckedUpdateManyWithoutTerritoriesInput = {
    EmployeeID?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}