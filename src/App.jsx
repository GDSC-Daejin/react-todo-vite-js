import Layout from './layout/index.jsx';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        minHeight: '100vh',
      }}
    >
      <Layout />
    </div>
  );
}

export default App;
