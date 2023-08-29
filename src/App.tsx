import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { getIssueListApi } from 'apis/getIssueList';
import { getIssueDetailApi } from 'apis/getIssueDetail';
import Layout from 'components/commons/Layout';
import IssueList from 'pages/IssueList';
import IssueDetail from 'pages/IssueDetail';
import Error from 'pages/Error';
import NotFound from 'pages/NotFound';

const App = () => {
  const router = createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        loader={getIssueListApi}
        element={<IssueList />}
        errorElement={<Error />}
      />
      <Route
        path=":id"
        loader={({ params }) => getIssueDetailApi(params.id!)}
        element={<IssueDetail />}
        errorElement={<NotFound />}
      />
    </Route>,
  );
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default App;
