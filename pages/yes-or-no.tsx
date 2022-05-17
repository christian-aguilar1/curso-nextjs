import Layout from "@components/Layout/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Header } from "semantic-ui-react";

type YesOrNOApiResponse = {
  data: "yes" | "no";
};

const fetchResult = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const urlComplete = dev
    ? "http://localhost:3000/api/yes-or-no"
    : "https://curso-nextjs-ashy.vercel.app/api/yes-or-no";

  const res = await fetch(urlComplete);
  const { data }: YesOrNOApiResponse = await res.json();

  return data;
};

export async function getServerSideProps() {
  const initialResult = await fetchResult();

  return {
    props: {
      initialResult,
    },
  };
}

const YesOrNO = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(initialResult);
  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    fetchResult()
      .then((initialResult) => {
        setResult(initialResult);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [triggerCount]);

  const onClick = async () => {
    setTriggerCount(triggerCount + 1);
  };

  return (
    <div>
      <Header as="h1" color={isLoading ? "grey" : "green"}>
        {result}
      </Header>
      <p>
        <Button
          color="green"
          onClick={onClick}
          loading={isLoading}
          disabled={isLoading}
        >
          Intentar de nuevo
        </Button>
      </p>
      <p>
        <Link href="/">
          <a className="ui black button basic">Volver al inicio</a>
        </Link>
      </p>

      <style jsx>
        {`
          div {
            text-align: center;
          }
          div :global(h1.header) {
            font-size: 7rem;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  );
};

export default YesOrNO;
