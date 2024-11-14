function App() {
	return (
		<div class='App'>
			<TitleNav />
			<Router>
				<Route path='/' component={Home} />
			</Router>
			<footer class='cntr tCntr'>Copyright &#169 "Name here"</footer>
		</div>
	);
}

export default App;