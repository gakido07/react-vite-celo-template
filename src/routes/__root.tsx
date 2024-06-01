import { Alfajores, CeloProvider, Mainnet } from '@celo/react-celo';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import '@celo/react-celo/lib/styles.css';
import { Notifications } from '@mantine/notifications';

const NETWORK = import.meta.env.VITE_MODE === 'development' ? Alfajores : Mainnet;
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <MantineProvider>
      <CeloProvider
        defaultNetwork={NETWORK.name}
        dapp={{
          name: import.meta.env.APPLICATION_NAME,
          description: import.meta.env.APPLICATION_DESCRIPTION,
          url: import.meta.env.APPLICATION_URL,
          walletConnectProjectId: import.meta.env.WALLET_CONNECT_PROJECT_ID,
          icon: '',
        }}
        networks={[NETWORK]}
      >
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <Notifications position="top-right" />
        </QueryClientProvider>
      </CeloProvider>
    </MantineProvider>
  ),
});
