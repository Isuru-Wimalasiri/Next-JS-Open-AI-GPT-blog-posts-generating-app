import { withPageAuthRequired } from '@auth0/nextjs-auth0';
export default function TokenTopup() {
  return <div>token-popup</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
