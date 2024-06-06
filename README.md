# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Some use cases

## useSWR

```jsx
import useSWR from 'swr';

const Home = () => {
  const { data } = useSWR(
    'https://cedefi-api.nonprod-cedefi.manta.network/leaderboard'
  ); // just need a url, the default fetcher already pass in <SWRConfig

  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
```
