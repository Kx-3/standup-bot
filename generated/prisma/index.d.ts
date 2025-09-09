
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
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StandupEntry
 * 
 */
export type StandupEntry = $Result.DefaultSelection<Prisma.$StandupEntryPayload>
/**
 * Model ParticipationSnapshot
 * 
 */
export type ParticipationSnapshot = $Result.DefaultSelection<Prisma.$ParticipationSnapshotPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
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
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.standupEntry`: Exposes CRUD operations for the **StandupEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StandupEntries
    * const standupEntries = await prisma.standupEntry.findMany()
    * ```
    */
  get standupEntry(): Prisma.StandupEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participationSnapshot`: Exposes CRUD operations for the **ParticipationSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipationSnapshots
    * const participationSnapshots = await prisma.participationSnapshot.findMany()
    * ```
    */
  get participationSnapshot(): Prisma.ParticipationSnapshotDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Workspace: 'Workspace',
    Team: 'Team',
    User: 'User',
    StandupEntry: 'StandupEntry',
    ParticipationSnapshot: 'ParticipationSnapshot'
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
      modelProps: "workspace" | "team" | "user" | "standupEntry" | "participationSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
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
      StandupEntry: {
        payload: Prisma.$StandupEntryPayload<ExtArgs>
        fields: Prisma.StandupEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandupEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandupEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          findFirst: {
            args: Prisma.StandupEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandupEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          findMany: {
            args: Prisma.StandupEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>[]
          }
          create: {
            args: Prisma.StandupEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          createMany: {
            args: Prisma.StandupEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StandupEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>[]
          }
          delete: {
            args: Prisma.StandupEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          update: {
            args: Prisma.StandupEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          deleteMany: {
            args: Prisma.StandupEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandupEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StandupEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>[]
          }
          upsert: {
            args: Prisma.StandupEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupEntryPayload>
          }
          aggregate: {
            args: Prisma.StandupEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStandupEntry>
          }
          groupBy: {
            args: Prisma.StandupEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandupEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StandupEntryCountArgs<ExtArgs>
            result: $Utils.Optional<StandupEntryCountAggregateOutputType> | number
          }
        }
      }
      ParticipationSnapshot: {
        payload: Prisma.$ParticipationSnapshotPayload<ExtArgs>
        fields: Prisma.ParticipationSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          findFirst: {
            args: Prisma.ParticipationSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          findMany: {
            args: Prisma.ParticipationSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>[]
          }
          create: {
            args: Prisma.ParticipationSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          createMany: {
            args: Prisma.ParticipationSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipationSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>[]
          }
          delete: {
            args: Prisma.ParticipationSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          update: {
            args: Prisma.ParticipationSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipationSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.ParticipationSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationSnapshotPayload>
          }
          aggregate: {
            args: Prisma.ParticipationSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipationSnapshot>
          }
          groupBy: {
            args: Prisma.ParticipationSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationSnapshotCountAggregateOutputType> | number
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
    workspace?: WorkspaceOmit
    team?: TeamOmit
    user?: UserOmit
    standupEntry?: StandupEntryOmit
    participationSnapshot?: ParticipationSnapshotOmit
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
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    teams: number
    entries: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    teams?: boolean | WorkspaceCountOutputTypeCountTeamsArgs
    entries?: boolean | WorkspaceCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupEntryWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    users: number
    standupEntries: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamCountOutputTypeCountUsersArgs
    standupEntries?: boolean | TeamCountOutputTypeCountStandupEntriesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountStandupEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupEntryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    entries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | UserCountOutputTypeCountEntriesArgs
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
  export type UserCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    slackTeamId: string | null
    name: string | null
    timezone: string | null
    channelId: string | null
    botToken: string | null
    createdAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    slackTeamId: string | null
    name: string | null
    timezone: string | null
    channelId: string | null
    botToken: string | null
    createdAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    slackTeamId: number
    name: number
    timezone: number
    channelId: number
    botToken: number
    createdAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    slackTeamId?: true
    name?: true
    timezone?: true
    channelId?: true
    botToken?: true
    createdAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    slackTeamId?: true
    name?: true
    timezone?: true
    channelId?: true
    botToken?: true
    createdAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    slackTeamId?: true
    name?: true
    timezone?: true
    channelId?: true
    botToken?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    slackTeamId: string
    name: string | null
    timezone: string
    channelId: string | null
    botToken: string
    createdAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slackTeamId?: boolean
    name?: boolean
    timezone?: boolean
    channelId?: boolean
    botToken?: boolean
    createdAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    teams?: boolean | Workspace$teamsArgs<ExtArgs>
    entries?: boolean | Workspace$entriesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slackTeamId?: boolean
    name?: boolean
    timezone?: boolean
    channelId?: boolean
    botToken?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slackTeamId?: boolean
    name?: boolean
    timezone?: boolean
    channelId?: boolean
    botToken?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    slackTeamId?: boolean
    name?: boolean
    timezone?: boolean
    channelId?: boolean
    botToken?: boolean
    createdAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slackTeamId" | "name" | "timezone" | "channelId" | "botToken" | "createdAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    teams?: boolean | Workspace$teamsArgs<ExtArgs>
    entries?: boolean | Workspace$entriesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      entries: Prisma.$StandupEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slackTeamId: string
      name: string | null
      timezone: string
      channelId: string | null
      botToken: string
      createdAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends Workspace$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entries<T extends Workspace$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly slackTeamId: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly timezone: FieldRef<"Workspace", 'String'>
    readonly channelId: FieldRef<"Workspace", 'String'>
    readonly botToken: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Workspace.teams
   */
  export type Workspace$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Workspace.entries
   */
  export type Workspace$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    where?: StandupEntryWhereInput
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    cursor?: StandupEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    workspaceId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    workspaceId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    workspaceId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    workspaceId: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    users?: boolean | Team$usersArgs<ExtArgs>
    standupEntries?: boolean | Team$standupEntriesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    workspaceId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "workspaceId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    users?: boolean | Team$usersArgs<ExtArgs>
    standupEntries?: boolean | Team$standupEntriesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      standupEntries: Prisma.$StandupEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      workspaceId: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Team$usersArgs<ExtArgs> = {}>(args?: Subset<T, Team$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    standupEntries<T extends Team$standupEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Team$standupEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly workspaceId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.users
   */
  export type Team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.standupEntries
   */
  export type Team$standupEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    where?: StandupEntryWhereInput
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    cursor?: StandupEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    streak: number | null
  }

  export type UserSumAggregateOutputType = {
    streak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    slackUserId: string | null
    realName: string | null
    displayName: string | null
    workspaceId: string | null
    teamId: string | null
    streak: number | null
    lastSubmit: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    slackUserId: string | null
    realName: string | null
    displayName: string | null
    workspaceId: string | null
    teamId: string | null
    streak: number | null
    lastSubmit: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    slackUserId: number
    realName: number
    displayName: number
    workspaceId: number
    teamId: number
    streak: number
    lastSubmit: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    streak?: true
  }

  export type UserSumAggregateInputType = {
    streak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    slackUserId?: true
    realName?: true
    displayName?: true
    workspaceId?: true
    teamId?: true
    streak?: true
    lastSubmit?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    slackUserId?: true
    realName?: true
    displayName?: true
    workspaceId?: true
    teamId?: true
    streak?: true
    lastSubmit?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    slackUserId?: true
    realName?: true
    displayName?: true
    workspaceId?: true
    teamId?: true
    streak?: true
    lastSubmit?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    slackUserId: string
    realName: string | null
    displayName: string | null
    workspaceId: string
    teamId: string | null
    streak: number
    lastSubmit: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    slackUserId?: boolean
    realName?: boolean
    displayName?: boolean
    workspaceId?: boolean
    teamId?: boolean
    streak?: boolean
    lastSubmit?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    entries?: boolean | User$entriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slackUserId?: boolean
    realName?: boolean
    displayName?: boolean
    workspaceId?: boolean
    teamId?: boolean
    streak?: boolean
    lastSubmit?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slackUserId?: boolean
    realName?: boolean
    displayName?: boolean
    workspaceId?: boolean
    teamId?: boolean
    streak?: boolean
    lastSubmit?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    slackUserId?: boolean
    realName?: boolean
    displayName?: boolean
    workspaceId?: boolean
    teamId?: boolean
    streak?: boolean
    lastSubmit?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slackUserId" | "realName" | "displayName" | "workspaceId" | "teamId" | "streak" | "lastSubmit", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    entries?: boolean | User$entriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
      entries: Prisma.$StandupEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slackUserId: string
      realName: string | null
      displayName: string | null
      workspaceId: string
      teamId: string | null
      streak: number
      lastSubmit: Date | null
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
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entries<T extends User$entriesArgs<ExtArgs> = {}>(args?: Subset<T, User$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly slackUserId: FieldRef<"User", 'String'>
    readonly realName: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly workspaceId: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly lastSubmit: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.entries
   */
  export type User$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    where?: StandupEntryWhereInput
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    cursor?: StandupEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
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
   * Model StandupEntry
   */

  export type AggregateStandupEntry = {
    _count: StandupEntryCountAggregateOutputType | null
    _min: StandupEntryMinAggregateOutputType | null
    _max: StandupEntryMaxAggregateOutputType | null
  }

  export type StandupEntryMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    workspaceId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandupEntryMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    workspaceId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandupEntryCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    workspaceId: number
    teamId: number
    yesterday: number
    today: number
    blockers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StandupEntryMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    workspaceId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandupEntryMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    workspaceId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandupEntryCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    workspaceId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StandupEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandupEntry to aggregate.
     */
    where?: StandupEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandupEntries to fetch.
     */
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandupEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandupEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandupEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StandupEntries
    **/
    _count?: true | StandupEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandupEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandupEntryMaxAggregateInputType
  }

  export type GetStandupEntryAggregateType<T extends StandupEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateStandupEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandupEntry[P]>
      : GetScalarType<T[P], AggregateStandupEntry[P]>
  }




  export type StandupEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupEntryWhereInput
    orderBy?: StandupEntryOrderByWithAggregationInput | StandupEntryOrderByWithAggregationInput[]
    by: StandupEntryScalarFieldEnum[] | StandupEntryScalarFieldEnum
    having?: StandupEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandupEntryCountAggregateInputType | true
    _min?: StandupEntryMinAggregateInputType
    _max?: StandupEntryMaxAggregateInputType
  }

  export type StandupEntryGroupByOutputType = {
    id: string
    date: Date
    userId: string
    workspaceId: string
    teamId: string | null
    yesterday: string
    today: string
    blockers: string | null
    createdAt: Date
    updatedAt: Date
    _count: StandupEntryCountAggregateOutputType | null
    _min: StandupEntryMinAggregateOutputType | null
    _max: StandupEntryMaxAggregateOutputType | null
  }

  type GetStandupEntryGroupByPayload<T extends StandupEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandupEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandupEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandupEntryGroupByOutputType[P]>
            : GetScalarType<T[P], StandupEntryGroupByOutputType[P]>
        }
      >
    >


  export type StandupEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    workspaceId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }, ExtArgs["result"]["standupEntry"]>

  export type StandupEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    workspaceId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }, ExtArgs["result"]["standupEntry"]>

  export type StandupEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    workspaceId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }, ExtArgs["result"]["standupEntry"]>

  export type StandupEntrySelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    workspaceId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StandupEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "userId" | "workspaceId" | "teamId" | "yesterday" | "today" | "blockers" | "createdAt" | "updatedAt", ExtArgs["result"]["standupEntry"]>
  export type StandupEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }
  export type StandupEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }
  export type StandupEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    team?: boolean | StandupEntry$teamArgs<ExtArgs>
  }

  export type $StandupEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StandupEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      workspaceId: string
      teamId: string | null
      yesterday: string
      today: string
      blockers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["standupEntry"]>
    composites: {}
  }

  type StandupEntryGetPayload<S extends boolean | null | undefined | StandupEntryDefaultArgs> = $Result.GetResult<Prisma.$StandupEntryPayload, S>

  type StandupEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StandupEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StandupEntryCountAggregateInputType | true
    }

  export interface StandupEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StandupEntry'], meta: { name: 'StandupEntry' } }
    /**
     * Find zero or one StandupEntry that matches the filter.
     * @param {StandupEntryFindUniqueArgs} args - Arguments to find a StandupEntry
     * @example
     * // Get one StandupEntry
     * const standupEntry = await prisma.standupEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandupEntryFindUniqueArgs>(args: SelectSubset<T, StandupEntryFindUniqueArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StandupEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StandupEntryFindUniqueOrThrowArgs} args - Arguments to find a StandupEntry
     * @example
     * // Get one StandupEntry
     * const standupEntry = await prisma.standupEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandupEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, StandupEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandupEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryFindFirstArgs} args - Arguments to find a StandupEntry
     * @example
     * // Get one StandupEntry
     * const standupEntry = await prisma.standupEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandupEntryFindFirstArgs>(args?: SelectSubset<T, StandupEntryFindFirstArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandupEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryFindFirstOrThrowArgs} args - Arguments to find a StandupEntry
     * @example
     * // Get one StandupEntry
     * const standupEntry = await prisma.standupEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandupEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, StandupEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StandupEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StandupEntries
     * const standupEntries = await prisma.standupEntry.findMany()
     * 
     * // Get first 10 StandupEntries
     * const standupEntries = await prisma.standupEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standupEntryWithIdOnly = await prisma.standupEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandupEntryFindManyArgs>(args?: SelectSubset<T, StandupEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StandupEntry.
     * @param {StandupEntryCreateArgs} args - Arguments to create a StandupEntry.
     * @example
     * // Create one StandupEntry
     * const StandupEntry = await prisma.standupEntry.create({
     *   data: {
     *     // ... data to create a StandupEntry
     *   }
     * })
     * 
     */
    create<T extends StandupEntryCreateArgs>(args: SelectSubset<T, StandupEntryCreateArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StandupEntries.
     * @param {StandupEntryCreateManyArgs} args - Arguments to create many StandupEntries.
     * @example
     * // Create many StandupEntries
     * const standupEntry = await prisma.standupEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandupEntryCreateManyArgs>(args?: SelectSubset<T, StandupEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StandupEntries and returns the data saved in the database.
     * @param {StandupEntryCreateManyAndReturnArgs} args - Arguments to create many StandupEntries.
     * @example
     * // Create many StandupEntries
     * const standupEntry = await prisma.standupEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StandupEntries and only return the `id`
     * const standupEntryWithIdOnly = await prisma.standupEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StandupEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, StandupEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StandupEntry.
     * @param {StandupEntryDeleteArgs} args - Arguments to delete one StandupEntry.
     * @example
     * // Delete one StandupEntry
     * const StandupEntry = await prisma.standupEntry.delete({
     *   where: {
     *     // ... filter to delete one StandupEntry
     *   }
     * })
     * 
     */
    delete<T extends StandupEntryDeleteArgs>(args: SelectSubset<T, StandupEntryDeleteArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StandupEntry.
     * @param {StandupEntryUpdateArgs} args - Arguments to update one StandupEntry.
     * @example
     * // Update one StandupEntry
     * const standupEntry = await prisma.standupEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandupEntryUpdateArgs>(args: SelectSubset<T, StandupEntryUpdateArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StandupEntries.
     * @param {StandupEntryDeleteManyArgs} args - Arguments to filter StandupEntries to delete.
     * @example
     * // Delete a few StandupEntries
     * const { count } = await prisma.standupEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandupEntryDeleteManyArgs>(args?: SelectSubset<T, StandupEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandupEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StandupEntries
     * const standupEntry = await prisma.standupEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandupEntryUpdateManyArgs>(args: SelectSubset<T, StandupEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandupEntries and returns the data updated in the database.
     * @param {StandupEntryUpdateManyAndReturnArgs} args - Arguments to update many StandupEntries.
     * @example
     * // Update many StandupEntries
     * const standupEntry = await prisma.standupEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StandupEntries and only return the `id`
     * const standupEntryWithIdOnly = await prisma.standupEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends StandupEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, StandupEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StandupEntry.
     * @param {StandupEntryUpsertArgs} args - Arguments to update or create a StandupEntry.
     * @example
     * // Update or create a StandupEntry
     * const standupEntry = await prisma.standupEntry.upsert({
     *   create: {
     *     // ... data to create a StandupEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StandupEntry we want to update
     *   }
     * })
     */
    upsert<T extends StandupEntryUpsertArgs>(args: SelectSubset<T, StandupEntryUpsertArgs<ExtArgs>>): Prisma__StandupEntryClient<$Result.GetResult<Prisma.$StandupEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StandupEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryCountArgs} args - Arguments to filter StandupEntries to count.
     * @example
     * // Count the number of StandupEntries
     * const count = await prisma.standupEntry.count({
     *   where: {
     *     // ... the filter for the StandupEntries we want to count
     *   }
     * })
    **/
    count<T extends StandupEntryCountArgs>(
      args?: Subset<T, StandupEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandupEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StandupEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StandupEntryAggregateArgs>(args: Subset<T, StandupEntryAggregateArgs>): Prisma.PrismaPromise<GetStandupEntryAggregateType<T>>

    /**
     * Group by StandupEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupEntryGroupByArgs} args - Group by arguments.
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
      T extends StandupEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandupEntryGroupByArgs['orderBy'] }
        : { orderBy?: StandupEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StandupEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandupEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StandupEntry model
   */
  readonly fields: StandupEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StandupEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandupEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends StandupEntry$teamArgs<ExtArgs> = {}>(args?: Subset<T, StandupEntry$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StandupEntry model
   */
  interface StandupEntryFieldRefs {
    readonly id: FieldRef<"StandupEntry", 'String'>
    readonly date: FieldRef<"StandupEntry", 'DateTime'>
    readonly userId: FieldRef<"StandupEntry", 'String'>
    readonly workspaceId: FieldRef<"StandupEntry", 'String'>
    readonly teamId: FieldRef<"StandupEntry", 'String'>
    readonly yesterday: FieldRef<"StandupEntry", 'String'>
    readonly today: FieldRef<"StandupEntry", 'String'>
    readonly blockers: FieldRef<"StandupEntry", 'String'>
    readonly createdAt: FieldRef<"StandupEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"StandupEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StandupEntry findUnique
   */
  export type StandupEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter, which StandupEntry to fetch.
     */
    where: StandupEntryWhereUniqueInput
  }

  /**
   * StandupEntry findUniqueOrThrow
   */
  export type StandupEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter, which StandupEntry to fetch.
     */
    where: StandupEntryWhereUniqueInput
  }

  /**
   * StandupEntry findFirst
   */
  export type StandupEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter, which StandupEntry to fetch.
     */
    where?: StandupEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandupEntries to fetch.
     */
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandupEntries.
     */
    cursor?: StandupEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandupEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandupEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandupEntries.
     */
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
  }

  /**
   * StandupEntry findFirstOrThrow
   */
  export type StandupEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter, which StandupEntry to fetch.
     */
    where?: StandupEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandupEntries to fetch.
     */
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandupEntries.
     */
    cursor?: StandupEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandupEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandupEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandupEntries.
     */
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
  }

  /**
   * StandupEntry findMany
   */
  export type StandupEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter, which StandupEntries to fetch.
     */
    where?: StandupEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandupEntries to fetch.
     */
    orderBy?: StandupEntryOrderByWithRelationInput | StandupEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StandupEntries.
     */
    cursor?: StandupEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandupEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandupEntries.
     */
    skip?: number
    distinct?: StandupEntryScalarFieldEnum | StandupEntryScalarFieldEnum[]
  }

  /**
   * StandupEntry create
   */
  export type StandupEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a StandupEntry.
     */
    data: XOR<StandupEntryCreateInput, StandupEntryUncheckedCreateInput>
  }

  /**
   * StandupEntry createMany
   */
  export type StandupEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StandupEntries.
     */
    data: StandupEntryCreateManyInput | StandupEntryCreateManyInput[]
  }

  /**
   * StandupEntry createManyAndReturn
   */
  export type StandupEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * The data used to create many StandupEntries.
     */
    data: StandupEntryCreateManyInput | StandupEntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StandupEntry update
   */
  export type StandupEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a StandupEntry.
     */
    data: XOR<StandupEntryUpdateInput, StandupEntryUncheckedUpdateInput>
    /**
     * Choose, which StandupEntry to update.
     */
    where: StandupEntryWhereUniqueInput
  }

  /**
   * StandupEntry updateMany
   */
  export type StandupEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StandupEntries.
     */
    data: XOR<StandupEntryUpdateManyMutationInput, StandupEntryUncheckedUpdateManyInput>
    /**
     * Filter which StandupEntries to update
     */
    where?: StandupEntryWhereInput
    /**
     * Limit how many StandupEntries to update.
     */
    limit?: number
  }

  /**
   * StandupEntry updateManyAndReturn
   */
  export type StandupEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * The data used to update StandupEntries.
     */
    data: XOR<StandupEntryUpdateManyMutationInput, StandupEntryUncheckedUpdateManyInput>
    /**
     * Filter which StandupEntries to update
     */
    where?: StandupEntryWhereInput
    /**
     * Limit how many StandupEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StandupEntry upsert
   */
  export type StandupEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the StandupEntry to update in case it exists.
     */
    where: StandupEntryWhereUniqueInput
    /**
     * In case the StandupEntry found by the `where` argument doesn't exist, create a new StandupEntry with this data.
     */
    create: XOR<StandupEntryCreateInput, StandupEntryUncheckedCreateInput>
    /**
     * In case the StandupEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandupEntryUpdateInput, StandupEntryUncheckedUpdateInput>
  }

  /**
   * StandupEntry delete
   */
  export type StandupEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
    /**
     * Filter which StandupEntry to delete.
     */
    where: StandupEntryWhereUniqueInput
  }

  /**
   * StandupEntry deleteMany
   */
  export type StandupEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandupEntries to delete
     */
    where?: StandupEntryWhereInput
    /**
     * Limit how many StandupEntries to delete.
     */
    limit?: number
  }

  /**
   * StandupEntry.team
   */
  export type StandupEntry$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * StandupEntry without action
   */
  export type StandupEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupEntry
     */
    select?: StandupEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandupEntry
     */
    omit?: StandupEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupEntryInclude<ExtArgs> | null
  }


  /**
   * Model ParticipationSnapshot
   */

  export type AggregateParticipationSnapshot = {
    _count: ParticipationSnapshotCountAggregateOutputType | null
    _avg: ParticipationSnapshotAvgAggregateOutputType | null
    _sum: ParticipationSnapshotSumAggregateOutputType | null
    _min: ParticipationSnapshotMinAggregateOutputType | null
    _max: ParticipationSnapshotMaxAggregateOutputType | null
  }

  export type ParticipationSnapshotAvgAggregateOutputType = {
    filled: number | null
    missing: number | null
  }

  export type ParticipationSnapshotSumAggregateOutputType = {
    filled: number | null
    missing: number | null
  }

  export type ParticipationSnapshotMinAggregateOutputType = {
    id: string | null
    weekOf: Date | null
    workspaceId: string | null
    filled: number | null
    missing: number | null
    createdAt: Date | null
  }

  export type ParticipationSnapshotMaxAggregateOutputType = {
    id: string | null
    weekOf: Date | null
    workspaceId: string | null
    filled: number | null
    missing: number | null
    createdAt: Date | null
  }

  export type ParticipationSnapshotCountAggregateOutputType = {
    id: number
    weekOf: number
    workspaceId: number
    filled: number
    missing: number
    streakLeaders: number
    blockersTop: number
    createdAt: number
    _all: number
  }


  export type ParticipationSnapshotAvgAggregateInputType = {
    filled?: true
    missing?: true
  }

  export type ParticipationSnapshotSumAggregateInputType = {
    filled?: true
    missing?: true
  }

  export type ParticipationSnapshotMinAggregateInputType = {
    id?: true
    weekOf?: true
    workspaceId?: true
    filled?: true
    missing?: true
    createdAt?: true
  }

  export type ParticipationSnapshotMaxAggregateInputType = {
    id?: true
    weekOf?: true
    workspaceId?: true
    filled?: true
    missing?: true
    createdAt?: true
  }

  export type ParticipationSnapshotCountAggregateInputType = {
    id?: true
    weekOf?: true
    workspaceId?: true
    filled?: true
    missing?: true
    streakLeaders?: true
    blockersTop?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipationSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipationSnapshot to aggregate.
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationSnapshots to fetch.
     */
    orderBy?: ParticipationSnapshotOrderByWithRelationInput | ParticipationSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipationSnapshots
    **/
    _count?: true | ParticipationSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationSnapshotMaxAggregateInputType
  }

  export type GetParticipationSnapshotAggregateType<T extends ParticipationSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipationSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipationSnapshot[P]>
      : GetScalarType<T[P], AggregateParticipationSnapshot[P]>
  }




  export type ParticipationSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationSnapshotWhereInput
    orderBy?: ParticipationSnapshotOrderByWithAggregationInput | ParticipationSnapshotOrderByWithAggregationInput[]
    by: ParticipationSnapshotScalarFieldEnum[] | ParticipationSnapshotScalarFieldEnum
    having?: ParticipationSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationSnapshotCountAggregateInputType | true
    _avg?: ParticipationSnapshotAvgAggregateInputType
    _sum?: ParticipationSnapshotSumAggregateInputType
    _min?: ParticipationSnapshotMinAggregateInputType
    _max?: ParticipationSnapshotMaxAggregateInputType
  }

  export type ParticipationSnapshotGroupByOutputType = {
    id: string
    weekOf: Date
    workspaceId: string
    filled: number
    missing: number
    streakLeaders: JsonValue
    blockersTop: JsonValue
    createdAt: Date
    _count: ParticipationSnapshotCountAggregateOutputType | null
    _avg: ParticipationSnapshotAvgAggregateOutputType | null
    _sum: ParticipationSnapshotSumAggregateOutputType | null
    _min: ParticipationSnapshotMinAggregateOutputType | null
    _max: ParticipationSnapshotMaxAggregateOutputType | null
  }

  type GetParticipationSnapshotGroupByPayload<T extends ParticipationSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekOf?: boolean
    workspaceId?: boolean
    filled?: boolean
    missing?: boolean
    streakLeaders?: boolean
    blockersTop?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["participationSnapshot"]>

  export type ParticipationSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekOf?: boolean
    workspaceId?: boolean
    filled?: boolean
    missing?: boolean
    streakLeaders?: boolean
    blockersTop?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["participationSnapshot"]>

  export type ParticipationSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekOf?: boolean
    workspaceId?: boolean
    filled?: boolean
    missing?: boolean
    streakLeaders?: boolean
    blockersTop?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["participationSnapshot"]>

  export type ParticipationSnapshotSelectScalar = {
    id?: boolean
    weekOf?: boolean
    workspaceId?: boolean
    filled?: boolean
    missing?: boolean
    streakLeaders?: boolean
    blockersTop?: boolean
    createdAt?: boolean
  }

  export type ParticipationSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekOf" | "workspaceId" | "filled" | "missing" | "streakLeaders" | "blockersTop" | "createdAt", ExtArgs["result"]["participationSnapshot"]>

  export type $ParticipationSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipationSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekOf: Date
      workspaceId: string
      filled: number
      missing: number
      streakLeaders: Prisma.JsonValue
      blockersTop: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["participationSnapshot"]>
    composites: {}
  }

  type ParticipationSnapshotGetPayload<S extends boolean | null | undefined | ParticipationSnapshotDefaultArgs> = $Result.GetResult<Prisma.$ParticipationSnapshotPayload, S>

  type ParticipationSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipationSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationSnapshotCountAggregateInputType | true
    }

  export interface ParticipationSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipationSnapshot'], meta: { name: 'ParticipationSnapshot' } }
    /**
     * Find zero or one ParticipationSnapshot that matches the filter.
     * @param {ParticipationSnapshotFindUniqueArgs} args - Arguments to find a ParticipationSnapshot
     * @example
     * // Get one ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationSnapshotFindUniqueArgs>(args: SelectSubset<T, ParticipationSnapshotFindUniqueArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipationSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipationSnapshotFindUniqueOrThrowArgs} args - Arguments to find a ParticipationSnapshot
     * @example
     * // Get one ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipationSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotFindFirstArgs} args - Arguments to find a ParticipationSnapshot
     * @example
     * // Get one ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationSnapshotFindFirstArgs>(args?: SelectSubset<T, ParticipationSnapshotFindFirstArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipationSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotFindFirstOrThrowArgs} args - Arguments to find a ParticipationSnapshot
     * @example
     * // Get one ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipationSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipationSnapshots
     * const participationSnapshots = await prisma.participationSnapshot.findMany()
     * 
     * // Get first 10 ParticipationSnapshots
     * const participationSnapshots = await prisma.participationSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationSnapshotWithIdOnly = await prisma.participationSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationSnapshotFindManyArgs>(args?: SelectSubset<T, ParticipationSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipationSnapshot.
     * @param {ParticipationSnapshotCreateArgs} args - Arguments to create a ParticipationSnapshot.
     * @example
     * // Create one ParticipationSnapshot
     * const ParticipationSnapshot = await prisma.participationSnapshot.create({
     *   data: {
     *     // ... data to create a ParticipationSnapshot
     *   }
     * })
     * 
     */
    create<T extends ParticipationSnapshotCreateArgs>(args: SelectSubset<T, ParticipationSnapshotCreateArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipationSnapshots.
     * @param {ParticipationSnapshotCreateManyArgs} args - Arguments to create many ParticipationSnapshots.
     * @example
     * // Create many ParticipationSnapshots
     * const participationSnapshot = await prisma.participationSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationSnapshotCreateManyArgs>(args?: SelectSubset<T, ParticipationSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipationSnapshots and returns the data saved in the database.
     * @param {ParticipationSnapshotCreateManyAndReturnArgs} args - Arguments to create many ParticipationSnapshots.
     * @example
     * // Create many ParticipationSnapshots
     * const participationSnapshot = await prisma.participationSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipationSnapshots and only return the `id`
     * const participationSnapshotWithIdOnly = await prisma.participationSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipationSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipationSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipationSnapshot.
     * @param {ParticipationSnapshotDeleteArgs} args - Arguments to delete one ParticipationSnapshot.
     * @example
     * // Delete one ParticipationSnapshot
     * const ParticipationSnapshot = await prisma.participationSnapshot.delete({
     *   where: {
     *     // ... filter to delete one ParticipationSnapshot
     *   }
     * })
     * 
     */
    delete<T extends ParticipationSnapshotDeleteArgs>(args: SelectSubset<T, ParticipationSnapshotDeleteArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipationSnapshot.
     * @param {ParticipationSnapshotUpdateArgs} args - Arguments to update one ParticipationSnapshot.
     * @example
     * // Update one ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationSnapshotUpdateArgs>(args: SelectSubset<T, ParticipationSnapshotUpdateArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipationSnapshots.
     * @param {ParticipationSnapshotDeleteManyArgs} args - Arguments to filter ParticipationSnapshots to delete.
     * @example
     * // Delete a few ParticipationSnapshots
     * const { count } = await prisma.participationSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationSnapshotDeleteManyArgs>(args?: SelectSubset<T, ParticipationSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipationSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipationSnapshots
     * const participationSnapshot = await prisma.participationSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationSnapshotUpdateManyArgs>(args: SelectSubset<T, ParticipationSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipationSnapshots and returns the data updated in the database.
     * @param {ParticipationSnapshotUpdateManyAndReturnArgs} args - Arguments to update many ParticipationSnapshots.
     * @example
     * // Update many ParticipationSnapshots
     * const participationSnapshot = await prisma.participationSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipationSnapshots and only return the `id`
     * const participationSnapshotWithIdOnly = await prisma.participationSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipationSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipationSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipationSnapshot.
     * @param {ParticipationSnapshotUpsertArgs} args - Arguments to update or create a ParticipationSnapshot.
     * @example
     * // Update or create a ParticipationSnapshot
     * const participationSnapshot = await prisma.participationSnapshot.upsert({
     *   create: {
     *     // ... data to create a ParticipationSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipationSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationSnapshotUpsertArgs>(args: SelectSubset<T, ParticipationSnapshotUpsertArgs<ExtArgs>>): Prisma__ParticipationSnapshotClient<$Result.GetResult<Prisma.$ParticipationSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipationSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotCountArgs} args - Arguments to filter ParticipationSnapshots to count.
     * @example
     * // Count the number of ParticipationSnapshots
     * const count = await prisma.participationSnapshot.count({
     *   where: {
     *     // ... the filter for the ParticipationSnapshots we want to count
     *   }
     * })
    **/
    count<T extends ParticipationSnapshotCountArgs>(
      args?: Subset<T, ParticipationSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipationSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipationSnapshotAggregateArgs>(args: Subset<T, ParticipationSnapshotAggregateArgs>): Prisma.PrismaPromise<GetParticipationSnapshotAggregateType<T>>

    /**
     * Group by ParticipationSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationSnapshotGroupByArgs} args - Group by arguments.
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
      T extends ParticipationSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipationSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipationSnapshot model
   */
  readonly fields: ParticipationSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipationSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ParticipationSnapshot model
   */
  interface ParticipationSnapshotFieldRefs {
    readonly id: FieldRef<"ParticipationSnapshot", 'String'>
    readonly weekOf: FieldRef<"ParticipationSnapshot", 'DateTime'>
    readonly workspaceId: FieldRef<"ParticipationSnapshot", 'String'>
    readonly filled: FieldRef<"ParticipationSnapshot", 'Int'>
    readonly missing: FieldRef<"ParticipationSnapshot", 'Int'>
    readonly streakLeaders: FieldRef<"ParticipationSnapshot", 'Json'>
    readonly blockersTop: FieldRef<"ParticipationSnapshot", 'Json'>
    readonly createdAt: FieldRef<"ParticipationSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipationSnapshot findUnique
   */
  export type ParticipationSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ParticipationSnapshot to fetch.
     */
    where: ParticipationSnapshotWhereUniqueInput
  }

  /**
   * ParticipationSnapshot findUniqueOrThrow
   */
  export type ParticipationSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ParticipationSnapshot to fetch.
     */
    where: ParticipationSnapshotWhereUniqueInput
  }

  /**
   * ParticipationSnapshot findFirst
   */
  export type ParticipationSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ParticipationSnapshot to fetch.
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationSnapshots to fetch.
     */
    orderBy?: ParticipationSnapshotOrderByWithRelationInput | ParticipationSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipationSnapshots.
     */
    cursor?: ParticipationSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipationSnapshots.
     */
    distinct?: ParticipationSnapshotScalarFieldEnum | ParticipationSnapshotScalarFieldEnum[]
  }

  /**
   * ParticipationSnapshot findFirstOrThrow
   */
  export type ParticipationSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ParticipationSnapshot to fetch.
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationSnapshots to fetch.
     */
    orderBy?: ParticipationSnapshotOrderByWithRelationInput | ParticipationSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipationSnapshots.
     */
    cursor?: ParticipationSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipationSnapshots.
     */
    distinct?: ParticipationSnapshotScalarFieldEnum | ParticipationSnapshotScalarFieldEnum[]
  }

  /**
   * ParticipationSnapshot findMany
   */
  export type ParticipationSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ParticipationSnapshots to fetch.
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationSnapshots to fetch.
     */
    orderBy?: ParticipationSnapshotOrderByWithRelationInput | ParticipationSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipationSnapshots.
     */
    cursor?: ParticipationSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationSnapshots.
     */
    skip?: number
    distinct?: ParticipationSnapshotScalarFieldEnum | ParticipationSnapshotScalarFieldEnum[]
  }

  /**
   * ParticipationSnapshot create
   */
  export type ParticipationSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a ParticipationSnapshot.
     */
    data: XOR<ParticipationSnapshotCreateInput, ParticipationSnapshotUncheckedCreateInput>
  }

  /**
   * ParticipationSnapshot createMany
   */
  export type ParticipationSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipationSnapshots.
     */
    data: ParticipationSnapshotCreateManyInput | ParticipationSnapshotCreateManyInput[]
  }

  /**
   * ParticipationSnapshot createManyAndReturn
   */
  export type ParticipationSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipationSnapshots.
     */
    data: ParticipationSnapshotCreateManyInput | ParticipationSnapshotCreateManyInput[]
  }

  /**
   * ParticipationSnapshot update
   */
  export type ParticipationSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a ParticipationSnapshot.
     */
    data: XOR<ParticipationSnapshotUpdateInput, ParticipationSnapshotUncheckedUpdateInput>
    /**
     * Choose, which ParticipationSnapshot to update.
     */
    where: ParticipationSnapshotWhereUniqueInput
  }

  /**
   * ParticipationSnapshot updateMany
   */
  export type ParticipationSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipationSnapshots.
     */
    data: XOR<ParticipationSnapshotUpdateManyMutationInput, ParticipationSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ParticipationSnapshots to update
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * Limit how many ParticipationSnapshots to update.
     */
    limit?: number
  }

  /**
   * ParticipationSnapshot updateManyAndReturn
   */
  export type ParticipationSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update ParticipationSnapshots.
     */
    data: XOR<ParticipationSnapshotUpdateManyMutationInput, ParticipationSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ParticipationSnapshots to update
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * Limit how many ParticipationSnapshots to update.
     */
    limit?: number
  }

  /**
   * ParticipationSnapshot upsert
   */
  export type ParticipationSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the ParticipationSnapshot to update in case it exists.
     */
    where: ParticipationSnapshotWhereUniqueInput
    /**
     * In case the ParticipationSnapshot found by the `where` argument doesn't exist, create a new ParticipationSnapshot with this data.
     */
    create: XOR<ParticipationSnapshotCreateInput, ParticipationSnapshotUncheckedCreateInput>
    /**
     * In case the ParticipationSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationSnapshotUpdateInput, ParticipationSnapshotUncheckedUpdateInput>
  }

  /**
   * ParticipationSnapshot delete
   */
  export type ParticipationSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
    /**
     * Filter which ParticipationSnapshot to delete.
     */
    where: ParticipationSnapshotWhereUniqueInput
  }

  /**
   * ParticipationSnapshot deleteMany
   */
  export type ParticipationSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipationSnapshots to delete
     */
    where?: ParticipationSnapshotWhereInput
    /**
     * Limit how many ParticipationSnapshots to delete.
     */
    limit?: number
  }

  /**
   * ParticipationSnapshot without action
   */
  export type ParticipationSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationSnapshot
     */
    select?: ParticipationSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationSnapshot
     */
    omit?: ParticipationSnapshotOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    slackTeamId: 'slackTeamId',
    name: 'name',
    timezone: 'timezone',
    channelId: 'channelId',
    botToken: 'botToken',
    createdAt: 'createdAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    workspaceId: 'workspaceId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    slackUserId: 'slackUserId',
    realName: 'realName',
    displayName: 'displayName',
    workspaceId: 'workspaceId',
    teamId: 'teamId',
    streak: 'streak',
    lastSubmit: 'lastSubmit'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StandupEntryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    workspaceId: 'workspaceId',
    teamId: 'teamId',
    yesterday: 'yesterday',
    today: 'today',
    blockers: 'blockers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StandupEntryScalarFieldEnum = (typeof StandupEntryScalarFieldEnum)[keyof typeof StandupEntryScalarFieldEnum]


  export const ParticipationSnapshotScalarFieldEnum: {
    id: 'id',
    weekOf: 'weekOf',
    workspaceId: 'workspaceId',
    filled: 'filled',
    missing: 'missing',
    streakLeaders: 'streakLeaders',
    blockersTop: 'blockersTop',
    createdAt: 'createdAt'
  };

  export type ParticipationSnapshotScalarFieldEnum = (typeof ParticipationSnapshotScalarFieldEnum)[keyof typeof ParticipationSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    slackTeamId?: StringFilter<"Workspace"> | string
    name?: StringNullableFilter<"Workspace"> | string | null
    timezone?: StringFilter<"Workspace"> | string
    channelId?: StringNullableFilter<"Workspace"> | string | null
    botToken?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    teams?: TeamListRelationFilter
    entries?: StandupEntryListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    slackTeamId?: SortOrder
    name?: SortOrderInput | SortOrder
    timezone?: SortOrder
    channelId?: SortOrderInput | SortOrder
    botToken?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    entries?: StandupEntryOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slackTeamId?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringNullableFilter<"Workspace"> | string | null
    timezone?: StringFilter<"Workspace"> | string
    channelId?: StringNullableFilter<"Workspace"> | string | null
    botToken?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    teams?: TeamListRelationFilter
    entries?: StandupEntryListRelationFilter
  }, "id" | "slackTeamId">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    slackTeamId?: SortOrder
    name?: SortOrderInput | SortOrder
    timezone?: SortOrder
    channelId?: SortOrderInput | SortOrder
    botToken?: SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    slackTeamId?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    timezone?: StringWithAggregatesFilter<"Workspace"> | string
    channelId?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    botToken?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    workspaceId?: StringFilter<"Team"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    users?: UserListRelationFilter
    standupEntries?: StandupEntryListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    standupEntries?: StandupEntryOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    workspaceId?: StringFilter<"Team"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    users?: UserListRelationFilter
    standupEntries?: StandupEntryListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    workspaceId?: StringWithAggregatesFilter<"Team"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    slackUserId?: StringFilter<"User"> | string
    realName?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    workspaceId?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    lastSubmit?: DateTimeNullableFilter<"User"> | Date | string | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    entries?: StandupEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    slackUserId?: SortOrder
    realName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    streak?: SortOrder
    lastSubmit?: SortOrderInput | SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    entries?: StandupEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slackUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    realName?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    workspaceId?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    lastSubmit?: DateTimeNullableFilter<"User"> | Date | string | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    entries?: StandupEntryListRelationFilter
  }, "id" | "slackUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    slackUserId?: SortOrder
    realName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    streak?: SortOrder
    lastSubmit?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    slackUserId?: StringWithAggregatesFilter<"User"> | string
    realName?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    workspaceId?: StringWithAggregatesFilter<"User"> | string
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    streak?: IntWithAggregatesFilter<"User"> | number
    lastSubmit?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type StandupEntryWhereInput = {
    AND?: StandupEntryWhereInput | StandupEntryWhereInput[]
    OR?: StandupEntryWhereInput[]
    NOT?: StandupEntryWhereInput | StandupEntryWhereInput[]
    id?: StringFilter<"StandupEntry"> | string
    date?: DateTimeFilter<"StandupEntry"> | Date | string
    userId?: StringFilter<"StandupEntry"> | string
    workspaceId?: StringFilter<"StandupEntry"> | string
    teamId?: StringNullableFilter<"StandupEntry"> | string | null
    yesterday?: StringFilter<"StandupEntry"> | string
    today?: StringFilter<"StandupEntry"> | string
    blockers?: StringNullableFilter<"StandupEntry"> | string | null
    createdAt?: DateTimeFilter<"StandupEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StandupEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type StandupEntryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type StandupEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StandupEntryWhereInput | StandupEntryWhereInput[]
    OR?: StandupEntryWhereInput[]
    NOT?: StandupEntryWhereInput | StandupEntryWhereInput[]
    date?: DateTimeFilter<"StandupEntry"> | Date | string
    userId?: StringFilter<"StandupEntry"> | string
    workspaceId?: StringFilter<"StandupEntry"> | string
    teamId?: StringNullableFilter<"StandupEntry"> | string | null
    yesterday?: StringFilter<"StandupEntry"> | string
    today?: StringFilter<"StandupEntry"> | string
    blockers?: StringNullableFilter<"StandupEntry"> | string | null
    createdAt?: DateTimeFilter<"StandupEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StandupEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id">

  export type StandupEntryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StandupEntryCountOrderByAggregateInput
    _max?: StandupEntryMaxOrderByAggregateInput
    _min?: StandupEntryMinOrderByAggregateInput
  }

  export type StandupEntryScalarWhereWithAggregatesInput = {
    AND?: StandupEntryScalarWhereWithAggregatesInput | StandupEntryScalarWhereWithAggregatesInput[]
    OR?: StandupEntryScalarWhereWithAggregatesInput[]
    NOT?: StandupEntryScalarWhereWithAggregatesInput | StandupEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StandupEntry"> | string
    date?: DateTimeWithAggregatesFilter<"StandupEntry"> | Date | string
    userId?: StringWithAggregatesFilter<"StandupEntry"> | string
    workspaceId?: StringWithAggregatesFilter<"StandupEntry"> | string
    teamId?: StringNullableWithAggregatesFilter<"StandupEntry"> | string | null
    yesterday?: StringWithAggregatesFilter<"StandupEntry"> | string
    today?: StringWithAggregatesFilter<"StandupEntry"> | string
    blockers?: StringNullableWithAggregatesFilter<"StandupEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StandupEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StandupEntry"> | Date | string
  }

  export type ParticipationSnapshotWhereInput = {
    AND?: ParticipationSnapshotWhereInput | ParticipationSnapshotWhereInput[]
    OR?: ParticipationSnapshotWhereInput[]
    NOT?: ParticipationSnapshotWhereInput | ParticipationSnapshotWhereInput[]
    id?: StringFilter<"ParticipationSnapshot"> | string
    weekOf?: DateTimeFilter<"ParticipationSnapshot"> | Date | string
    workspaceId?: StringFilter<"ParticipationSnapshot"> | string
    filled?: IntFilter<"ParticipationSnapshot"> | number
    missing?: IntFilter<"ParticipationSnapshot"> | number
    streakLeaders?: JsonFilter<"ParticipationSnapshot">
    blockersTop?: JsonFilter<"ParticipationSnapshot">
    createdAt?: DateTimeFilter<"ParticipationSnapshot"> | Date | string
  }

  export type ParticipationSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    weekOf?: SortOrder
    workspaceId?: SortOrder
    filled?: SortOrder
    missing?: SortOrder
    streakLeaders?: SortOrder
    blockersTop?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipationSnapshotWhereInput | ParticipationSnapshotWhereInput[]
    OR?: ParticipationSnapshotWhereInput[]
    NOT?: ParticipationSnapshotWhereInput | ParticipationSnapshotWhereInput[]
    weekOf?: DateTimeFilter<"ParticipationSnapshot"> | Date | string
    workspaceId?: StringFilter<"ParticipationSnapshot"> | string
    filled?: IntFilter<"ParticipationSnapshot"> | number
    missing?: IntFilter<"ParticipationSnapshot"> | number
    streakLeaders?: JsonFilter<"ParticipationSnapshot">
    blockersTop?: JsonFilter<"ParticipationSnapshot">
    createdAt?: DateTimeFilter<"ParticipationSnapshot"> | Date | string
  }, "id">

  export type ParticipationSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    weekOf?: SortOrder
    workspaceId?: SortOrder
    filled?: SortOrder
    missing?: SortOrder
    streakLeaders?: SortOrder
    blockersTop?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipationSnapshotCountOrderByAggregateInput
    _avg?: ParticipationSnapshotAvgOrderByAggregateInput
    _max?: ParticipationSnapshotMaxOrderByAggregateInput
    _min?: ParticipationSnapshotMinOrderByAggregateInput
    _sum?: ParticipationSnapshotSumOrderByAggregateInput
  }

  export type ParticipationSnapshotScalarWhereWithAggregatesInput = {
    AND?: ParticipationSnapshotScalarWhereWithAggregatesInput | ParticipationSnapshotScalarWhereWithAggregatesInput[]
    OR?: ParticipationSnapshotScalarWhereWithAggregatesInput[]
    NOT?: ParticipationSnapshotScalarWhereWithAggregatesInput | ParticipationSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParticipationSnapshot"> | string
    weekOf?: DateTimeWithAggregatesFilter<"ParticipationSnapshot"> | Date | string
    workspaceId?: StringWithAggregatesFilter<"ParticipationSnapshot"> | string
    filled?: IntWithAggregatesFilter<"ParticipationSnapshot"> | number
    missing?: IntWithAggregatesFilter<"ParticipationSnapshot"> | number
    streakLeaders?: JsonWithAggregatesFilter<"ParticipationSnapshot">
    blockersTop?: JsonWithAggregatesFilter<"ParticipationSnapshot">
    createdAt?: DateTimeWithAggregatesFilter<"ParticipationSnapshot"> | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    workspace: WorkspaceCreateNestedOneWithoutTeamsInput
    users?: UserCreateNestedManyWithoutTeamInput
    standupEntries?: StandupEntryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    workspaceId: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
    standupEntries?: StandupEntryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTeamsNestedInput
    users?: UserUpdateManyWithoutTeamNestedInput
    standupEntries?: StandupEntryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
    standupEntries?: StandupEntryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    workspaceId: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    entries?: StandupEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    workspaceId: string
    teamId?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    entries?: StandupEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    entries?: StandupEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entries?: StandupEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    workspaceId: string
    teamId?: string | null
    streak?: number
    lastSubmit?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StandupEntryCreateInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
    workspace: WorkspaceCreateNestedOneWithoutEntriesInput
    team?: TeamCreateNestedOneWithoutStandupEntriesInput
  }

  export type StandupEntryUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    workspaceId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutEntriesNestedInput
    team?: TeamUpdateOneWithoutStandupEntriesNestedInput
  }

  export type StandupEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    workspaceId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationSnapshotCreateInput = {
    id?: string
    weekOf: Date | string
    workspaceId: string
    filled: number
    missing: number
    streakLeaders: JsonNullValueInput | InputJsonValue
    blockersTop: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ParticipationSnapshotUncheckedCreateInput = {
    id?: string
    weekOf: Date | string
    workspaceId: string
    filled: number
    missing: number
    streakLeaders: JsonNullValueInput | InputJsonValue
    blockersTop: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ParticipationSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekOf?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    filled?: IntFieldUpdateOperationsInput | number
    missing?: IntFieldUpdateOperationsInput | number
    streakLeaders?: JsonNullValueInput | InputJsonValue
    blockersTop?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekOf?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    filled?: IntFieldUpdateOperationsInput | number
    missing?: IntFieldUpdateOperationsInput | number
    streakLeaders?: JsonNullValueInput | InputJsonValue
    blockersTop?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationSnapshotCreateManyInput = {
    id?: string
    weekOf: Date | string
    workspaceId: string
    filled: number
    missing: number
    streakLeaders: JsonNullValueInput | InputJsonValue
    blockersTop: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ParticipationSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekOf?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    filled?: IntFieldUpdateOperationsInput | number
    missing?: IntFieldUpdateOperationsInput | number
    streakLeaders?: JsonNullValueInput | InputJsonValue
    blockersTop?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekOf?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    filled?: IntFieldUpdateOperationsInput | number
    missing?: IntFieldUpdateOperationsInput | number
    streakLeaders?: JsonNullValueInput | InputJsonValue
    blockersTop?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type StandupEntryListRelationFilter = {
    every?: StandupEntryWhereInput
    some?: StandupEntryWhereInput
    none?: StandupEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StandupEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    slackTeamId?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    channelId?: SortOrder
    botToken?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    slackTeamId?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    channelId?: SortOrder
    botToken?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    slackTeamId?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    channelId?: SortOrder
    botToken?: SortOrder
    createdAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
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

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    slackUserId?: SortOrder
    realName?: SortOrder
    displayName?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    streak?: SortOrder
    lastSubmit?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    streak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    slackUserId?: SortOrder
    realName?: SortOrder
    displayName?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    streak?: SortOrder
    lastSubmit?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    slackUserId?: SortOrder
    realName?: SortOrder
    displayName?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    streak?: SortOrder
    lastSubmit?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    streak?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StandupEntryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandupEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandupEntryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ParticipationSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    weekOf?: SortOrder
    workspaceId?: SortOrder
    filled?: SortOrder
    missing?: SortOrder
    streakLeaders?: SortOrder
    blockersTop?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationSnapshotAvgOrderByAggregateInput = {
    filled?: SortOrder
    missing?: SortOrder
  }

  export type ParticipationSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    weekOf?: SortOrder
    workspaceId?: SortOrder
    filled?: SortOrder
    missing?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    weekOf?: SortOrder
    workspaceId?: SortOrder
    filled?: SortOrder
    missing?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationSnapshotSumOrderByAggregateInput = {
    filled?: SortOrder
    missing?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type StandupEntryCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput> | StandupEntryCreateWithoutWorkspaceInput[] | StandupEntryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutWorkspaceInput | StandupEntryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: StandupEntryCreateManyWorkspaceInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type StandupEntryUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput> | StandupEntryCreateWithoutWorkspaceInput[] | StandupEntryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutWorkspaceInput | StandupEntryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: StandupEntryCreateManyWorkspaceInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutWorkspaceInput | TeamUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutWorkspaceInput | TeamUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutWorkspaceInput | TeamUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type StandupEntryUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput> | StandupEntryCreateWithoutWorkspaceInput[] | StandupEntryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutWorkspaceInput | StandupEntryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutWorkspaceInput | StandupEntryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: StandupEntryCreateManyWorkspaceInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutWorkspaceInput | StandupEntryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutWorkspaceInput | StandupEntryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutWorkspaceInput | TeamUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutWorkspaceInput | TeamUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutWorkspaceInput | TeamUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type StandupEntryUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput> | StandupEntryCreateWithoutWorkspaceInput[] | StandupEntryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutWorkspaceInput | StandupEntryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutWorkspaceInput | StandupEntryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: StandupEntryCreateManyWorkspaceInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutWorkspaceInput | StandupEntryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutWorkspaceInput | StandupEntryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutTeamsInput = {
    create?: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTeamsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StandupEntryCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput> | StandupEntryCreateWithoutTeamInput[] | StandupEntryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutTeamInput | StandupEntryCreateOrConnectWithoutTeamInput[]
    createMany?: StandupEntryCreateManyTeamInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StandupEntryUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput> | StandupEntryCreateWithoutTeamInput[] | StandupEntryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutTeamInput | StandupEntryCreateOrConnectWithoutTeamInput[]
    createMany?: StandupEntryCreateManyTeamInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTeamsInput
    upsert?: WorkspaceUpsertWithoutTeamsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTeamsInput, WorkspaceUpdateWithoutTeamsInput>, WorkspaceUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StandupEntryUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput> | StandupEntryCreateWithoutTeamInput[] | StandupEntryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutTeamInput | StandupEntryCreateOrConnectWithoutTeamInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutTeamInput | StandupEntryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StandupEntryCreateManyTeamInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutTeamInput | StandupEntryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutTeamInput | StandupEntryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StandupEntryUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput> | StandupEntryCreateWithoutTeamInput[] | StandupEntryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutTeamInput | StandupEntryCreateOrConnectWithoutTeamInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutTeamInput | StandupEntryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StandupEntryCreateManyTeamInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutTeamInput | StandupEntryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutTeamInput | StandupEntryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    connect?: TeamWhereUniqueInput
  }

  export type StandupEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput> | StandupEntryCreateWithoutUserInput[] | StandupEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutUserInput | StandupEntryCreateOrConnectWithoutUserInput[]
    createMany?: StandupEntryCreateManyUserInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type StandupEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput> | StandupEntryCreateWithoutUserInput[] | StandupEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutUserInput | StandupEntryCreateOrConnectWithoutUserInput[]
    createMany?: StandupEntryCreateManyUserInputEnvelope
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateOneWithoutUsersNestedInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    upsert?: TeamUpsertWithoutUsersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUsersInput, TeamUpdateWithoutUsersInput>, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type StandupEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput> | StandupEntryCreateWithoutUserInput[] | StandupEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutUserInput | StandupEntryCreateOrConnectWithoutUserInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutUserInput | StandupEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StandupEntryCreateManyUserInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutUserInput | StandupEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutUserInput | StandupEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type StandupEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput> | StandupEntryCreateWithoutUserInput[] | StandupEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupEntryCreateOrConnectWithoutUserInput | StandupEntryCreateOrConnectWithoutUserInput[]
    upsert?: StandupEntryUpsertWithWhereUniqueWithoutUserInput | StandupEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StandupEntryCreateManyUserInputEnvelope
    set?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    disconnect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    delete?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    connect?: StandupEntryWhereUniqueInput | StandupEntryWhereUniqueInput[]
    update?: StandupEntryUpdateWithWhereUniqueWithoutUserInput | StandupEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StandupEntryUpdateManyWithWhereWithoutUserInput | StandupEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEntriesInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutEntriesInput = {
    create?: XOR<WorkspaceCreateWithoutEntriesInput, WorkspaceUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEntriesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutStandupEntriesInput = {
    create?: XOR<TeamCreateWithoutStandupEntriesInput, TeamUncheckedCreateWithoutStandupEntriesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStandupEntriesInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    upsert?: UserUpsertWithoutEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntriesInput, UserUpdateWithoutEntriesInput>, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutEntriesInput, WorkspaceUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEntriesInput
    upsert?: WorkspaceUpsertWithoutEntriesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutEntriesInput, WorkspaceUpdateWithoutEntriesInput>, WorkspaceUncheckedUpdateWithoutEntriesInput>
  }

  export type TeamUpdateOneWithoutStandupEntriesNestedInput = {
    create?: XOR<TeamCreateWithoutStandupEntriesInput, TeamUncheckedCreateWithoutStandupEntriesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStandupEntriesInput
    upsert?: TeamUpsertWithoutStandupEntriesInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutStandupEntriesInput, TeamUpdateWithoutStandupEntriesInput>, TeamUncheckedUpdateWithoutStandupEntriesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutWorkspaceInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    team?: TeamCreateNestedOneWithoutUsersInput
    entries?: StandupEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    teamId?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    entries?: StandupEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserCreateManyWorkspaceInputEnvelope = {
    data: UserCreateManyWorkspaceInput | UserCreateManyWorkspaceInput[]
  }

  export type TeamCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutTeamInput
    standupEntries?: StandupEntryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
    standupEntries?: StandupEntryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput>
  }

  export type TeamCreateManyWorkspaceInputEnvelope = {
    data: TeamCreateManyWorkspaceInput | TeamCreateManyWorkspaceInput[]
  }

  export type StandupEntryCreateWithoutWorkspaceInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
    team?: TeamCreateNestedOneWithoutStandupEntriesInput
  }

  export type StandupEntryUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    date: Date | string
    userId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryCreateOrConnectWithoutWorkspaceInput = {
    where: StandupEntryWhereUniqueInput
    create: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput>
  }

  export type StandupEntryCreateManyWorkspaceInputEnvelope = {
    data: StandupEntryCreateManyWorkspaceInput | StandupEntryCreateManyWorkspaceInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    slackUserId?: StringFilter<"User"> | string
    realName?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    workspaceId?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    lastSubmit?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type TeamUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutWorkspaceInput, TeamUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutWorkspaceInput, TeamUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TeamUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    workspaceId?: StringFilter<"Team"> | string
  }

  export type StandupEntryUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: StandupEntryWhereUniqueInput
    update: XOR<StandupEntryUpdateWithoutWorkspaceInput, StandupEntryUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<StandupEntryCreateWithoutWorkspaceInput, StandupEntryUncheckedCreateWithoutWorkspaceInput>
  }

  export type StandupEntryUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: StandupEntryWhereUniqueInput
    data: XOR<StandupEntryUpdateWithoutWorkspaceInput, StandupEntryUncheckedUpdateWithoutWorkspaceInput>
  }

  export type StandupEntryUpdateManyWithWhereWithoutWorkspaceInput = {
    where: StandupEntryScalarWhereInput
    data: XOR<StandupEntryUpdateManyMutationInput, StandupEntryUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type StandupEntryScalarWhereInput = {
    AND?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
    OR?: StandupEntryScalarWhereInput[]
    NOT?: StandupEntryScalarWhereInput | StandupEntryScalarWhereInput[]
    id?: StringFilter<"StandupEntry"> | string
    date?: DateTimeFilter<"StandupEntry"> | Date | string
    userId?: StringFilter<"StandupEntry"> | string
    workspaceId?: StringFilter<"StandupEntry"> | string
    teamId?: StringNullableFilter<"StandupEntry"> | string | null
    yesterday?: StringFilter<"StandupEntry"> | string
    today?: StringFilter<"StandupEntry"> | string
    blockers?: StringNullableFilter<"StandupEntry"> | string | null
    createdAt?: DateTimeFilter<"StandupEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StandupEntry"> | Date | string
  }

  export type WorkspaceCreateWithoutTeamsInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTeamsInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTeamsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
    entries?: StandupEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    workspaceId: string
    streak?: number
    lastSubmit?: Date | string | null
    entries?: StandupEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
  }

  export type StandupEntryCreateWithoutTeamInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
    workspace: WorkspaceCreateNestedOneWithoutEntriesInput
  }

  export type StandupEntryUncheckedCreateWithoutTeamInput = {
    id?: string
    date: Date | string
    userId: string
    workspaceId: string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryCreateOrConnectWithoutTeamInput = {
    where: StandupEntryWhereUniqueInput
    create: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput>
  }

  export type StandupEntryCreateManyTeamInputEnvelope = {
    data: StandupEntryCreateManyTeamInput | StandupEntryCreateManyTeamInput[]
  }

  export type WorkspaceUpsertWithoutTeamsInput = {
    update: XOR<WorkspaceUpdateWithoutTeamsInput, WorkspaceUncheckedUpdateWithoutTeamsInput>
    create: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTeamsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTeamsInput, WorkspaceUncheckedUpdateWithoutTeamsInput>
  }

  export type WorkspaceUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type StandupEntryUpsertWithWhereUniqueWithoutTeamInput = {
    where: StandupEntryWhereUniqueInput
    update: XOR<StandupEntryUpdateWithoutTeamInput, StandupEntryUncheckedUpdateWithoutTeamInput>
    create: XOR<StandupEntryCreateWithoutTeamInput, StandupEntryUncheckedCreateWithoutTeamInput>
  }

  export type StandupEntryUpdateWithWhereUniqueWithoutTeamInput = {
    where: StandupEntryWhereUniqueInput
    data: XOR<StandupEntryUpdateWithoutTeamInput, StandupEntryUncheckedUpdateWithoutTeamInput>
  }

  export type StandupEntryUpdateManyWithWhereWithoutTeamInput = {
    where: StandupEntryScalarWhereInput
    data: XOR<StandupEntryUpdateManyMutationInput, StandupEntryUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    entries?: StandupEntryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type TeamCreateWithoutUsersInput = {
    id?: string
    name: string
    workspace: WorkspaceCreateNestedOneWithoutTeamsInput
    standupEntries?: StandupEntryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    workspaceId: string
    standupEntries?: StandupEntryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUsersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
  }

  export type StandupEntryCreateWithoutUserInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEntriesInput
    team?: TeamCreateNestedOneWithoutStandupEntriesInput
  }

  export type StandupEntryUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    workspaceId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryCreateOrConnectWithoutUserInput = {
    where: StandupEntryWhereUniqueInput
    create: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput>
  }

  export type StandupEntryCreateManyUserInputEnvelope = {
    data: StandupEntryCreateManyUserInput | StandupEntryCreateManyUserInput[]
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    entries?: StandupEntryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TeamUpsertWithoutUsersInput = {
    update: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTeamsNestedInput
    standupEntries?: StandupEntryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    standupEntries?: StandupEntryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type StandupEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: StandupEntryWhereUniqueInput
    update: XOR<StandupEntryUpdateWithoutUserInput, StandupEntryUncheckedUpdateWithoutUserInput>
    create: XOR<StandupEntryCreateWithoutUserInput, StandupEntryUncheckedCreateWithoutUserInput>
  }

  export type StandupEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: StandupEntryWhereUniqueInput
    data: XOR<StandupEntryUpdateWithoutUserInput, StandupEntryUncheckedUpdateWithoutUserInput>
  }

  export type StandupEntryUpdateManyWithWhereWithoutUserInput = {
    where: StandupEntryScalarWhereInput
    data: XOR<StandupEntryUpdateManyMutationInput, StandupEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutEntriesInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    streak?: number
    lastSubmit?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEntriesInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    workspaceId: string
    teamId?: string | null
    streak?: number
    lastSubmit?: Date | string | null
  }

  export type UserCreateOrConnectWithoutEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
  }

  export type WorkspaceCreateWithoutEntriesInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutEntriesInput = {
    id?: string
    slackTeamId: string
    name?: string | null
    timezone?: string
    channelId?: string | null
    botToken: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutEntriesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutEntriesInput, WorkspaceUncheckedCreateWithoutEntriesInput>
  }

  export type TeamCreateWithoutStandupEntriesInput = {
    id?: string
    name: string
    workspace: WorkspaceCreateNestedOneWithoutTeamsInput
    users?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutStandupEntriesInput = {
    id?: string
    name: string
    workspaceId: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutStandupEntriesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutStandupEntriesInput, TeamUncheckedCreateWithoutStandupEntriesInput>
  }

  export type UserUpsertWithoutEntriesInput = {
    update: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUpsertWithoutEntriesInput = {
    update: XOR<WorkspaceUpdateWithoutEntriesInput, WorkspaceUncheckedUpdateWithoutEntriesInput>
    create: XOR<WorkspaceCreateWithoutEntriesInput, WorkspaceUncheckedCreateWithoutEntriesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutEntriesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutEntriesInput, WorkspaceUncheckedUpdateWithoutEntriesInput>
  }

  export type WorkspaceUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackTeamId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    botToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TeamUpsertWithoutStandupEntriesInput = {
    update: XOR<TeamUpdateWithoutStandupEntriesInput, TeamUncheckedUpdateWithoutStandupEntriesInput>
    create: XOR<TeamCreateWithoutStandupEntriesInput, TeamUncheckedCreateWithoutStandupEntriesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutStandupEntriesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutStandupEntriesInput, TeamUncheckedUpdateWithoutStandupEntriesInput>
  }

  export type TeamUpdateWithoutStandupEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTeamsNestedInput
    users?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutStandupEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateManyWorkspaceInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    teamId?: string | null
    streak?: number
    lastSubmit?: Date | string | null
  }

  export type TeamCreateManyWorkspaceInput = {
    id?: string
    name: string
  }

  export type StandupEntryCreateManyWorkspaceInput = {
    id?: string
    date: Date | string
    userId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutUsersNestedInput
    entries?: StandupEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entries?: StandupEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTeamNestedInput
    standupEntries?: StandupEntryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
    standupEntries?: StandupEntryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StandupEntryUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    team?: TeamUpdateOneWithoutStandupEntriesNestedInput
  }

  export type StandupEntryUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyTeamInput = {
    id?: string
    slackUserId: string
    realName?: string | null
    displayName?: string | null
    workspaceId: string
    streak?: number
    lastSubmit?: Date | string | null
  }

  export type StandupEntryCreateManyTeamInput = {
    id?: string
    date: Date | string
    userId: string
    workspaceId: string
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
    entries?: StandupEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entries?: StandupEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    slackUserId?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    streak?: IntFieldUpdateOperationsInput | number
    lastSubmit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StandupEntryUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type StandupEntryUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryCreateManyUserInput = {
    id?: string
    date: Date | string
    workspaceId: string
    teamId?: string | null
    yesterday: string
    today: string
    blockers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEntriesNestedInput
    team?: TeamUpdateOneWithoutStandupEntriesNestedInput
  }

  export type StandupEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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