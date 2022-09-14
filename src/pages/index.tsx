/**
 * This is a Next.js page.
 */
import { trpc } from "../utils/trpc";

const styles = {
  width: "100vw",
  height: "100vh"
};

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  const query1 = trpc.foo["bar.qux"].useQuery();
  const query2 = trpc.foo.bar.qux.useQuery();

  if (!query1.data || !query2.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      {/**
       * The type is defined and can be autocompleted
       * 💡 Tip: Hover over `data` to see the result type
       * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
       * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
       */}
      <h1>the query defined by: `trpc.foo['bar.qux'].useQuery()`</h1>
      <br />
      <pre>{JSON.stringify(query1.data, null, 2)}</pre>
      <br />
      <br />

      <h1>the query defined by: `trpc.foo.bar.qux.useQuery()`</h1>
      <br />
      <pre>{JSON.stringify(query1.data, null, 2)}</pre>

      <br />
      <h1>Summary</h1>
      <p>
        tRPC currently cannot distinguish between router procedures defined as a
        proper sub router or just fauxed with a property name with a `.` in the
        title.
      </p>
      <p>
        The last procedure defined on the router is the one that gets taken and
        executed.{" "}
      </p>
      <p>
        To my mind because of this we should just be transparent and make the
        query keys the same however the proxy for a path is called (ie both
        trpc.foo["bar.qux"].useQuery() and trpc.foo.bar.qux.useQuery() shoudl
        have a query key of `[['foo','bar','qux']]`){" "}
      </p>
    </div>
  );
}
