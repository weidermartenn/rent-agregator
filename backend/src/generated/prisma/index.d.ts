
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model ListingPhoto
 * 
 */
export type ListingPhoto = $Result.DefaultSelection<Prisma.$ListingPhotoPayload>
/**
 * Model ViewingRequest
 * 
 */
export type ViewingRequest = $Result.DefaultSelection<Prisma.$ViewingRequestPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model ListingView
 * 
 */
export type ListingView = $Result.DefaultSelection<Prisma.$ListingViewPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ListingStatus: {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  ACTIVE: 'ACTIVE',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const PropertyType: {
  APARTMENT: 'APARTMENT',
  ROOM: 'ROOM',
  HOUSE: 'HOUSE',
  STUDIO: 'STUDIO',
  COMMERCIAL: 'COMMERCIAL'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const ViewingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  DECLINED: 'DECLINED',
  CANCELLED: 'CANCELLED'
};

export type ViewingStatus = (typeof ViewingStatus)[keyof typeof ViewingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type ViewingStatus = $Enums.ViewingStatus

export const ViewingStatus: typeof $Enums.ViewingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingPhoto`: Exposes CRUD operations for the **ListingPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingPhotos
    * const listingPhotos = await prisma.listingPhoto.findMany()
    * ```
    */
  get listingPhoto(): Prisma.ListingPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewingRequest`: Exposes CRUD operations for the **ViewingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewingRequests
    * const viewingRequests = await prisma.viewingRequest.findMany()
    * ```
    */
  get viewingRequest(): Prisma.ViewingRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingView`: Exposes CRUD operations for the **ListingView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingViews
    * const listingViews = await prisma.listingView.findMany()
    * ```
    */
  get listingView(): Prisma.ListingViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Listing: 'Listing',
    ListingPhoto: 'ListingPhoto',
    ViewingRequest: 'ViewingRequest',
    Favorite: 'Favorite',
    ListingView: 'ListingView',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "listing" | "listingPhoto" | "viewingRequest" | "favorite" | "listingView" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      ListingPhoto: {
        payload: Prisma.$ListingPhotoPayload<ExtArgs>
        fields: Prisma.ListingPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          findFirst: {
            args: Prisma.ListingPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          findMany: {
            args: Prisma.ListingPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>[]
          }
          create: {
            args: Prisma.ListingPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          createMany: {
            args: Prisma.ListingPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>[]
          }
          delete: {
            args: Prisma.ListingPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          update: {
            args: Prisma.ListingPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ListingPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>[]
          }
          upsert: {
            args: Prisma.ListingPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPhotoPayload>
          }
          aggregate: {
            args: Prisma.ListingPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingPhoto>
          }
          groupBy: {
            args: Prisma.ListingPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ListingPhotoCountAggregateOutputType> | number
          }
        }
      }
      ViewingRequest: {
        payload: Prisma.$ViewingRequestPayload<ExtArgs>
        fields: Prisma.ViewingRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewingRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewingRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          findFirst: {
            args: Prisma.ViewingRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewingRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          findMany: {
            args: Prisma.ViewingRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>[]
          }
          create: {
            args: Prisma.ViewingRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          createMany: {
            args: Prisma.ViewingRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewingRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>[]
          }
          delete: {
            args: Prisma.ViewingRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          update: {
            args: Prisma.ViewingRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          deleteMany: {
            args: Prisma.ViewingRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewingRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewingRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>[]
          }
          upsert: {
            args: Prisma.ViewingRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewingRequestPayload>
          }
          aggregate: {
            args: Prisma.ViewingRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewingRequest>
          }
          groupBy: {
            args: Prisma.ViewingRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewingRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewingRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ViewingRequestCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      ListingView: {
        payload: Prisma.$ListingViewPayload<ExtArgs>
        fields: Prisma.ListingViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          findFirst: {
            args: Prisma.ListingViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          findMany: {
            args: Prisma.ListingViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          create: {
            args: Prisma.ListingViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          createMany: {
            args: Prisma.ListingViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          delete: {
            args: Prisma.ListingViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          update: {
            args: Prisma.ListingViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          deleteMany: {
            args: Prisma.ListingViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          upsert: {
            args: Prisma.ListingViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          aggregate: {
            args: Prisma.ListingViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingView>
          }
          groupBy: {
            args: Prisma.ListingViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingViewCountArgs<ExtArgs>
            result: $Utils.Optional<ListingViewCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    listing?: ListingOmit
    listingPhoto?: ListingPhotoOmit
    viewingRequest?: ViewingRequestOmit
    favorite?: FavoriteOmit
    listingView?: ListingViewOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listings: number
    viewingRequests: number
    favorited: number
    views: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    viewingRequests?: boolean | UserCountOutputTypeCountViewingRequestsArgs
    favorited?: boolean | UserCountOutputTypeCountFavoritedArgs
    views?: boolean | UserCountOutputTypeCountViewsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewingRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    photos: number
    viewingRequests: number
    favorites: number
    views: number
    messages: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | ListingCountOutputTypeCountPhotosArgs
    viewingRequests?: boolean | ListingCountOutputTypeCountViewingRequestsArgs
    favorites?: boolean | ListingCountOutputTypeCountFavoritesArgs
    views?: boolean | ListingCountOutputTypeCountViewsArgs
    messages?: boolean | ListingCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingPhotoWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountViewingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewingRequestWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingViewWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    city: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    city: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    firstName: number
    lastName: number
    avatarUrl: number
    city: number
    role: number
    isVerified: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    city?: true
    role?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    city?: true
    role?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    city?: true
    role?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    city: string | null
    role: $Enums.Role
    isVerified: boolean
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    city?: boolean
    role?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    viewingRequests?: boolean | User$viewingRequestsArgs<ExtArgs>
    favorited?: boolean | User$favoritedArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    city?: boolean
    role?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    city?: boolean
    role?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    city?: boolean
    role?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "firstName" | "lastName" | "avatarUrl" | "city" | "role" | "isVerified" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    viewingRequests?: boolean | User$viewingRequestsArgs<ExtArgs>
    favorited?: boolean | User$favoritedArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
      viewingRequests: Prisma.$ViewingRequestPayload<ExtArgs>[]
      favorited: Prisma.$FavoritePayload<ExtArgs>[]
      views: Prisma.$ListingViewPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      firstName: string | null
      lastName: string | null
      avatarUrl: string | null
      city: string | null
      role: $Enums.Role
      isVerified: boolean
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewingRequests<T extends User$viewingRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorited<T extends User$favoritedArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends User$viewsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.viewingRequests
   */
  export type User$viewingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    where?: ViewingRequestWhereInput
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    cursor?: ViewingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewingRequestScalarFieldEnum | ViewingRequestScalarFieldEnum[]
  }

  /**
   * User.favorited
   */
  export type User$favoritedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.views
   */
  export type User$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    where?: ListingViewWhereInput
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    cursor?: ListingViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    rooms: number | null
    area: Decimal | null
    priceMonth: Decimal | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type ListingSumAggregateOutputType = {
    rooms: number | null
    area: Decimal | null
    priceMonth: Decimal | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    landlordId: string | null
    title: string | null
    description: string | null
    status: $Enums.ListingStatus | null
    propertyType: $Enums.PropertyType | null
    rooms: number | null
    area: Decimal | null
    priceMonth: Decimal | null
    city: string | null
    lat: Decimal | null
    lng: Decimal | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    landlordId: string | null
    title: string | null
    description: string | null
    status: $Enums.ListingStatus | null
    propertyType: $Enums.PropertyType | null
    rooms: number | null
    area: Decimal | null
    priceMonth: Decimal | null
    city: string | null
    lat: Decimal | null
    lng: Decimal | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    landlordId: number
    title: number
    description: number
    status: number
    propertyType: number
    rooms: number
    area: number
    priceMonth: number
    city: number
    lat: number
    lng: number
    isVerified: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    rooms?: true
    area?: true
    priceMonth?: true
    lat?: true
    lng?: true
  }

  export type ListingSumAggregateInputType = {
    rooms?: true
    area?: true
    priceMonth?: true
    lat?: true
    lng?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    status?: true
    propertyType?: true
    rooms?: true
    area?: true
    priceMonth?: true
    city?: true
    lat?: true
    lng?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    status?: true
    propertyType?: true
    rooms?: true
    area?: true
    priceMonth?: true
    city?: true
    lat?: true
    lng?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    status?: true
    propertyType?: true
    rooms?: true
    area?: true
    priceMonth?: true
    city?: true
    lat?: true
    lng?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    landlordId: string
    title: string
    description: string | null
    status: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms: number | null
    area: Decimal
    priceMonth: Decimal
    city: string
    lat: Decimal
    lng: Decimal
    isVerified: boolean
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    propertyType?: boolean
    rooms?: boolean
    area?: boolean
    priceMonth?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | Listing$photosArgs<ExtArgs>
    viewingRequests?: boolean | Listing$viewingRequestsArgs<ExtArgs>
    favorites?: boolean | Listing$favoritesArgs<ExtArgs>
    views?: boolean | Listing$viewsArgs<ExtArgs>
    messages?: boolean | Listing$messagesArgs<ExtArgs>
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    propertyType?: boolean
    rooms?: boolean
    area?: boolean
    priceMonth?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlord?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    propertyType?: boolean
    rooms?: boolean
    area?: boolean
    priceMonth?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlord?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    propertyType?: boolean
    rooms?: boolean
    area?: boolean
    priceMonth?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "landlordId" | "title" | "description" | "status" | "propertyType" | "rooms" | "area" | "priceMonth" | "city" | "lat" | "lng" | "isVerified" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Listing$photosArgs<ExtArgs>
    viewingRequests?: boolean | Listing$viewingRequestsArgs<ExtArgs>
    favorites?: boolean | Listing$favoritesArgs<ExtArgs>
    views?: boolean | Listing$viewsArgs<ExtArgs>
    messages?: boolean | Listing$messagesArgs<ExtArgs>
    landlord?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      photos: Prisma.$ListingPhotoPayload<ExtArgs>[]
      viewingRequests: Prisma.$ViewingRequestPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      views: Prisma.$ListingViewPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      landlord: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      landlordId: string
      title: string
      description: string | null
      status: $Enums.ListingStatus
      propertyType: $Enums.PropertyType
      rooms: number | null
      area: Prisma.Decimal
      priceMonth: Prisma.Decimal
      city: string
      lat: Prisma.Decimal
      lng: Prisma.Decimal
      isVerified: boolean
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Listing$photosArgs<ExtArgs> = {}>(args?: Subset<T, Listing$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewingRequests<T extends Listing$viewingRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$viewingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Listing$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Listing$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Listing$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    landlord<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly landlordId: FieldRef<"Listing", 'String'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly propertyType: FieldRef<"Listing", 'PropertyType'>
    readonly rooms: FieldRef<"Listing", 'Int'>
    readonly area: FieldRef<"Listing", 'Decimal'>
    readonly priceMonth: FieldRef<"Listing", 'Decimal'>
    readonly city: FieldRef<"Listing", 'String'>
    readonly lat: FieldRef<"Listing", 'Decimal'>
    readonly lng: FieldRef<"Listing", 'Decimal'>
    readonly isVerified: FieldRef<"Listing", 'Boolean'>
    readonly verifiedAt: FieldRef<"Listing", 'DateTime'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.photos
   */
  export type Listing$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    where?: ListingPhotoWhereInput
    orderBy?: ListingPhotoOrderByWithRelationInput | ListingPhotoOrderByWithRelationInput[]
    cursor?: ListingPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingPhotoScalarFieldEnum | ListingPhotoScalarFieldEnum[]
  }

  /**
   * Listing.viewingRequests
   */
  export type Listing$viewingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    where?: ViewingRequestWhereInput
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    cursor?: ViewingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewingRequestScalarFieldEnum | ViewingRequestScalarFieldEnum[]
  }

  /**
   * Listing.favorites
   */
  export type Listing$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Listing.views
   */
  export type Listing$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    where?: ListingViewWhereInput
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    cursor?: ListingViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * Listing.messages
   */
  export type Listing$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model ListingPhoto
   */

  export type AggregateListingPhoto = {
    _count: ListingPhotoCountAggregateOutputType | null
    _avg: ListingPhotoAvgAggregateOutputType | null
    _sum: ListingPhotoSumAggregateOutputType | null
    _min: ListingPhotoMinAggregateOutputType | null
    _max: ListingPhotoMaxAggregateOutputType | null
  }

  export type ListingPhotoAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ListingPhotoSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ListingPhotoMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    url: string | null
    sortOrder: number | null
  }

  export type ListingPhotoMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    url: string | null
    sortOrder: number | null
  }

  export type ListingPhotoCountAggregateOutputType = {
    id: number
    listingId: number
    url: number
    sortOrder: number
    _all: number
  }


  export type ListingPhotoAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ListingPhotoSumAggregateInputType = {
    sortOrder?: true
  }

  export type ListingPhotoMinAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    sortOrder?: true
  }

  export type ListingPhotoMaxAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    sortOrder?: true
  }

  export type ListingPhotoCountAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    sortOrder?: true
    _all?: true
  }

  export type ListingPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingPhoto to aggregate.
     */
    where?: ListingPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingPhotos to fetch.
     */
    orderBy?: ListingPhotoOrderByWithRelationInput | ListingPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingPhotos
    **/
    _count?: true | ListingPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingPhotoMaxAggregateInputType
  }

  export type GetListingPhotoAggregateType<T extends ListingPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateListingPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingPhoto[P]>
      : GetScalarType<T[P], AggregateListingPhoto[P]>
  }




  export type ListingPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingPhotoWhereInput
    orderBy?: ListingPhotoOrderByWithAggregationInput | ListingPhotoOrderByWithAggregationInput[]
    by: ListingPhotoScalarFieldEnum[] | ListingPhotoScalarFieldEnum
    having?: ListingPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingPhotoCountAggregateInputType | true
    _avg?: ListingPhotoAvgAggregateInputType
    _sum?: ListingPhotoSumAggregateInputType
    _min?: ListingPhotoMinAggregateInputType
    _max?: ListingPhotoMaxAggregateInputType
  }

  export type ListingPhotoGroupByOutputType = {
    id: string
    listingId: string
    url: string
    sortOrder: number
    _count: ListingPhotoCountAggregateOutputType | null
    _avg: ListingPhotoAvgAggregateOutputType | null
    _sum: ListingPhotoSumAggregateOutputType | null
    _min: ListingPhotoMinAggregateOutputType | null
    _max: ListingPhotoMaxAggregateOutputType | null
  }

  type GetListingPhotoGroupByPayload<T extends ListingPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ListingPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ListingPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    sortOrder?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingPhoto"]>

  export type ListingPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    sortOrder?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingPhoto"]>

  export type ListingPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    sortOrder?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingPhoto"]>

  export type ListingPhotoSelectScalar = {
    id?: boolean
    listingId?: boolean
    url?: boolean
    sortOrder?: boolean
  }

  export type ListingPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "url" | "sortOrder", ExtArgs["result"]["listingPhoto"]>
  export type ListingPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ListingPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ListingPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $ListingPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingPhoto"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      url: string
      sortOrder: number
    }, ExtArgs["result"]["listingPhoto"]>
    composites: {}
  }

  type ListingPhotoGetPayload<S extends boolean | null | undefined | ListingPhotoDefaultArgs> = $Result.GetResult<Prisma.$ListingPhotoPayload, S>

  type ListingPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingPhotoCountAggregateInputType | true
    }

  export interface ListingPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingPhoto'], meta: { name: 'ListingPhoto' } }
    /**
     * Find zero or one ListingPhoto that matches the filter.
     * @param {ListingPhotoFindUniqueArgs} args - Arguments to find a ListingPhoto
     * @example
     * // Get one ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingPhotoFindUniqueArgs>(args: SelectSubset<T, ListingPhotoFindUniqueArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingPhotoFindUniqueOrThrowArgs} args - Arguments to find a ListingPhoto
     * @example
     * // Get one ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoFindFirstArgs} args - Arguments to find a ListingPhoto
     * @example
     * // Get one ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingPhotoFindFirstArgs>(args?: SelectSubset<T, ListingPhotoFindFirstArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoFindFirstOrThrowArgs} args - Arguments to find a ListingPhoto
     * @example
     * // Get one ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingPhotos
     * const listingPhotos = await prisma.listingPhoto.findMany()
     * 
     * // Get first 10 ListingPhotos
     * const listingPhotos = await prisma.listingPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingPhotoWithIdOnly = await prisma.listingPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingPhotoFindManyArgs>(args?: SelectSubset<T, ListingPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingPhoto.
     * @param {ListingPhotoCreateArgs} args - Arguments to create a ListingPhoto.
     * @example
     * // Create one ListingPhoto
     * const ListingPhoto = await prisma.listingPhoto.create({
     *   data: {
     *     // ... data to create a ListingPhoto
     *   }
     * })
     * 
     */
    create<T extends ListingPhotoCreateArgs>(args: SelectSubset<T, ListingPhotoCreateArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingPhotos.
     * @param {ListingPhotoCreateManyArgs} args - Arguments to create many ListingPhotos.
     * @example
     * // Create many ListingPhotos
     * const listingPhoto = await prisma.listingPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingPhotoCreateManyArgs>(args?: SelectSubset<T, ListingPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingPhotos and returns the data saved in the database.
     * @param {ListingPhotoCreateManyAndReturnArgs} args - Arguments to create many ListingPhotos.
     * @example
     * // Create many ListingPhotos
     * const listingPhoto = await prisma.listingPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingPhotos and only return the `id`
     * const listingPhotoWithIdOnly = await prisma.listingPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingPhoto.
     * @param {ListingPhotoDeleteArgs} args - Arguments to delete one ListingPhoto.
     * @example
     * // Delete one ListingPhoto
     * const ListingPhoto = await prisma.listingPhoto.delete({
     *   where: {
     *     // ... filter to delete one ListingPhoto
     *   }
     * })
     * 
     */
    delete<T extends ListingPhotoDeleteArgs>(args: SelectSubset<T, ListingPhotoDeleteArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingPhoto.
     * @param {ListingPhotoUpdateArgs} args - Arguments to update one ListingPhoto.
     * @example
     * // Update one ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingPhotoUpdateArgs>(args: SelectSubset<T, ListingPhotoUpdateArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingPhotos.
     * @param {ListingPhotoDeleteManyArgs} args - Arguments to filter ListingPhotos to delete.
     * @example
     * // Delete a few ListingPhotos
     * const { count } = await prisma.listingPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingPhotoDeleteManyArgs>(args?: SelectSubset<T, ListingPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingPhotos
     * const listingPhoto = await prisma.listingPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingPhotoUpdateManyArgs>(args: SelectSubset<T, ListingPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingPhotos and returns the data updated in the database.
     * @param {ListingPhotoUpdateManyAndReturnArgs} args - Arguments to update many ListingPhotos.
     * @example
     * // Update many ListingPhotos
     * const listingPhoto = await prisma.listingPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingPhotos and only return the `id`
     * const listingPhotoWithIdOnly = await prisma.listingPhoto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ListingPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingPhoto.
     * @param {ListingPhotoUpsertArgs} args - Arguments to update or create a ListingPhoto.
     * @example
     * // Update or create a ListingPhoto
     * const listingPhoto = await prisma.listingPhoto.upsert({
     *   create: {
     *     // ... data to create a ListingPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ListingPhotoUpsertArgs>(args: SelectSubset<T, ListingPhotoUpsertArgs<ExtArgs>>): Prisma__ListingPhotoClient<$Result.GetResult<Prisma.$ListingPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoCountArgs} args - Arguments to filter ListingPhotos to count.
     * @example
     * // Count the number of ListingPhotos
     * const count = await prisma.listingPhoto.count({
     *   where: {
     *     // ... the filter for the ListingPhotos we want to count
     *   }
     * })
    **/
    count<T extends ListingPhotoCountArgs>(
      args?: Subset<T, ListingPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingPhotoAggregateArgs>(args: Subset<T, ListingPhotoAggregateArgs>): Prisma.PrismaPromise<GetListingPhotoAggregateType<T>>

    /**
     * Group by ListingPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingPhotoGroupByArgs} args - Group by arguments.
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
      T extends ListingPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ListingPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingPhoto model
   */
  readonly fields: ListingPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListingPhoto model
   */
  interface ListingPhotoFieldRefs {
    readonly id: FieldRef<"ListingPhoto", 'String'>
    readonly listingId: FieldRef<"ListingPhoto", 'String'>
    readonly url: FieldRef<"ListingPhoto", 'String'>
    readonly sortOrder: FieldRef<"ListingPhoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListingPhoto findUnique
   */
  export type ListingPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ListingPhoto to fetch.
     */
    where: ListingPhotoWhereUniqueInput
  }

  /**
   * ListingPhoto findUniqueOrThrow
   */
  export type ListingPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ListingPhoto to fetch.
     */
    where: ListingPhotoWhereUniqueInput
  }

  /**
   * ListingPhoto findFirst
   */
  export type ListingPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ListingPhoto to fetch.
     */
    where?: ListingPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingPhotos to fetch.
     */
    orderBy?: ListingPhotoOrderByWithRelationInput | ListingPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingPhotos.
     */
    cursor?: ListingPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingPhotos.
     */
    distinct?: ListingPhotoScalarFieldEnum | ListingPhotoScalarFieldEnum[]
  }

  /**
   * ListingPhoto findFirstOrThrow
   */
  export type ListingPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ListingPhoto to fetch.
     */
    where?: ListingPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingPhotos to fetch.
     */
    orderBy?: ListingPhotoOrderByWithRelationInput | ListingPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingPhotos.
     */
    cursor?: ListingPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingPhotos.
     */
    distinct?: ListingPhotoScalarFieldEnum | ListingPhotoScalarFieldEnum[]
  }

  /**
   * ListingPhoto findMany
   */
  export type ListingPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ListingPhotos to fetch.
     */
    where?: ListingPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingPhotos to fetch.
     */
    orderBy?: ListingPhotoOrderByWithRelationInput | ListingPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingPhotos.
     */
    cursor?: ListingPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingPhotos.
     */
    distinct?: ListingPhotoScalarFieldEnum | ListingPhotoScalarFieldEnum[]
  }

  /**
   * ListingPhoto create
   */
  export type ListingPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingPhoto.
     */
    data: XOR<ListingPhotoCreateInput, ListingPhotoUncheckedCreateInput>
  }

  /**
   * ListingPhoto createMany
   */
  export type ListingPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingPhotos.
     */
    data: ListingPhotoCreateManyInput | ListingPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingPhoto createManyAndReturn
   */
  export type ListingPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ListingPhotos.
     */
    data: ListingPhotoCreateManyInput | ListingPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingPhoto update
   */
  export type ListingPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingPhoto.
     */
    data: XOR<ListingPhotoUpdateInput, ListingPhotoUncheckedUpdateInput>
    /**
     * Choose, which ListingPhoto to update.
     */
    where: ListingPhotoWhereUniqueInput
  }

  /**
   * ListingPhoto updateMany
   */
  export type ListingPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingPhotos.
     */
    data: XOR<ListingPhotoUpdateManyMutationInput, ListingPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ListingPhotos to update
     */
    where?: ListingPhotoWhereInput
    /**
     * Limit how many ListingPhotos to update.
     */
    limit?: number
  }

  /**
   * ListingPhoto updateManyAndReturn
   */
  export type ListingPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * The data used to update ListingPhotos.
     */
    data: XOR<ListingPhotoUpdateManyMutationInput, ListingPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ListingPhotos to update
     */
    where?: ListingPhotoWhereInput
    /**
     * Limit how many ListingPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingPhoto upsert
   */
  export type ListingPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingPhoto to update in case it exists.
     */
    where: ListingPhotoWhereUniqueInput
    /**
     * In case the ListingPhoto found by the `where` argument doesn't exist, create a new ListingPhoto with this data.
     */
    create: XOR<ListingPhotoCreateInput, ListingPhotoUncheckedCreateInput>
    /**
     * In case the ListingPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingPhotoUpdateInput, ListingPhotoUncheckedUpdateInput>
  }

  /**
   * ListingPhoto delete
   */
  export type ListingPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
    /**
     * Filter which ListingPhoto to delete.
     */
    where: ListingPhotoWhereUniqueInput
  }

  /**
   * ListingPhoto deleteMany
   */
  export type ListingPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingPhotos to delete
     */
    where?: ListingPhotoWhereInput
    /**
     * Limit how many ListingPhotos to delete.
     */
    limit?: number
  }

  /**
   * ListingPhoto without action
   */
  export type ListingPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingPhoto
     */
    select?: ListingPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingPhoto
     */
    omit?: ListingPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingPhotoInclude<ExtArgs> | null
  }


  /**
   * Model ViewingRequest
   */

  export type AggregateViewingRequest = {
    _count: ViewingRequestCountAggregateOutputType | null
    _min: ViewingRequestMinAggregateOutputType | null
    _max: ViewingRequestMaxAggregateOutputType | null
  }

  export type ViewingRequestMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    tenantId: string | null
    status: $Enums.ViewingStatus | null
    message: string | null
    requestedAt: Date | null
    updatedAt: Date | null
  }

  export type ViewingRequestMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    tenantId: string | null
    status: $Enums.ViewingStatus | null
    message: string | null
    requestedAt: Date | null
    updatedAt: Date | null
  }

  export type ViewingRequestCountAggregateOutputType = {
    id: number
    listingId: number
    tenantId: number
    status: number
    message: number
    requestedAt: number
    updatedAt: number
    _all: number
  }


  export type ViewingRequestMinAggregateInputType = {
    id?: true
    listingId?: true
    tenantId?: true
    status?: true
    message?: true
    requestedAt?: true
    updatedAt?: true
  }

  export type ViewingRequestMaxAggregateInputType = {
    id?: true
    listingId?: true
    tenantId?: true
    status?: true
    message?: true
    requestedAt?: true
    updatedAt?: true
  }

  export type ViewingRequestCountAggregateInputType = {
    id?: true
    listingId?: true
    tenantId?: true
    status?: true
    message?: true
    requestedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ViewingRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewingRequest to aggregate.
     */
    where?: ViewingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewingRequests to fetch.
     */
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewingRequests
    **/
    _count?: true | ViewingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewingRequestMaxAggregateInputType
  }

  export type GetViewingRequestAggregateType<T extends ViewingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateViewingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewingRequest[P]>
      : GetScalarType<T[P], AggregateViewingRequest[P]>
  }




  export type ViewingRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewingRequestWhereInput
    orderBy?: ViewingRequestOrderByWithAggregationInput | ViewingRequestOrderByWithAggregationInput[]
    by: ViewingRequestScalarFieldEnum[] | ViewingRequestScalarFieldEnum
    having?: ViewingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewingRequestCountAggregateInputType | true
    _min?: ViewingRequestMinAggregateInputType
    _max?: ViewingRequestMaxAggregateInputType
  }

  export type ViewingRequestGroupByOutputType = {
    id: string
    listingId: string | null
    tenantId: string | null
    status: $Enums.ViewingStatus
    message: string | null
    requestedAt: Date
    updatedAt: Date
    _count: ViewingRequestCountAggregateOutputType | null
    _min: ViewingRequestMinAggregateOutputType | null
    _max: ViewingRequestMaxAggregateOutputType | null
  }

  type GetViewingRequestGroupByPayload<T extends ViewingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ViewingRequestGroupByOutputType[P]>
        }
      >
    >


  export type ViewingRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    tenantId?: boolean
    status?: boolean
    message?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["viewingRequest"]>

  export type ViewingRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    tenantId?: boolean
    status?: boolean
    message?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["viewingRequest"]>

  export type ViewingRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    tenantId?: boolean
    status?: boolean
    message?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["viewingRequest"]>

  export type ViewingRequestSelectScalar = {
    id?: boolean
    listingId?: boolean
    tenantId?: boolean
    status?: boolean
    message?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
  }

  export type ViewingRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "tenantId" | "status" | "message" | "requestedAt" | "updatedAt", ExtArgs["result"]["viewingRequest"]>
  export type ViewingRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }
  export type ViewingRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }
  export type ViewingRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ViewingRequest$listingArgs<ExtArgs>
    tenant?: boolean | ViewingRequest$tenantArgs<ExtArgs>
  }

  export type $ViewingRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewingRequest"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs> | null
      tenant: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string | null
      tenantId: string | null
      status: $Enums.ViewingStatus
      message: string | null
      requestedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["viewingRequest"]>
    composites: {}
  }

  type ViewingRequestGetPayload<S extends boolean | null | undefined | ViewingRequestDefaultArgs> = $Result.GetResult<Prisma.$ViewingRequestPayload, S>

  type ViewingRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewingRequestCountAggregateInputType | true
    }

  export interface ViewingRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewingRequest'], meta: { name: 'ViewingRequest' } }
    /**
     * Find zero or one ViewingRequest that matches the filter.
     * @param {ViewingRequestFindUniqueArgs} args - Arguments to find a ViewingRequest
     * @example
     * // Get one ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewingRequestFindUniqueArgs>(args: SelectSubset<T, ViewingRequestFindUniqueArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewingRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewingRequestFindUniqueOrThrowArgs} args - Arguments to find a ViewingRequest
     * @example
     * // Get one ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewingRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestFindFirstArgs} args - Arguments to find a ViewingRequest
     * @example
     * // Get one ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewingRequestFindFirstArgs>(args?: SelectSubset<T, ViewingRequestFindFirstArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestFindFirstOrThrowArgs} args - Arguments to find a ViewingRequest
     * @example
     * // Get one ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewingRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewingRequests
     * const viewingRequests = await prisma.viewingRequest.findMany()
     * 
     * // Get first 10 ViewingRequests
     * const viewingRequests = await prisma.viewingRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewingRequestWithIdOnly = await prisma.viewingRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewingRequestFindManyArgs>(args?: SelectSubset<T, ViewingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewingRequest.
     * @param {ViewingRequestCreateArgs} args - Arguments to create a ViewingRequest.
     * @example
     * // Create one ViewingRequest
     * const ViewingRequest = await prisma.viewingRequest.create({
     *   data: {
     *     // ... data to create a ViewingRequest
     *   }
     * })
     * 
     */
    create<T extends ViewingRequestCreateArgs>(args: SelectSubset<T, ViewingRequestCreateArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewingRequests.
     * @param {ViewingRequestCreateManyArgs} args - Arguments to create many ViewingRequests.
     * @example
     * // Create many ViewingRequests
     * const viewingRequest = await prisma.viewingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewingRequestCreateManyArgs>(args?: SelectSubset<T, ViewingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewingRequests and returns the data saved in the database.
     * @param {ViewingRequestCreateManyAndReturnArgs} args - Arguments to create many ViewingRequests.
     * @example
     * // Create many ViewingRequests
     * const viewingRequest = await prisma.viewingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewingRequests and only return the `id`
     * const viewingRequestWithIdOnly = await prisma.viewingRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewingRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewingRequest.
     * @param {ViewingRequestDeleteArgs} args - Arguments to delete one ViewingRequest.
     * @example
     * // Delete one ViewingRequest
     * const ViewingRequest = await prisma.viewingRequest.delete({
     *   where: {
     *     // ... filter to delete one ViewingRequest
     *   }
     * })
     * 
     */
    delete<T extends ViewingRequestDeleteArgs>(args: SelectSubset<T, ViewingRequestDeleteArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewingRequest.
     * @param {ViewingRequestUpdateArgs} args - Arguments to update one ViewingRequest.
     * @example
     * // Update one ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewingRequestUpdateArgs>(args: SelectSubset<T, ViewingRequestUpdateArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewingRequests.
     * @param {ViewingRequestDeleteManyArgs} args - Arguments to filter ViewingRequests to delete.
     * @example
     * // Delete a few ViewingRequests
     * const { count } = await prisma.viewingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewingRequestDeleteManyArgs>(args?: SelectSubset<T, ViewingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewingRequests
     * const viewingRequest = await prisma.viewingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewingRequestUpdateManyArgs>(args: SelectSubset<T, ViewingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewingRequests and returns the data updated in the database.
     * @param {ViewingRequestUpdateManyAndReturnArgs} args - Arguments to update many ViewingRequests.
     * @example
     * // Update many ViewingRequests
     * const viewingRequest = await prisma.viewingRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewingRequests and only return the `id`
     * const viewingRequestWithIdOnly = await prisma.viewingRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ViewingRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewingRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewingRequest.
     * @param {ViewingRequestUpsertArgs} args - Arguments to update or create a ViewingRequest.
     * @example
     * // Update or create a ViewingRequest
     * const viewingRequest = await prisma.viewingRequest.upsert({
     *   create: {
     *     // ... data to create a ViewingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewingRequest we want to update
     *   }
     * })
     */
    upsert<T extends ViewingRequestUpsertArgs>(args: SelectSubset<T, ViewingRequestUpsertArgs<ExtArgs>>): Prisma__ViewingRequestClient<$Result.GetResult<Prisma.$ViewingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestCountArgs} args - Arguments to filter ViewingRequests to count.
     * @example
     * // Count the number of ViewingRequests
     * const count = await prisma.viewingRequest.count({
     *   where: {
     *     // ... the filter for the ViewingRequests we want to count
     *   }
     * })
    **/
    count<T extends ViewingRequestCountArgs>(
      args?: Subset<T, ViewingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewingRequestAggregateArgs>(args: Subset<T, ViewingRequestAggregateArgs>): Prisma.PrismaPromise<GetViewingRequestAggregateType<T>>

    /**
     * Group by ViewingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewingRequestGroupByArgs} args - Group by arguments.
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
      T extends ViewingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewingRequestGroupByArgs['orderBy'] }
        : { orderBy?: ViewingRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewingRequest model
   */
  readonly fields: ViewingRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewingRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ViewingRequest$listingArgs<ExtArgs> = {}>(args?: Subset<T, ViewingRequest$listingArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tenant<T extends ViewingRequest$tenantArgs<ExtArgs> = {}>(args?: Subset<T, ViewingRequest$tenantArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ViewingRequest model
   */
  interface ViewingRequestFieldRefs {
    readonly id: FieldRef<"ViewingRequest", 'String'>
    readonly listingId: FieldRef<"ViewingRequest", 'String'>
    readonly tenantId: FieldRef<"ViewingRequest", 'String'>
    readonly status: FieldRef<"ViewingRequest", 'ViewingStatus'>
    readonly message: FieldRef<"ViewingRequest", 'String'>
    readonly requestedAt: FieldRef<"ViewingRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ViewingRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ViewingRequest findUnique
   */
  export type ViewingRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter, which ViewingRequest to fetch.
     */
    where: ViewingRequestWhereUniqueInput
  }

  /**
   * ViewingRequest findUniqueOrThrow
   */
  export type ViewingRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter, which ViewingRequest to fetch.
     */
    where: ViewingRequestWhereUniqueInput
  }

  /**
   * ViewingRequest findFirst
   */
  export type ViewingRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter, which ViewingRequest to fetch.
     */
    where?: ViewingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewingRequests to fetch.
     */
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewingRequests.
     */
    cursor?: ViewingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewingRequests.
     */
    distinct?: ViewingRequestScalarFieldEnum | ViewingRequestScalarFieldEnum[]
  }

  /**
   * ViewingRequest findFirstOrThrow
   */
  export type ViewingRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter, which ViewingRequest to fetch.
     */
    where?: ViewingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewingRequests to fetch.
     */
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewingRequests.
     */
    cursor?: ViewingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewingRequests.
     */
    distinct?: ViewingRequestScalarFieldEnum | ViewingRequestScalarFieldEnum[]
  }

  /**
   * ViewingRequest findMany
   */
  export type ViewingRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter, which ViewingRequests to fetch.
     */
    where?: ViewingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewingRequests to fetch.
     */
    orderBy?: ViewingRequestOrderByWithRelationInput | ViewingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewingRequests.
     */
    cursor?: ViewingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewingRequests.
     */
    distinct?: ViewingRequestScalarFieldEnum | ViewingRequestScalarFieldEnum[]
  }

  /**
   * ViewingRequest create
   */
  export type ViewingRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewingRequest.
     */
    data: XOR<ViewingRequestCreateInput, ViewingRequestUncheckedCreateInput>
  }

  /**
   * ViewingRequest createMany
   */
  export type ViewingRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewingRequests.
     */
    data: ViewingRequestCreateManyInput | ViewingRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewingRequest createManyAndReturn
   */
  export type ViewingRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ViewingRequests.
     */
    data: ViewingRequestCreateManyInput | ViewingRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewingRequest update
   */
  export type ViewingRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewingRequest.
     */
    data: XOR<ViewingRequestUpdateInput, ViewingRequestUncheckedUpdateInput>
    /**
     * Choose, which ViewingRequest to update.
     */
    where: ViewingRequestWhereUniqueInput
  }

  /**
   * ViewingRequest updateMany
   */
  export type ViewingRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewingRequests.
     */
    data: XOR<ViewingRequestUpdateManyMutationInput, ViewingRequestUncheckedUpdateManyInput>
    /**
     * Filter which ViewingRequests to update
     */
    where?: ViewingRequestWhereInput
    /**
     * Limit how many ViewingRequests to update.
     */
    limit?: number
  }

  /**
   * ViewingRequest updateManyAndReturn
   */
  export type ViewingRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * The data used to update ViewingRequests.
     */
    data: XOR<ViewingRequestUpdateManyMutationInput, ViewingRequestUncheckedUpdateManyInput>
    /**
     * Filter which ViewingRequests to update
     */
    where?: ViewingRequestWhereInput
    /**
     * Limit how many ViewingRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewingRequest upsert
   */
  export type ViewingRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewingRequest to update in case it exists.
     */
    where: ViewingRequestWhereUniqueInput
    /**
     * In case the ViewingRequest found by the `where` argument doesn't exist, create a new ViewingRequest with this data.
     */
    create: XOR<ViewingRequestCreateInput, ViewingRequestUncheckedCreateInput>
    /**
     * In case the ViewingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewingRequestUpdateInput, ViewingRequestUncheckedUpdateInput>
  }

  /**
   * ViewingRequest delete
   */
  export type ViewingRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
    /**
     * Filter which ViewingRequest to delete.
     */
    where: ViewingRequestWhereUniqueInput
  }

  /**
   * ViewingRequest deleteMany
   */
  export type ViewingRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewingRequests to delete
     */
    where?: ViewingRequestWhereInput
    /**
     * Limit how many ViewingRequests to delete.
     */
    limit?: number
  }

  /**
   * ViewingRequest.listing
   */
  export type ViewingRequest$listingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
  }

  /**
   * ViewingRequest.tenant
   */
  export type ViewingRequest$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ViewingRequest without action
   */
  export type ViewingRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewingRequest
     */
    select?: ViewingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewingRequest
     */
    omit?: ViewingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewingRequestInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    userId: string | null
    listingId: string | null
    savedAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    userId: string | null
    listingId: string | null
    savedAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    userId: number
    listingId: number
    savedAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    userId?: true
    listingId?: true
    savedAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    userId?: true
    listingId?: true
    savedAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    userId?: true
    listingId?: true
    savedAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    userId: string
    listingId: string
    savedAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "listingId" | "savedAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      listingId: string
      savedAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly listingId: FieldRef<"Favorite", 'String'>
    readonly savedAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model ListingView
   */

  export type AggregateListingView = {
    _count: ListingViewCountAggregateOutputType | null
    _min: ListingViewMinAggregateOutputType | null
    _max: ListingViewMaxAggregateOutputType | null
  }

  export type ListingViewMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type ListingViewMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type ListingViewCountAggregateOutputType = {
    id: number
    listingId: number
    userId: number
    viewedAt: number
    _all: number
  }


  export type ListingViewMinAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    viewedAt?: true
  }

  export type ListingViewMaxAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    viewedAt?: true
  }

  export type ListingViewCountAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    viewedAt?: true
    _all?: true
  }

  export type ListingViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingView to aggregate.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingViews
    **/
    _count?: true | ListingViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingViewMaxAggregateInputType
  }

  export type GetListingViewAggregateType<T extends ListingViewAggregateArgs> = {
        [P in keyof T & keyof AggregateListingView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingView[P]>
      : GetScalarType<T[P], AggregateListingView[P]>
  }




  export type ListingViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingViewWhereInput
    orderBy?: ListingViewOrderByWithAggregationInput | ListingViewOrderByWithAggregationInput[]
    by: ListingViewScalarFieldEnum[] | ListingViewScalarFieldEnum
    having?: ListingViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingViewCountAggregateInputType | true
    _min?: ListingViewMinAggregateInputType
    _max?: ListingViewMaxAggregateInputType
  }

  export type ListingViewGroupByOutputType = {
    id: string
    listingId: string
    userId: string | null
    viewedAt: Date
    _count: ListingViewCountAggregateOutputType | null
    _min: ListingViewMinAggregateOutputType | null
    _max: ListingViewMaxAggregateOutputType | null
  }

  type GetListingViewGroupByPayload<T extends ListingViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingViewGroupByOutputType[P]>
            : GetScalarType<T[P], ListingViewGroupByOutputType[P]>
        }
      >
    >


  export type ListingViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    viewedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    viewedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    viewedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectScalar = {
    id?: boolean
    listingId?: boolean
    userId?: boolean
    viewedAt?: boolean
  }

  export type ListingViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "userId" | "viewedAt", ExtArgs["result"]["listingView"]>
  export type ListingViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }
  export type ListingViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }
  export type ListingViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | ListingView$userArgs<ExtArgs>
  }

  export type $ListingViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingView"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      userId: string | null
      viewedAt: Date
    }, ExtArgs["result"]["listingView"]>
    composites: {}
  }

  type ListingViewGetPayload<S extends boolean | null | undefined | ListingViewDefaultArgs> = $Result.GetResult<Prisma.$ListingViewPayload, S>

  type ListingViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingViewCountAggregateInputType | true
    }

  export interface ListingViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingView'], meta: { name: 'ListingView' } }
    /**
     * Find zero or one ListingView that matches the filter.
     * @param {ListingViewFindUniqueArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingViewFindUniqueArgs>(args: SelectSubset<T, ListingViewFindUniqueArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingViewFindUniqueOrThrowArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindFirstArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingViewFindFirstArgs>(args?: SelectSubset<T, ListingViewFindFirstArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindFirstOrThrowArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingViews
     * const listingViews = await prisma.listingView.findMany()
     * 
     * // Get first 10 ListingViews
     * const listingViews = await prisma.listingView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingViewWithIdOnly = await prisma.listingView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingViewFindManyArgs>(args?: SelectSubset<T, ListingViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingView.
     * @param {ListingViewCreateArgs} args - Arguments to create a ListingView.
     * @example
     * // Create one ListingView
     * const ListingView = await prisma.listingView.create({
     *   data: {
     *     // ... data to create a ListingView
     *   }
     * })
     * 
     */
    create<T extends ListingViewCreateArgs>(args: SelectSubset<T, ListingViewCreateArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingViews.
     * @param {ListingViewCreateManyArgs} args - Arguments to create many ListingViews.
     * @example
     * // Create many ListingViews
     * const listingView = await prisma.listingView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingViewCreateManyArgs>(args?: SelectSubset<T, ListingViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingViews and returns the data saved in the database.
     * @param {ListingViewCreateManyAndReturnArgs} args - Arguments to create many ListingViews.
     * @example
     * // Create many ListingViews
     * const listingView = await prisma.listingView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingViews and only return the `id`
     * const listingViewWithIdOnly = await prisma.listingView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingView.
     * @param {ListingViewDeleteArgs} args - Arguments to delete one ListingView.
     * @example
     * // Delete one ListingView
     * const ListingView = await prisma.listingView.delete({
     *   where: {
     *     // ... filter to delete one ListingView
     *   }
     * })
     * 
     */
    delete<T extends ListingViewDeleteArgs>(args: SelectSubset<T, ListingViewDeleteArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingView.
     * @param {ListingViewUpdateArgs} args - Arguments to update one ListingView.
     * @example
     * // Update one ListingView
     * const listingView = await prisma.listingView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingViewUpdateArgs>(args: SelectSubset<T, ListingViewUpdateArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingViews.
     * @param {ListingViewDeleteManyArgs} args - Arguments to filter ListingViews to delete.
     * @example
     * // Delete a few ListingViews
     * const { count } = await prisma.listingView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingViewDeleteManyArgs>(args?: SelectSubset<T, ListingViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingViews
     * const listingView = await prisma.listingView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingViewUpdateManyArgs>(args: SelectSubset<T, ListingViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingViews and returns the data updated in the database.
     * @param {ListingViewUpdateManyAndReturnArgs} args - Arguments to update many ListingViews.
     * @example
     * // Update many ListingViews
     * const listingView = await prisma.listingView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingViews and only return the `id`
     * const listingViewWithIdOnly = await prisma.listingView.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ListingViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingView.
     * @param {ListingViewUpsertArgs} args - Arguments to update or create a ListingView.
     * @example
     * // Update or create a ListingView
     * const listingView = await prisma.listingView.upsert({
     *   create: {
     *     // ... data to create a ListingView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingView we want to update
     *   }
     * })
     */
    upsert<T extends ListingViewUpsertArgs>(args: SelectSubset<T, ListingViewUpsertArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewCountArgs} args - Arguments to filter ListingViews to count.
     * @example
     * // Count the number of ListingViews
     * const count = await prisma.listingView.count({
     *   where: {
     *     // ... the filter for the ListingViews we want to count
     *   }
     * })
    **/
    count<T extends ListingViewCountArgs>(
      args?: Subset<T, ListingViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingViewAggregateArgs>(args: Subset<T, ListingViewAggregateArgs>): Prisma.PrismaPromise<GetListingViewAggregateType<T>>

    /**
     * Group by ListingView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewGroupByArgs} args - Group by arguments.
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
      T extends ListingViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingViewGroupByArgs['orderBy'] }
        : { orderBy?: ListingViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingView model
   */
  readonly fields: ListingViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ListingView$userArgs<ExtArgs> = {}>(args?: Subset<T, ListingView$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListingView model
   */
  interface ListingViewFieldRefs {
    readonly id: FieldRef<"ListingView", 'String'>
    readonly listingId: FieldRef<"ListingView", 'String'>
    readonly userId: FieldRef<"ListingView", 'String'>
    readonly viewedAt: FieldRef<"ListingView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListingView findUnique
   */
  export type ListingViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView findUniqueOrThrow
   */
  export type ListingViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView findFirst
   */
  export type ListingViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingViews.
     */
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView findFirstOrThrow
   */
  export type ListingViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingViews.
     */
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView findMany
   */
  export type ListingViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter, which ListingViews to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingViews.
     */
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView create
   */
  export type ListingViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingView.
     */
    data: XOR<ListingViewCreateInput, ListingViewUncheckedCreateInput>
  }

  /**
   * ListingView createMany
   */
  export type ListingViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingViews.
     */
    data: ListingViewCreateManyInput | ListingViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingView createManyAndReturn
   */
  export type ListingViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data used to create many ListingViews.
     */
    data: ListingViewCreateManyInput | ListingViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingView update
   */
  export type ListingViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingView.
     */
    data: XOR<ListingViewUpdateInput, ListingViewUncheckedUpdateInput>
    /**
     * Choose, which ListingView to update.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView updateMany
   */
  export type ListingViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingViews.
     */
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyInput>
    /**
     * Filter which ListingViews to update
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to update.
     */
    limit?: number
  }

  /**
   * ListingView updateManyAndReturn
   */
  export type ListingViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data used to update ListingViews.
     */
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyInput>
    /**
     * Filter which ListingViews to update
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingView upsert
   */
  export type ListingViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingView to update in case it exists.
     */
    where: ListingViewWhereUniqueInput
    /**
     * In case the ListingView found by the `where` argument doesn't exist, create a new ListingView with this data.
     */
    create: XOR<ListingViewCreateInput, ListingViewUncheckedCreateInput>
    /**
     * In case the ListingView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingViewUpdateInput, ListingViewUncheckedUpdateInput>
  }

  /**
   * ListingView delete
   */
  export type ListingViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
    /**
     * Filter which ListingView to delete.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView deleteMany
   */
  export type ListingViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingViews to delete
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to delete.
     */
    limit?: number
  }

  /**
   * ListingView.user
   */
  export type ListingView$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ListingView without action
   */
  export type ListingViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingViewInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    recipientId: string | null
    listingId: string | null
    body: string | null
    isRead: boolean | null
    sentAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    recipientId: string | null
    listingId: string | null
    body: string | null
    isRead: boolean | null
    sentAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    recipientId: number
    listingId: number
    body: number
    isRead: number
    sentAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    listingId?: true
    body?: true
    isRead?: true
    sentAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    listingId?: true
    body?: true
    isRead?: true
    sentAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    listingId?: true
    body?: true
    isRead?: true
    sentAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string | null
    recipientId: string | null
    listingId: string | null
    body: string
    isRead: boolean
    sentAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    listingId?: boolean
    body?: boolean
    isRead?: boolean
    sentAt?: boolean
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    listingId?: boolean
    body?: boolean
    isRead?: boolean
    sentAt?: boolean
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    listingId?: boolean
    body?: boolean
    isRead?: boolean
    sentAt?: boolean
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    listingId?: boolean
    body?: boolean
    isRead?: boolean
    sentAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "recipientId" | "listingId" | "body" | "isRead" | "sentAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Message$senderArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
    listing?: boolean | Message$listingArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs> | null
      recipient: Prisma.$UserPayload<ExtArgs> | null
      listing: Prisma.$ListingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string | null
      recipientId: string | null
      listingId: string | null
      body: string
      isRead: boolean
      sentAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends Message$senderArgs<ExtArgs> = {}>(args?: Subset<T, Message$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipient<T extends Message$recipientArgs<ExtArgs> = {}>(args?: Subset<T, Message$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    listing<T extends Message$listingArgs<ExtArgs> = {}>(args?: Subset<T, Message$listingArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly recipientId: FieldRef<"Message", 'String'>
    readonly listingId: FieldRef<"Message", 'String'>
    readonly body: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.sender
   */
  export type Message$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Message.recipient
   */
  export type Message$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Message.listing
   */
  export type Message$listingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    firstName: 'firstName',
    lastName: 'lastName',
    avatarUrl: 'avatarUrl',
    city: 'city',
    role: 'role',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    landlordId: 'landlordId',
    title: 'title',
    description: 'description',
    status: 'status',
    propertyType: 'propertyType',
    rooms: 'rooms',
    area: 'area',
    priceMonth: 'priceMonth',
    city: 'city',
    lat: 'lat',
    lng: 'lng',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const ListingPhotoScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    url: 'url',
    sortOrder: 'sortOrder'
  };

  export type ListingPhotoScalarFieldEnum = (typeof ListingPhotoScalarFieldEnum)[keyof typeof ListingPhotoScalarFieldEnum]


  export const ViewingRequestScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    tenantId: 'tenantId',
    status: 'status',
    message: 'message',
    requestedAt: 'requestedAt',
    updatedAt: 'updatedAt'
  };

  export type ViewingRequestScalarFieldEnum = (typeof ViewingRequestScalarFieldEnum)[keyof typeof ViewingRequestScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    userId: 'userId',
    listingId: 'listingId',
    savedAt: 'savedAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ListingViewScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    userId: 'userId',
    viewedAt: 'viewedAt'
  };

  export type ListingViewScalarFieldEnum = (typeof ListingViewScalarFieldEnum)[keyof typeof ListingViewScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    recipientId: 'recipientId',
    listingId: 'listingId',
    body: 'body',
    isRead: 'isRead',
    sentAt: 'sentAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ViewingStatus'
   */
  export type EnumViewingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewingStatus'>
    


  /**
   * Reference to a field of type 'ViewingStatus[]'
   */
  export type ListEnumViewingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    viewingRequests?: ViewingRequestListRelationFilter
    favorited?: FavoriteListRelationFilter
    views?: ListingViewListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listings?: ListingOrderByRelationAggregateInput
    viewingRequests?: ViewingRequestOrderByRelationAggregateInput
    favorited?: FavoriteOrderByRelationAggregateInput
    views?: ListingViewOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    viewingRequests?: ViewingRequestListRelationFilter
    favorited?: FavoriteListRelationFilter
    views?: ListingViewListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: UuidFilter<"Listing"> | string
    landlordId?: UuidFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringNullableFilter<"Listing"> | string | null
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    rooms?: IntNullableFilter<"Listing"> | number | null
    area?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    city?: StringFilter<"Listing"> | string
    lat?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFilter<"Listing"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    photos?: ListingPhotoListRelationFilter
    viewingRequests?: ViewingRequestListRelationFilter
    favorites?: FavoriteListRelationFilter
    views?: ListingViewListRelationFilter
    messages?: MessageListRelationFilter
    landlord?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    propertyType?: SortOrder
    rooms?: SortOrderInput | SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: ListingPhotoOrderByRelationAggregateInput
    viewingRequests?: ViewingRequestOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    views?: ListingViewOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    landlord?: UserOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    landlordId?: UuidFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringNullableFilter<"Listing"> | string | null
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    rooms?: IntNullableFilter<"Listing"> | number | null
    area?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    city?: StringFilter<"Listing"> | string
    lat?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFilter<"Listing"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    photos?: ListingPhotoListRelationFilter
    viewingRequests?: ViewingRequestListRelationFilter
    favorites?: FavoriteListRelationFilter
    views?: ListingViewListRelationFilter
    messages?: MessageListRelationFilter
    landlord?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    propertyType?: SortOrder
    rooms?: SortOrderInput | SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Listing"> | string
    landlordId?: UuidWithAggregatesFilter<"Listing"> | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Listing"> | $Enums.PropertyType
    rooms?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    area?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    city?: StringWithAggregatesFilter<"Listing"> | string
    lat?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    isVerified?: BoolWithAggregatesFilter<"Listing"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type ListingPhotoWhereInput = {
    AND?: ListingPhotoWhereInput | ListingPhotoWhereInput[]
    OR?: ListingPhotoWhereInput[]
    NOT?: ListingPhotoWhereInput | ListingPhotoWhereInput[]
    id?: UuidFilter<"ListingPhoto"> | string
    listingId?: UuidFilter<"ListingPhoto"> | string
    url?: StringFilter<"ListingPhoto"> | string
    sortOrder?: IntFilter<"ListingPhoto"> | number
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type ListingPhotoOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    listing?: ListingOrderByWithRelationInput
  }

  export type ListingPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingPhotoWhereInput | ListingPhotoWhereInput[]
    OR?: ListingPhotoWhereInput[]
    NOT?: ListingPhotoWhereInput | ListingPhotoWhereInput[]
    listingId?: UuidFilter<"ListingPhoto"> | string
    url?: StringFilter<"ListingPhoto"> | string
    sortOrder?: IntFilter<"ListingPhoto"> | number
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id">

  export type ListingPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    _count?: ListingPhotoCountOrderByAggregateInput
    _avg?: ListingPhotoAvgOrderByAggregateInput
    _max?: ListingPhotoMaxOrderByAggregateInput
    _min?: ListingPhotoMinOrderByAggregateInput
    _sum?: ListingPhotoSumOrderByAggregateInput
  }

  export type ListingPhotoScalarWhereWithAggregatesInput = {
    AND?: ListingPhotoScalarWhereWithAggregatesInput | ListingPhotoScalarWhereWithAggregatesInput[]
    OR?: ListingPhotoScalarWhereWithAggregatesInput[]
    NOT?: ListingPhotoScalarWhereWithAggregatesInput | ListingPhotoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ListingPhoto"> | string
    listingId?: UuidWithAggregatesFilter<"ListingPhoto"> | string
    url?: StringWithAggregatesFilter<"ListingPhoto"> | string
    sortOrder?: IntWithAggregatesFilter<"ListingPhoto"> | number
  }

  export type ViewingRequestWhereInput = {
    AND?: ViewingRequestWhereInput | ViewingRequestWhereInput[]
    OR?: ViewingRequestWhereInput[]
    NOT?: ViewingRequestWhereInput | ViewingRequestWhereInput[]
    id?: UuidFilter<"ViewingRequest"> | string
    listingId?: UuidNullableFilter<"ViewingRequest"> | string | null
    tenantId?: UuidNullableFilter<"ViewingRequest"> | string | null
    status?: EnumViewingStatusFilter<"ViewingRequest"> | $Enums.ViewingStatus
    message?: StringNullableFilter<"ViewingRequest"> | string | null
    requestedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    tenant?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ViewingRequestOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    tenant?: UserOrderByWithRelationInput
  }

  export type ViewingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewingRequestWhereInput | ViewingRequestWhereInput[]
    OR?: ViewingRequestWhereInput[]
    NOT?: ViewingRequestWhereInput | ViewingRequestWhereInput[]
    listingId?: UuidNullableFilter<"ViewingRequest"> | string | null
    tenantId?: UuidNullableFilter<"ViewingRequest"> | string | null
    status?: EnumViewingStatusFilter<"ViewingRequest"> | $Enums.ViewingStatus
    message?: StringNullableFilter<"ViewingRequest"> | string | null
    requestedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    tenant?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ViewingRequestOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ViewingRequestCountOrderByAggregateInput
    _max?: ViewingRequestMaxOrderByAggregateInput
    _min?: ViewingRequestMinOrderByAggregateInput
  }

  export type ViewingRequestScalarWhereWithAggregatesInput = {
    AND?: ViewingRequestScalarWhereWithAggregatesInput | ViewingRequestScalarWhereWithAggregatesInput[]
    OR?: ViewingRequestScalarWhereWithAggregatesInput[]
    NOT?: ViewingRequestScalarWhereWithAggregatesInput | ViewingRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ViewingRequest"> | string
    listingId?: UuidNullableWithAggregatesFilter<"ViewingRequest"> | string | null
    tenantId?: UuidNullableWithAggregatesFilter<"ViewingRequest"> | string | null
    status?: EnumViewingStatusWithAggregatesFilter<"ViewingRequest"> | $Enums.ViewingStatus
    message?: StringNullableWithAggregatesFilter<"ViewingRequest"> | string | null
    requestedAt?: DateTimeWithAggregatesFilter<"ViewingRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ViewingRequest"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: UuidFilter<"Favorite"> | string
    listingId?: UuidFilter<"Favorite"> | string
    savedAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    userId_listingId?: FavoriteUserIdListingIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: UuidFilter<"Favorite"> | string
    listingId?: UuidFilter<"Favorite"> | string
    savedAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "userId_listingId">

  export type FavoriteOrderByWithAggregationInput = {
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"Favorite"> | string
    listingId?: UuidWithAggregatesFilter<"Favorite"> | string
    savedAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type ListingViewWhereInput = {
    AND?: ListingViewWhereInput | ListingViewWhereInput[]
    OR?: ListingViewWhereInput[]
    NOT?: ListingViewWhereInput | ListingViewWhereInput[]
    id?: UuidFilter<"ListingView"> | string
    listingId?: UuidFilter<"ListingView"> | string
    userId?: UuidNullableFilter<"ListingView"> | string | null
    viewedAt?: DateTimeFilter<"ListingView"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ListingViewOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ListingViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingViewWhereInput | ListingViewWhereInput[]
    OR?: ListingViewWhereInput[]
    NOT?: ListingViewWhereInput | ListingViewWhereInput[]
    listingId?: UuidFilter<"ListingView"> | string
    userId?: UuidNullableFilter<"ListingView"> | string | null
    viewedAt?: DateTimeFilter<"ListingView"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ListingViewOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
    _count?: ListingViewCountOrderByAggregateInput
    _max?: ListingViewMaxOrderByAggregateInput
    _min?: ListingViewMinOrderByAggregateInput
  }

  export type ListingViewScalarWhereWithAggregatesInput = {
    AND?: ListingViewScalarWhereWithAggregatesInput | ListingViewScalarWhereWithAggregatesInput[]
    OR?: ListingViewScalarWhereWithAggregatesInput[]
    NOT?: ListingViewScalarWhereWithAggregatesInput | ListingViewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ListingView"> | string
    listingId?: UuidWithAggregatesFilter<"ListingView"> | string
    userId?: UuidNullableWithAggregatesFilter<"ListingView"> | string | null
    viewedAt?: DateTimeWithAggregatesFilter<"ListingView"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidNullableFilter<"Message"> | string | null
    recipientId?: UuidNullableFilter<"Message"> | string | null
    listingId?: UuidNullableFilter<"Message"> | string | null
    body?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    listingId?: SortOrderInput | SortOrder
    body?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: UuidNullableFilter<"Message"> | string | null
    recipientId?: UuidNullableFilter<"Message"> | string | null
    listingId?: UuidNullableFilter<"Message"> | string | null
    body?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    listingId?: SortOrderInput | SortOrder
    body?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    senderId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    recipientId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    listingId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    body?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingPhotoCreateInput = {
    id?: string
    url: string
    sortOrder?: number
    listing: ListingCreateNestedOneWithoutPhotosInput
  }

  export type ListingPhotoUncheckedCreateInput = {
    id?: string
    listingId: string
    url: string
    sortOrder?: number
  }

  export type ListingPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    listing?: ListingUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type ListingPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ListingPhotoCreateManyInput = {
    id?: string
    listingId: string
    url: string
    sortOrder?: number
  }

  export type ListingPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ListingPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ViewingRequestCreateInput = {
    id?: string
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
    listing?: ListingCreateNestedOneWithoutViewingRequestsInput
    tenant?: UserCreateNestedOneWithoutViewingRequestsInput
  }

  export type ViewingRequestUncheckedCreateInput = {
    id?: string
    listingId?: string | null
    tenantId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewingRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneWithoutViewingRequestsNestedInput
    tenant?: UserUpdateOneWithoutViewingRequestsNestedInput
  }

  export type ViewingRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewingRequestCreateManyInput = {
    id?: string
    listingId?: string | null
    tenantId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewingRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewingRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritedInput
    listing: ListingCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    userId: string
    listingId: string
    savedAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritedNestedInput
    listing?: ListingUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    userId: string
    listingId: string
    savedAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewCreateInput = {
    id?: string
    viewedAt?: Date | string
    listing: ListingCreateNestedOneWithoutViewsInput
    user?: UserCreateNestedOneWithoutViewsInput
  }

  export type ListingViewUncheckedCreateInput = {
    id?: string
    listingId: string
    userId?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutViewsNestedInput
    user?: UserUpdateOneWithoutViewsNestedInput
  }

  export type ListingViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewCreateManyInput = {
    id?: string
    listingId: string
    userId?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    body: string
    isRead?: boolean
    sentAt?: Date | string
    sender?: UserCreateNestedOneWithoutSentMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
    listing?: ListingCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId?: string | null
    recipientId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutSentMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
    listing?: ListingUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId?: string | null
    recipientId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type ViewingRequestListRelationFilter = {
    every?: ViewingRequestWhereInput
    some?: ViewingRequestWhereInput
    none?: ViewingRequestWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type ListingViewListRelationFilter = {
    every?: ListingViewWhereInput
    some?: ListingViewWhereInput
    none?: ListingViewWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewingRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    city?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    city?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    city?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ListingPhotoListRelationFilter = {
    every?: ListingPhotoWhereInput
    some?: ListingPhotoWhereInput
    none?: ListingPhotoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListingPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    propertyType?: SortOrder
    rooms?: SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    rooms?: SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    propertyType?: SortOrder
    rooms?: SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    propertyType?: SortOrder
    rooms?: SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    rooms?: SortOrder
    area?: SortOrder
    priceMonth?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ListingPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ListingPhotoAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ListingPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ListingPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ListingPhotoSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumViewingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewingStatus | EnumViewingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViewingStatusFilter<$PrismaModel> | $Enums.ViewingStatus
  }

  export type ListingNullableScalarRelationFilter = {
    is?: ListingWhereInput | null
    isNot?: ListingWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ViewingRequestCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewingRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewingRequestMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumViewingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewingStatus | EnumViewingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViewingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ViewingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewingStatusFilter<$PrismaModel>
    _max?: NestedEnumViewingStatusFilter<$PrismaModel>
  }

  export type FavoriteUserIdListingIdCompoundUniqueInput = {
    userId: string
    listingId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type ListingViewCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ListingViewMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ListingViewMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    listingId?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    listingId?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    listingId?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type ListingCreateNestedManyWithoutLandlordInput = {
    create?: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput> | ListingCreateWithoutLandlordInput[] | ListingUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLandlordInput | ListingCreateOrConnectWithoutLandlordInput[]
    createMany?: ListingCreateManyLandlordInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ViewingRequestCreateNestedManyWithoutTenantInput = {
    create?: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput> | ViewingRequestCreateWithoutTenantInput[] | ViewingRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutTenantInput | ViewingRequestCreateOrConnectWithoutTenantInput[]
    createMany?: ViewingRequestCreateManyTenantInputEnvelope
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListingViewCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput> | ListingViewCreateWithoutUserInput[] | ListingViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutUserInput | ListingViewCreateOrConnectWithoutUserInput[]
    createMany?: ListingViewCreateManyUserInputEnvelope
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    createMany?: MessageCreateManyRecipientInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutLandlordInput = {
    create?: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput> | ListingCreateWithoutLandlordInput[] | ListingUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLandlordInput | ListingCreateOrConnectWithoutLandlordInput[]
    createMany?: ListingCreateManyLandlordInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ViewingRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput> | ViewingRequestCreateWithoutTenantInput[] | ViewingRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutTenantInput | ViewingRequestCreateOrConnectWithoutTenantInput[]
    createMany?: ViewingRequestCreateManyTenantInputEnvelope
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListingViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput> | ListingViewCreateWithoutUserInput[] | ListingViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutUserInput | ListingViewCreateOrConnectWithoutUserInput[]
    createMany?: ListingViewCreateManyUserInputEnvelope
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    createMany?: MessageCreateManyRecipientInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListingUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput> | ListingCreateWithoutLandlordInput[] | ListingUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLandlordInput | ListingCreateOrConnectWithoutLandlordInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutLandlordInput | ListingUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: ListingCreateManyLandlordInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutLandlordInput | ListingUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutLandlordInput | ListingUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ViewingRequestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput> | ViewingRequestCreateWithoutTenantInput[] | ViewingRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutTenantInput | ViewingRequestCreateOrConnectWithoutTenantInput[]
    upsert?: ViewingRequestUpsertWithWhereUniqueWithoutTenantInput | ViewingRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ViewingRequestCreateManyTenantInputEnvelope
    set?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    disconnect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    delete?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    update?: ViewingRequestUpdateWithWhereUniqueWithoutTenantInput | ViewingRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ViewingRequestUpdateManyWithWhereWithoutTenantInput | ViewingRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListingViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput> | ListingViewCreateWithoutUserInput[] | ListingViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutUserInput | ListingViewCreateOrConnectWithoutUserInput[]
    upsert?: ListingViewUpsertWithWhereUniqueWithoutUserInput | ListingViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingViewCreateManyUserInputEnvelope
    set?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    disconnect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    delete?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    update?: ListingViewUpdateWithWhereUniqueWithoutUserInput | ListingViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingViewUpdateManyWithWhereWithoutUserInput | ListingViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientInput | MessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: MessageCreateManyRecipientInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientInput | MessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientInput | MessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput> | ListingCreateWithoutLandlordInput[] | ListingUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLandlordInput | ListingCreateOrConnectWithoutLandlordInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutLandlordInput | ListingUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: ListingCreateManyLandlordInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutLandlordInput | ListingUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutLandlordInput | ListingUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput> | ViewingRequestCreateWithoutTenantInput[] | ViewingRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutTenantInput | ViewingRequestCreateOrConnectWithoutTenantInput[]
    upsert?: ViewingRequestUpsertWithWhereUniqueWithoutTenantInput | ViewingRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ViewingRequestCreateManyTenantInputEnvelope
    set?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    disconnect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    delete?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    update?: ViewingRequestUpdateWithWhereUniqueWithoutTenantInput | ViewingRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ViewingRequestUpdateManyWithWhereWithoutTenantInput | ViewingRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListingViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput> | ListingViewCreateWithoutUserInput[] | ListingViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutUserInput | ListingViewCreateOrConnectWithoutUserInput[]
    upsert?: ListingViewUpsertWithWhereUniqueWithoutUserInput | ListingViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingViewCreateManyUserInputEnvelope
    set?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    disconnect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    delete?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    update?: ListingViewUpdateWithWhereUniqueWithoutUserInput | ListingViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingViewUpdateManyWithWhereWithoutUserInput | ListingViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientInput | MessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: MessageCreateManyRecipientInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientInput | MessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientInput | MessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingPhotoCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput> | ListingPhotoCreateWithoutListingInput[] | ListingPhotoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingPhotoCreateOrConnectWithoutListingInput | ListingPhotoCreateOrConnectWithoutListingInput[]
    createMany?: ListingPhotoCreateManyListingInputEnvelope
    connect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
  }

  export type ViewingRequestCreateNestedManyWithoutListingInput = {
    create?: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput> | ViewingRequestCreateWithoutListingInput[] | ViewingRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutListingInput | ViewingRequestCreateOrConnectWithoutListingInput[]
    createMany?: ViewingRequestCreateManyListingInputEnvelope
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutListingInput = {
    create?: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput> | FavoriteCreateWithoutListingInput[] | FavoriteUncheckedCreateWithoutListingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutListingInput | FavoriteCreateOrConnectWithoutListingInput[]
    createMany?: FavoriteCreateManyListingInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListingViewCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput> | ListingViewCreateWithoutListingInput[] | ListingViewUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutListingInput | ListingViewCreateOrConnectWithoutListingInput[]
    createMany?: ListingViewCreateManyListingInputEnvelope
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutListingInput = {
    create?: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput> | MessageCreateWithoutListingInput[] | MessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutListingInput | MessageCreateOrConnectWithoutListingInput[]
    createMany?: MessageCreateManyListingInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingPhotoUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput> | ListingPhotoCreateWithoutListingInput[] | ListingPhotoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingPhotoCreateOrConnectWithoutListingInput | ListingPhotoCreateOrConnectWithoutListingInput[]
    createMany?: ListingPhotoCreateManyListingInputEnvelope
    connect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
  }

  export type ViewingRequestUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput> | ViewingRequestCreateWithoutListingInput[] | ViewingRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutListingInput | ViewingRequestCreateOrConnectWithoutListingInput[]
    createMany?: ViewingRequestCreateManyListingInputEnvelope
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput> | FavoriteCreateWithoutListingInput[] | FavoriteUncheckedCreateWithoutListingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutListingInput | FavoriteCreateOrConnectWithoutListingInput[]
    createMany?: FavoriteCreateManyListingInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListingViewUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput> | ListingViewCreateWithoutListingInput[] | ListingViewUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutListingInput | ListingViewCreateOrConnectWithoutListingInput[]
    createMany?: ListingViewCreateManyListingInputEnvelope
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput> | MessageCreateWithoutListingInput[] | MessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutListingInput | MessageCreateOrConnectWithoutListingInput[]
    createMany?: MessageCreateManyListingInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ListingPhotoUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput> | ListingPhotoCreateWithoutListingInput[] | ListingPhotoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingPhotoCreateOrConnectWithoutListingInput | ListingPhotoCreateOrConnectWithoutListingInput[]
    upsert?: ListingPhotoUpsertWithWhereUniqueWithoutListingInput | ListingPhotoUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingPhotoCreateManyListingInputEnvelope
    set?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    disconnect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    delete?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    connect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    update?: ListingPhotoUpdateWithWhereUniqueWithoutListingInput | ListingPhotoUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingPhotoUpdateManyWithWhereWithoutListingInput | ListingPhotoUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingPhotoScalarWhereInput | ListingPhotoScalarWhereInput[]
  }

  export type ViewingRequestUpdateManyWithoutListingNestedInput = {
    create?: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput> | ViewingRequestCreateWithoutListingInput[] | ViewingRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutListingInput | ViewingRequestCreateOrConnectWithoutListingInput[]
    upsert?: ViewingRequestUpsertWithWhereUniqueWithoutListingInput | ViewingRequestUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ViewingRequestCreateManyListingInputEnvelope
    set?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    disconnect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    delete?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    update?: ViewingRequestUpdateWithWhereUniqueWithoutListingInput | ViewingRequestUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ViewingRequestUpdateManyWithWhereWithoutListingInput | ViewingRequestUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutListingNestedInput = {
    create?: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput> | FavoriteCreateWithoutListingInput[] | FavoriteUncheckedCreateWithoutListingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutListingInput | FavoriteCreateOrConnectWithoutListingInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutListingInput | FavoriteUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: FavoriteCreateManyListingInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutListingInput | FavoriteUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutListingInput | FavoriteUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListingViewUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput> | ListingViewCreateWithoutListingInput[] | ListingViewUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutListingInput | ListingViewCreateOrConnectWithoutListingInput[]
    upsert?: ListingViewUpsertWithWhereUniqueWithoutListingInput | ListingViewUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingViewCreateManyListingInputEnvelope
    set?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    disconnect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    delete?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    update?: ListingViewUpdateWithWhereUniqueWithoutListingInput | ListingViewUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingViewUpdateManyWithWhereWithoutListingInput | ListingViewUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutListingNestedInput = {
    create?: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput> | MessageCreateWithoutListingInput[] | MessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutListingInput | MessageCreateOrConnectWithoutListingInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutListingInput | MessageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: MessageCreateManyListingInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutListingInput | MessageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutListingInput | MessageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type ListingPhotoUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput> | ListingPhotoCreateWithoutListingInput[] | ListingPhotoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingPhotoCreateOrConnectWithoutListingInput | ListingPhotoCreateOrConnectWithoutListingInput[]
    upsert?: ListingPhotoUpsertWithWhereUniqueWithoutListingInput | ListingPhotoUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingPhotoCreateManyListingInputEnvelope
    set?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    disconnect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    delete?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    connect?: ListingPhotoWhereUniqueInput | ListingPhotoWhereUniqueInput[]
    update?: ListingPhotoUpdateWithWhereUniqueWithoutListingInput | ListingPhotoUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingPhotoUpdateManyWithWhereWithoutListingInput | ListingPhotoUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingPhotoScalarWhereInput | ListingPhotoScalarWhereInput[]
  }

  export type ViewingRequestUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput> | ViewingRequestCreateWithoutListingInput[] | ViewingRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ViewingRequestCreateOrConnectWithoutListingInput | ViewingRequestCreateOrConnectWithoutListingInput[]
    upsert?: ViewingRequestUpsertWithWhereUniqueWithoutListingInput | ViewingRequestUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ViewingRequestCreateManyListingInputEnvelope
    set?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    disconnect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    delete?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    connect?: ViewingRequestWhereUniqueInput | ViewingRequestWhereUniqueInput[]
    update?: ViewingRequestUpdateWithWhereUniqueWithoutListingInput | ViewingRequestUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ViewingRequestUpdateManyWithWhereWithoutListingInput | ViewingRequestUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput> | FavoriteCreateWithoutListingInput[] | FavoriteUncheckedCreateWithoutListingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutListingInput | FavoriteCreateOrConnectWithoutListingInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutListingInput | FavoriteUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: FavoriteCreateManyListingInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutListingInput | FavoriteUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutListingInput | FavoriteUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListingViewUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput> | ListingViewCreateWithoutListingInput[] | ListingViewUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingViewCreateOrConnectWithoutListingInput | ListingViewCreateOrConnectWithoutListingInput[]
    upsert?: ListingViewUpsertWithWhereUniqueWithoutListingInput | ListingViewUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingViewCreateManyListingInputEnvelope
    set?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    disconnect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    delete?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    connect?: ListingViewWhereUniqueInput | ListingViewWhereUniqueInput[]
    update?: ListingViewUpdateWithWhereUniqueWithoutListingInput | ListingViewUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingViewUpdateManyWithWhereWithoutListingInput | ListingViewUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput> | MessageCreateWithoutListingInput[] | MessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutListingInput | MessageCreateOrConnectWithoutListingInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutListingInput | MessageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: MessageCreateManyListingInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutListingInput | MessageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutListingInput | MessageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ListingCreateWithoutPhotosInput, ListingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPhotosInput
    connect?: ListingWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListingUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<ListingCreateWithoutPhotosInput, ListingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPhotosInput
    upsert?: ListingUpsertWithoutPhotosInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutPhotosInput, ListingUpdateWithoutPhotosInput>, ListingUncheckedUpdateWithoutPhotosInput>
  }

  export type ListingCreateNestedOneWithoutViewingRequestsInput = {
    create?: XOR<ListingCreateWithoutViewingRequestsInput, ListingUncheckedCreateWithoutViewingRequestsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutViewingRequestsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewingRequestsInput = {
    create?: XOR<UserCreateWithoutViewingRequestsInput, UserUncheckedCreateWithoutViewingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewingRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumViewingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ViewingStatus
  }

  export type ListingUpdateOneWithoutViewingRequestsNestedInput = {
    create?: XOR<ListingCreateWithoutViewingRequestsInput, ListingUncheckedCreateWithoutViewingRequestsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutViewingRequestsInput
    upsert?: ListingUpsertWithoutViewingRequestsInput
    disconnect?: ListingWhereInput | boolean
    delete?: ListingWhereInput | boolean
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutViewingRequestsInput, ListingUpdateWithoutViewingRequestsInput>, ListingUncheckedUpdateWithoutViewingRequestsInput>
  }

  export type UserUpdateOneWithoutViewingRequestsNestedInput = {
    create?: XOR<UserCreateWithoutViewingRequestsInput, UserUncheckedCreateWithoutViewingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewingRequestsInput
    upsert?: UserUpsertWithoutViewingRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewingRequestsInput, UserUpdateWithoutViewingRequestsInput>, UserUncheckedUpdateWithoutViewingRequestsInput>
  }

  export type UserCreateNestedOneWithoutFavoritedInput = {
    create?: XOR<UserCreateWithoutFavoritedInput, UserUncheckedCreateWithoutFavoritedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritedInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ListingCreateWithoutFavoritesInput, ListingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutFavoritesInput
    connect?: ListingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritedNestedInput = {
    create?: XOR<UserCreateWithoutFavoritedInput, UserUncheckedCreateWithoutFavoritedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritedInput
    upsert?: UserUpsertWithoutFavoritedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritedInput, UserUpdateWithoutFavoritedInput>, UserUncheckedUpdateWithoutFavoritedInput>
  }

  export type ListingUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ListingCreateWithoutFavoritesInput, ListingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutFavoritesInput
    upsert?: ListingUpsertWithoutFavoritesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutFavoritesInput, ListingUpdateWithoutFavoritesInput>, ListingUncheckedUpdateWithoutFavoritesInput>
  }

  export type ListingCreateNestedOneWithoutViewsInput = {
    create?: XOR<ListingCreateWithoutViewsInput, ListingUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutViewsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<ListingCreateWithoutViewsInput, ListingUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutViewsInput
    upsert?: ListingUpsertWithoutViewsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutViewsInput, ListingUpdateWithoutViewsInput>, ListingUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateOneWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsInput, UserUpdateWithoutViewsInput>, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ListingCreateWithoutMessagesInput, ListingUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutMessagesInput
    connect?: ListingWhereUniqueInput
  }

  export type UserUpdateOneWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ListingUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ListingCreateWithoutMessagesInput, ListingUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutMessagesInput
    upsert?: ListingUpsertWithoutMessagesInput
    disconnect?: ListingWhereInput | boolean
    delete?: ListingWhereInput | boolean
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutMessagesInput, ListingUpdateWithoutMessagesInput>, ListingUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumViewingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewingStatus | EnumViewingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViewingStatusFilter<$PrismaModel> | $Enums.ViewingStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumViewingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewingStatus | EnumViewingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewingStatus[] | ListEnumViewingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViewingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ViewingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewingStatusFilter<$PrismaModel>
    _max?: NestedEnumViewingStatusFilter<$PrismaModel>
  }

  export type ListingCreateWithoutLandlordInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutLandlordInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutLandlordInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput>
  }

  export type ListingCreateManyLandlordInputEnvelope = {
    data: ListingCreateManyLandlordInput | ListingCreateManyLandlordInput[]
    skipDuplicates?: boolean
  }

  export type ViewingRequestCreateWithoutTenantInput = {
    id?: string
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
    listing?: ListingCreateNestedOneWithoutViewingRequestsInput
  }

  export type ViewingRequestUncheckedCreateWithoutTenantInput = {
    id?: string
    listingId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewingRequestCreateOrConnectWithoutTenantInput = {
    where: ViewingRequestWhereUniqueInput
    create: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput>
  }

  export type ViewingRequestCreateManyTenantInputEnvelope = {
    data: ViewingRequestCreateManyTenantInput | ViewingRequestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    savedAt?: Date | string
    listing: ListingCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    listingId: string
    savedAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListingViewCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    listing: ListingCreateNestedOneWithoutViewsInput
  }

  export type ListingViewUncheckedCreateWithoutUserInput = {
    id?: string
    listingId: string
    viewedAt?: Date | string
  }

  export type ListingViewCreateOrConnectWithoutUserInput = {
    where: ListingViewWhereUniqueInput
    create: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput>
  }

  export type ListingViewCreateManyUserInputEnvelope = {
    data: ListingViewCreateManyUserInput | ListingViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    body: string
    isRead?: boolean
    sentAt?: Date | string
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
    listing?: ListingCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    recipientId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRecipientInput = {
    id?: string
    body: string
    isRead?: boolean
    sentAt?: Date | string
    sender?: UserCreateNestedOneWithoutSentMessagesInput
    listing?: ListingCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutRecipientInput = {
    id?: string
    senderId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type MessageCreateManyRecipientInputEnvelope = {
    data: MessageCreateManyRecipientInput | MessageCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithWhereUniqueWithoutLandlordInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutLandlordInput, ListingUncheckedUpdateWithoutLandlordInput>
    create: XOR<ListingCreateWithoutLandlordInput, ListingUncheckedCreateWithoutLandlordInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutLandlordInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutLandlordInput, ListingUncheckedUpdateWithoutLandlordInput>
  }

  export type ListingUpdateManyWithWhereWithoutLandlordInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutLandlordInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: UuidFilter<"Listing"> | string
    landlordId?: UuidFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringNullableFilter<"Listing"> | string | null
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    rooms?: IntNullableFilter<"Listing"> | number | null
    area?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    city?: StringFilter<"Listing"> | string
    lat?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFilter<"Listing"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type ViewingRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: ViewingRequestWhereUniqueInput
    update: XOR<ViewingRequestUpdateWithoutTenantInput, ViewingRequestUncheckedUpdateWithoutTenantInput>
    create: XOR<ViewingRequestCreateWithoutTenantInput, ViewingRequestUncheckedCreateWithoutTenantInput>
  }

  export type ViewingRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: ViewingRequestWhereUniqueInput
    data: XOR<ViewingRequestUpdateWithoutTenantInput, ViewingRequestUncheckedUpdateWithoutTenantInput>
  }

  export type ViewingRequestUpdateManyWithWhereWithoutTenantInput = {
    where: ViewingRequestScalarWhereInput
    data: XOR<ViewingRequestUpdateManyMutationInput, ViewingRequestUncheckedUpdateManyWithoutTenantInput>
  }

  export type ViewingRequestScalarWhereInput = {
    AND?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
    OR?: ViewingRequestScalarWhereInput[]
    NOT?: ViewingRequestScalarWhereInput | ViewingRequestScalarWhereInput[]
    id?: UuidFilter<"ViewingRequest"> | string
    listingId?: UuidNullableFilter<"ViewingRequest"> | string | null
    tenantId?: UuidNullableFilter<"ViewingRequest"> | string | null
    status?: EnumViewingStatusFilter<"ViewingRequest"> | $Enums.ViewingStatus
    message?: StringNullableFilter<"ViewingRequest"> | string | null
    requestedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ViewingRequest"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    userId?: UuidFilter<"Favorite"> | string
    listingId?: UuidFilter<"Favorite"> | string
    savedAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type ListingViewUpsertWithWhereUniqueWithoutUserInput = {
    where: ListingViewWhereUniqueInput
    update: XOR<ListingViewUpdateWithoutUserInput, ListingViewUncheckedUpdateWithoutUserInput>
    create: XOR<ListingViewCreateWithoutUserInput, ListingViewUncheckedCreateWithoutUserInput>
  }

  export type ListingViewUpdateWithWhereUniqueWithoutUserInput = {
    where: ListingViewWhereUniqueInput
    data: XOR<ListingViewUpdateWithoutUserInput, ListingViewUncheckedUpdateWithoutUserInput>
  }

  export type ListingViewUpdateManyWithWhereWithoutUserInput = {
    where: ListingViewScalarWhereInput
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyWithoutUserInput>
  }

  export type ListingViewScalarWhereInput = {
    AND?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
    OR?: ListingViewScalarWhereInput[]
    NOT?: ListingViewScalarWhereInput | ListingViewScalarWhereInput[]
    id?: UuidFilter<"ListingView"> | string
    listingId?: UuidFilter<"ListingView"> | string
    userId?: UuidNullableFilter<"ListingView"> | string | null
    viewedAt?: DateTimeFilter<"ListingView"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidNullableFilter<"Message"> | string | null
    recipientId?: UuidNullableFilter<"Message"> | string | null
    listingId?: UuidNullableFilter<"Message"> | string | null
    body?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    sentAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecipientInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecipientInput>
  }

  export type ListingPhotoCreateWithoutListingInput = {
    id?: string
    url: string
    sortOrder?: number
  }

  export type ListingPhotoUncheckedCreateWithoutListingInput = {
    id?: string
    url: string
    sortOrder?: number
  }

  export type ListingPhotoCreateOrConnectWithoutListingInput = {
    where: ListingPhotoWhereUniqueInput
    create: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput>
  }

  export type ListingPhotoCreateManyListingInputEnvelope = {
    data: ListingPhotoCreateManyListingInput | ListingPhotoCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ViewingRequestCreateWithoutListingInput = {
    id?: string
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
    tenant?: UserCreateNestedOneWithoutViewingRequestsInput
  }

  export type ViewingRequestUncheckedCreateWithoutListingInput = {
    id?: string
    tenantId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewingRequestCreateOrConnectWithoutListingInput = {
    where: ViewingRequestWhereUniqueInput
    create: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput>
  }

  export type ViewingRequestCreateManyListingInputEnvelope = {
    data: ViewingRequestCreateManyListingInput | ViewingRequestCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutListingInput = {
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritedInput
  }

  export type FavoriteUncheckedCreateWithoutListingInput = {
    userId: string
    savedAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutListingInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput>
  }

  export type FavoriteCreateManyListingInputEnvelope = {
    data: FavoriteCreateManyListingInput | FavoriteCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ListingViewCreateWithoutListingInput = {
    id?: string
    viewedAt?: Date | string
    user?: UserCreateNestedOneWithoutViewsInput
  }

  export type ListingViewUncheckedCreateWithoutListingInput = {
    id?: string
    userId?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewCreateOrConnectWithoutListingInput = {
    where: ListingViewWhereUniqueInput
    create: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput>
  }

  export type ListingViewCreateManyListingInputEnvelope = {
    data: ListingViewCreateManyListingInput | ListingViewCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutListingInput = {
    id?: string
    body: string
    isRead?: boolean
    sentAt?: Date | string
    sender?: UserCreateNestedOneWithoutSentMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutListingInput = {
    id?: string
    senderId?: string | null
    recipientId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutListingInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput>
  }

  export type MessageCreateManyListingInputEnvelope = {
    data: MessageCreateManyListingInput | MessageCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type ListingPhotoUpsertWithWhereUniqueWithoutListingInput = {
    where: ListingPhotoWhereUniqueInput
    update: XOR<ListingPhotoUpdateWithoutListingInput, ListingPhotoUncheckedUpdateWithoutListingInput>
    create: XOR<ListingPhotoCreateWithoutListingInput, ListingPhotoUncheckedCreateWithoutListingInput>
  }

  export type ListingPhotoUpdateWithWhereUniqueWithoutListingInput = {
    where: ListingPhotoWhereUniqueInput
    data: XOR<ListingPhotoUpdateWithoutListingInput, ListingPhotoUncheckedUpdateWithoutListingInput>
  }

  export type ListingPhotoUpdateManyWithWhereWithoutListingInput = {
    where: ListingPhotoScalarWhereInput
    data: XOR<ListingPhotoUpdateManyMutationInput, ListingPhotoUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingPhotoScalarWhereInput = {
    AND?: ListingPhotoScalarWhereInput | ListingPhotoScalarWhereInput[]
    OR?: ListingPhotoScalarWhereInput[]
    NOT?: ListingPhotoScalarWhereInput | ListingPhotoScalarWhereInput[]
    id?: UuidFilter<"ListingPhoto"> | string
    listingId?: UuidFilter<"ListingPhoto"> | string
    url?: StringFilter<"ListingPhoto"> | string
    sortOrder?: IntFilter<"ListingPhoto"> | number
  }

  export type ViewingRequestUpsertWithWhereUniqueWithoutListingInput = {
    where: ViewingRequestWhereUniqueInput
    update: XOR<ViewingRequestUpdateWithoutListingInput, ViewingRequestUncheckedUpdateWithoutListingInput>
    create: XOR<ViewingRequestCreateWithoutListingInput, ViewingRequestUncheckedCreateWithoutListingInput>
  }

  export type ViewingRequestUpdateWithWhereUniqueWithoutListingInput = {
    where: ViewingRequestWhereUniqueInput
    data: XOR<ViewingRequestUpdateWithoutListingInput, ViewingRequestUncheckedUpdateWithoutListingInput>
  }

  export type ViewingRequestUpdateManyWithWhereWithoutListingInput = {
    where: ViewingRequestScalarWhereInput
    data: XOR<ViewingRequestUpdateManyMutationInput, ViewingRequestUncheckedUpdateManyWithoutListingInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutListingInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutListingInput, FavoriteUncheckedUpdateWithoutListingInput>
    create: XOR<FavoriteCreateWithoutListingInput, FavoriteUncheckedCreateWithoutListingInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutListingInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutListingInput, FavoriteUncheckedUpdateWithoutListingInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutListingInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingViewUpsertWithWhereUniqueWithoutListingInput = {
    where: ListingViewWhereUniqueInput
    update: XOR<ListingViewUpdateWithoutListingInput, ListingViewUncheckedUpdateWithoutListingInput>
    create: XOR<ListingViewCreateWithoutListingInput, ListingViewUncheckedCreateWithoutListingInput>
  }

  export type ListingViewUpdateWithWhereUniqueWithoutListingInput = {
    where: ListingViewWhereUniqueInput
    data: XOR<ListingViewUpdateWithoutListingInput, ListingViewUncheckedUpdateWithoutListingInput>
  }

  export type ListingViewUpdateManyWithWhereWithoutListingInput = {
    where: ListingViewScalarWhereInput
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyWithoutListingInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutListingInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutListingInput, MessageUncheckedUpdateWithoutListingInput>
    create: XOR<MessageCreateWithoutListingInput, MessageUncheckedCreateWithoutListingInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutListingInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutListingInput, MessageUncheckedUpdateWithoutListingInput>
  }

  export type MessageUpdateManyWithWhereWithoutListingInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutListingInput>
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type ListingCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutPhotosInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutPhotosInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutPhotosInput, ListingUncheckedCreateWithoutPhotosInput>
  }

  export type ListingUpsertWithoutPhotosInput = {
    update: XOR<ListingUpdateWithoutPhotosInput, ListingUncheckedUpdateWithoutPhotosInput>
    create: XOR<ListingCreateWithoutPhotosInput, ListingUncheckedCreateWithoutPhotosInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutPhotosInput, ListingUncheckedUpdateWithoutPhotosInput>
  }

  export type ListingUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateWithoutViewingRequestsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutViewingRequestsInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutViewingRequestsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutViewingRequestsInput, ListingUncheckedCreateWithoutViewingRequestsInput>
  }

  export type UserCreateWithoutViewingRequestsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutViewingRequestsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutViewingRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewingRequestsInput, UserUncheckedCreateWithoutViewingRequestsInput>
  }

  export type ListingUpsertWithoutViewingRequestsInput = {
    update: XOR<ListingUpdateWithoutViewingRequestsInput, ListingUncheckedUpdateWithoutViewingRequestsInput>
    create: XOR<ListingCreateWithoutViewingRequestsInput, ListingUncheckedCreateWithoutViewingRequestsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutViewingRequestsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutViewingRequestsInput, ListingUncheckedUpdateWithoutViewingRequestsInput>
  }

  export type ListingUpdateWithoutViewingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutViewingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserUpsertWithoutViewingRequestsInput = {
    update: XOR<UserUpdateWithoutViewingRequestsInput, UserUncheckedUpdateWithoutViewingRequestsInput>
    create: XOR<UserCreateWithoutViewingRequestsInput, UserUncheckedCreateWithoutViewingRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewingRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewingRequestsInput, UserUncheckedUpdateWithoutViewingRequestsInput>
  }

  export type UserUpdateWithoutViewingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutViewingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutFavoritedInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutFavoritedInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutFavoritedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritedInput, UserUncheckedCreateWithoutFavoritedInput>
  }

  export type ListingCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutFavoritesInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutFavoritesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutFavoritesInput, ListingUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritedInput = {
    update: XOR<UserUpdateWithoutFavoritedInput, UserUncheckedUpdateWithoutFavoritedInput>
    create: XOR<UserCreateWithoutFavoritedInput, UserUncheckedCreateWithoutFavoritedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritedInput, UserUncheckedUpdateWithoutFavoritedInput>
  }

  export type UserUpdateWithoutFavoritedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type ListingUpsertWithoutFavoritesInput = {
    update: XOR<ListingUpdateWithoutFavoritesInput, ListingUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ListingCreateWithoutFavoritesInput, ListingUncheckedCreateWithoutFavoritesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutFavoritesInput, ListingUncheckedUpdateWithoutFavoritesInput>
  }

  export type ListingUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateWithoutViewsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    messages?: MessageCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutViewsInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    messages?: MessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutViewsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutViewsInput, ListingUncheckedCreateWithoutViewsInput>
  }

  export type UserCreateWithoutViewsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type ListingUpsertWithoutViewsInput = {
    update: XOR<ListingUpdateWithoutViewsInput, ListingUncheckedUpdateWithoutViewsInput>
    create: XOR<ListingCreateWithoutViewsInput, ListingUncheckedCreateWithoutViewsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutViewsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutViewsInput, ListingUncheckedUpdateWithoutViewsInput>
  }

  export type ListingUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutTenantInput
    favorited?: FavoriteCreateNestedManyWithoutUserInput
    views?: ListingViewCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    city?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutLandlordInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutTenantInput
    favorited?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    views?: ListingViewUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ListingCreateWithoutMessagesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestCreateNestedManyWithoutListingInput
    favorites?: FavoriteCreateNestedManyWithoutListingInput
    views?: ListingViewCreateNestedManyWithoutListingInput
    landlord: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutMessagesInput = {
    id?: string
    landlordId: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ListingPhotoUncheckedCreateNestedManyWithoutListingInput
    viewingRequests?: ViewingRequestUncheckedCreateNestedManyWithoutListingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutListingInput
    views?: ListingViewUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutMessagesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutMessagesInput, ListingUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUpdateManyWithoutUserNestedInput
    views?: ListingViewUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutLandlordNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutTenantNestedInput
    favorited?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ListingUpsertWithoutMessagesInput = {
    update: XOR<ListingUpdateWithoutMessagesInput, ListingUncheckedUpdateWithoutMessagesInput>
    create: XOR<ListingCreateWithoutMessagesInput, ListingUncheckedCreateWithoutMessagesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutMessagesInput, ListingUncheckedUpdateWithoutMessagesInput>
  }

  export type ListingUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    landlord?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyLandlordInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ListingStatus
    propertyType: $Enums.PropertyType
    rooms?: number | null
    area: Decimal | DecimalJsLike | number | string
    priceMonth: Decimal | DecimalJsLike | number | string
    city: string
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewingRequestCreateManyTenantInput = {
    id?: string
    listingId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    listingId: string
    savedAt?: Date | string
  }

  export type ListingViewCreateManyUserInput = {
    id?: string
    listingId: string
    viewedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    recipientId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type MessageCreateManyRecipientInput = {
    id?: string
    senderId?: string | null
    listingId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type ListingUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUpdateManyWithoutListingNestedInput
    views?: ListingViewUpdateManyWithoutListingNestedInput
    messages?: MessageUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ListingPhotoUncheckedUpdateManyWithoutListingNestedInput
    viewingRequests?: ViewingRequestUncheckedUpdateManyWithoutListingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutListingNestedInput
    views?: ListingViewUncheckedUpdateManyWithoutListingNestedInput
    messages?: MessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewingRequestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneWithoutViewingRequestsNestedInput
  }

  export type ViewingRequestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewingRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ListingViewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
    listing?: ListingUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutSentMessagesNestedInput
    listing?: ListingUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingPhotoCreateManyListingInput = {
    id?: string
    url: string
    sortOrder?: number
  }

  export type ViewingRequestCreateManyListingInput = {
    id?: string
    tenantId?: string | null
    status?: $Enums.ViewingStatus
    message?: string | null
    requestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyListingInput = {
    userId: string
    savedAt?: Date | string
  }

  export type ListingViewCreateManyListingInput = {
    id?: string
    userId?: string | null
    viewedAt?: Date | string
  }

  export type MessageCreateManyListingInput = {
    id?: string
    senderId?: string | null
    recipientId?: string | null
    body: string
    isRead?: boolean
    sentAt?: Date | string
  }

  export type ListingPhotoUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ListingPhotoUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ListingPhotoUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ViewingRequestUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UserUpdateOneWithoutViewingRequestsNestedInput
  }

  export type ViewingRequestUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewingRequestUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViewingStatusFieldUpdateOperationsInput | $Enums.ViewingStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutListingInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritedNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutListingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutListingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutViewsNestedInput
  }

  export type ListingViewUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutSentMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
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