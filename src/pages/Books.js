import React from "react";
import "./Books.css";
import Footer from "../components/Footer/Footer";
import chicago from "../assets/books/Chicago4.jpg";
import amsterdam from "../assets/books/Amsterdam1.jpg";
import london from "../assets/books/London1.jpg";
import Contact from "../components/Contact/Contact";

const Books = () => {
	return (
		<div className="books">
			<div className="container">
				<div className="books-container">
					<div className="books-left">
						<h2>Recommended Reading</h2>
						<p>
							Here is a list of titles that I find interesting and would like to
							shed some light on. I will split them into fiction and non-fiction
							and will add to the list once I come across more titles.
						</p>
						<img src={chicago} alt="" />
						<img src={amsterdam} alt="" />
						<img src={london} alt="" />
					</div>
					<div className="books-right">
						<h2>1. Non-Fiction</h2>
						<h1>Sinclair, Euan (2010). Option Trading. Wiley.</h1>
						<p>
							In the space of options, this is by far my favorite. Sinclair
							wrote Volatility Trading too, which I would also recommend
							reading. There is another title from him “Positional Option
							Trading”, yet this one is a bit niche and describes a few specific
							strategies. In Option Trading, Sinclair explains the basics of
							options and market making techniques in a very clear fashion. It
							has the right number of formulas (not too “mathy”, but also not
							too wordy). He even highlights the Black-Scholes formula in a
							comprehensive way. I’ve read the book/chapters at least ten times.
						</p>
						<h1>Natenberg, Sheldon (2014).</h1>
						<h1>Option Volatility & Pricing, 2nd Ed. McGraw Hill.</h1>
						<p>
							In the space of options, this is by far my favorite. Sinclair
							wrote Volatility Trading too, which I would also recommend
							reading. There is another title from him “Positional Option
							Trading”, yet this one is a bit niche and describes a few specific
							strategies. In Option Trading, Sinclair explains the basics of
							options and market making techniques in a very clear fashion. It
							has the right number of formulas (not too “mathy”, but also not
							too wordy). He even highlights the Black-Scholes formula in a
							comprehensive way. I’ve read the book/chapters at least ten times.
						</p>
						<h1>Hull, John (2021).</h1>
						<h1>Options, Futures and other Derivatives, 11th Ed. Pearson.</h1>
						<p>
							I consider this work more as an encyclopedia or reference work.
							This isn’t a title you will read front to back, as it is 880 pages
							and describes a wide collection of different asset classes in a
							mathematical way. So, in case you forgot how to calculate the
							price of a zero-coupon bond, it is a nice to have book, as you’ll
							find it easy to look up these things. One other pleasant element
							is the fact that all chapters include worked-out examples and
							exercises. This is a big plus for the self-taught student and also
							the reason that derivatives courses at universities oftentimes
							work with Hull.
						</p>
						<h1>Baxter, Martin & Rennie, Andrew (2010).</h1>
						<h1>Financial Calculus, 18th Ed. Cambridge</h1>
						<p>
							This work requires a proper mathematical background. What I like
							about it is the fact that it explains stochastic processes
							(discrete and continuous) related to finance, derivatives and
							arbitrage-free pricing in a very concise and intuitive way –
							provided you have a bit of a stats background here.
						</p>
						<h2>2. Fiction</h2>
						<h1>Natenberg, Sheldon (2014).</h1>
						<h1>Option Volatility & Pricing, 2nd Ed. McGraw Hill.</h1>
						<p>
							A great trading book that given its age is still extremely
							relevant to create a trading mindset. Lots of lessons and
							one-liners that attribute to the trading skill that can’t be
							taught in uni. Favorite quote (since the book is so old and still
							it holds): “Observation, experience, memory and mathematics –
							these are what the successful trader must depend on.”
						</p>
						<h1>Mackay, Charles (1995, orig. 1841).</h1>
						<h1>
							Extraordinary Popular Delusions and the Madness of Crowds.
							Wordsworth.
						</h1>
						<p>
							A thorough and fascinating presentation of a few tragic bubbles in
							global history. The work is crucial to anyone attempting a trading
							career as it shows how tempting certain “opportunities” are, while
							in hindsight these can be seen as obvious failures. Plenty of
							parallels with modern trading.
						</p>
					</div>
				</div>
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default Books;
