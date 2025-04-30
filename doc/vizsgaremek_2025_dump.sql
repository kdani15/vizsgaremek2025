--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Debian 16.8-1.pgdg120+1)
-- Dumped by pg_dump version 16.8 (Homebrew)

-- Started on 2025-04-30 10:50:06 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: moonuser
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO moonuser;

--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: moonuser
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16435)
-- Name: like; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public."like" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "userId" text,
    "movieId" text
);


ALTER TABLE public."like" OWNER TO moonuser;

--
-- TOC entry 220 (class 1259 OID 16446)
-- Name: movie; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public.movie (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    title character varying NOT NULL,
    "releaseYear" integer NOT NULL,
    description text NOT NULL,
    "posterImg" character varying(2048),
    "thumbnailImg" character varying(2048)
);


ALTER TABLE public.movie OWNER TO moonuser;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: rating; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public.rating (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    rating integer NOT NULL,
    "userId" text,
    "movieId" text
);


ALTER TABLE public.rating OWNER TO moonuser;

--
-- TOC entry 217 (class 1259 OID 16417)
-- Name: seen; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public.seen (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "userId" text,
    "movieId" text
);


ALTER TABLE public.seen OWNER TO moonuser;

--
-- TOC entry 218 (class 1259 OID 16426)
-- Name: user; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public."user" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO moonuser;

--
-- TOC entry 216 (class 1259 OID 16408)
-- Name: watchlist; Type: TABLE; Schema: public; Owner: moonuser
--

CREATE TABLE public.watchlist (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT now() NOT NULL,
    "userId" text,
    "movieId" text
);


ALTER TABLE public.watchlist OWNER TO moonuser;

--
-- TOC entry 3407 (class 0 OID 16435)
-- Dependencies: 219
-- Data for Name: like; Type: TABLE DATA; Schema: public; Owner: moonuser
--



--
-- TOC entry 3408 (class 0 OID 16446)
-- Dependencies: 220
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: moonuser
--

INSERT INTO public.movie VALUES ('c18298c1-91ce-43ac-81e5-1242ac136e59', '2025-04-29 19:12:48.656', '2025-04-29 19:12:48.656', 'Avatar', 2009, 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.', 'https://image.tmdb.org/t/p/original/kyeqWdyUXW608qlYkRqosgbbJyK.jpg', 'https://image.tmdb.org/t/p/w200/kyeqWdyUXW608qlYkRqosgbbJyK.jpg');
INSERT INTO public.movie VALUES ('6aded624-598d-42d6-9370-4abd8aa0f083', '2025-04-29 19:12:49.103', '2025-04-29 19:12:49.103', 'The Dark Knight', 2008, 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.', 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg');
INSERT INTO public.movie VALUES ('446a177c-cd74-44a2-9c31-d258a6db45ba', '2025-04-29 19:12:49.494', '2025-04-29 19:12:49.494', 'The Lord of the Rings: The Return of the King', 2003, 'As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​', 'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg', 'https://image.tmdb.org/t/p/w200/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg');
INSERT INTO public.movie VALUES ('3dacddbd-5a15-43d6-8d3f-744256178fbd', '2025-04-29 19:12:49.725', '2025-04-29 19:12:49.725', 'Gladiator', 1992, 'Tommy Riley has moved with his dad to Chicago from a ''nice place''. He keeps to himself, goes to school. However, after a street fight he is noticed and quickly falls into the world of illegal underground boxing - where punches can kill.', 'https://image.tmdb.org/t/p/original/w0YjBWVfu689txEXZG3xa4Aev3i.jpg', 'https://image.tmdb.org/t/p/w200/w0YjBWVfu689txEXZG3xa4Aev3i.jpg');
INSERT INTO public.movie VALUES ('259de4b6-80fa-4de1-9b3a-e9d70e8d3126', '2025-04-29 19:12:49.92', '2025-04-29 19:12:49.92', 'The Departed', 2006, 'To take down South Boston''s Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there''s a mole among them.', 'https://image.tmdb.org/t/p/original/nT97ifVT2J1yMQmeq20Qblg61T.jpg', 'https://image.tmdb.org/t/p/w200/nT97ifVT2J1yMQmeq20Qblg61T.jpg');
INSERT INTO public.movie VALUES ('1d341960-19e7-4fde-8e7c-9eab78b97c1d', '2025-04-29 19:12:50.17', '2025-04-29 19:12:50.17', 'No Country for Old Men', 2007, 'Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.', 'https://image.tmdb.org/t/p/original/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg', 'https://image.tmdb.org/t/p/w200/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg');
INSERT INTO public.movie VALUES ('06f74116-e992-4933-ac30-2bb28b8697df', '2025-04-29 19:12:50.559', '2025-04-29 19:12:50.559', 'The King''s Speech', 2010, 'The King''s Speech tells the story of the man who became King George VI, the father of Queen Elizabeth II. After his brother abdicates, George (''Bertie'') reluctantly assumes the throne. Plagued by a dreaded stutter and considered unfit to be king, Bertie engages the help of an unorthodox speech therapist named Lionel Logue. Through a set of unexpected techniques, and as a result of an unlikely friendship, Bertie is able to find his voice and boldly lead the country into war.', 'https://image.tmdb.org/t/p/original/pVNKXVQFukBaCz6ML7GH3kiPlQP.jpg', 'https://image.tmdb.org/t/p/w200/pVNKXVQFukBaCz6ML7GH3kiPlQP.jpg');
INSERT INTO public.movie VALUES ('05c3e9d1-d41f-4e17-8bc3-b1d3562bc1ac', '2025-04-29 19:12:50.793', '2025-04-29 19:12:50.793', 'Black Swan', 2010, 'The story of Nina, a ballerina in a New York City ballet company whose life, like all those in her profession, is completely consumed with dance. She lives with her retired ballerina mother Erica who zealously supports her daughter''s professional ambition. When artistic director Thomas Leroy decides to replace prima ballerina Beth MacIntyre for the opening production of their new season, Swan Lake, Nina is his first choice.', 'https://image.tmdb.org/t/p/original/viWheBd44bouiLCHgNMvahLThqx.jpg', 'https://image.tmdb.org/t/p/w200/viWheBd44bouiLCHgNMvahLThqx.jpg');
INSERT INTO public.movie VALUES ('6b7d56ec-242f-4f9f-93e8-3af9528e493f', '2025-04-29 19:12:51.001', '2025-04-29 19:12:51.001', 'The Social Network', 2010, 'In 2003, Harvard undergrad and computer programmer Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, Mark is one of the youngest billionaires ever, but his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend.', 'https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg', 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg');
INSERT INTO public.movie VALUES ('99b3f681-e72c-4394-9f87-bfe188cdedf4', '2025-04-29 19:12:51.228', '2025-04-29 19:12:51.228', 'The Artist', 2011, 'Hollywood, 1927: As silent movie star George Valentin wonders if the arrival of talking pictures will cause him to fade into oblivion, he sparks with Peppy Miller, a young dancer set for a big break.', 'https://image.tmdb.org/t/p/original/z68py0ZqPgeacGPG54AGVRbNBS7.jpg', 'https://image.tmdb.org/t/p/w200/z68py0ZqPgeacGPG54AGVRbNBS7.jpg');
INSERT INTO public.movie VALUES ('8ac353d9-ccba-4888-9f83-7993c7ef7bd9', '2025-04-29 19:12:51.43', '2025-04-29 19:12:51.43', 'Argo', 2012, 'As the Iranian revolution reaches a boiling point, a CIA ''exfiltration'' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.', 'https://image.tmdb.org/t/p/original/m5gPWFZFIp4UJFABgWyLkbXv8GX.jpg', 'https://image.tmdb.org/t/p/w200/m5gPWFZFIp4UJFABgWyLkbXv8GX.jpg');
INSERT INTO public.movie VALUES ('e520cbbf-6c80-474a-b8ee-1b86d5d3e41a', '2025-04-29 19:12:51.62', '2025-04-29 19:12:51.62', '12 Years a Slave', 2013, 'In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.', 'https://image.tmdb.org/t/p/original/xdANQijuNrJaw1HA61rDccME4Tm.jpg', 'https://image.tmdb.org/t/p/w200/xdANQijuNrJaw1HA61rDccME4Tm.jpg');
INSERT INTO public.movie VALUES ('5547942c-1bbd-4f25-bc4f-bac9b72032d1', '2025-04-29 19:12:51.847', '2025-04-29 19:12:51.847', 'Birdman', 2015, 'A portrait of Robert, a troubled but poetic soul struggling with his purgatorial existence in a hackney scrapyard.', 'https://image.tmdb.org/t/p/original/9n0u3Ee7OUjgeyF5kIwahxkf4xm.jpg', 'https://image.tmdb.org/t/p/w200/9n0u3Ee7OUjgeyF5kIwahxkf4xm.jpg');
INSERT INTO public.movie VALUES ('56377f04-06be-4567-a93c-3138465c5774', '2025-04-29 19:12:52.075', '2025-04-29 19:12:52.075', 'Spotlight', 2015, 'The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.', 'https://image.tmdb.org/t/p/original/8DPGG400FgaFWaqcv11n8mRd2NG.jpg', 'https://image.tmdb.org/t/p/w200/8DPGG400FgaFWaqcv11n8mRd2NG.jpg');
INSERT INTO public.movie VALUES ('2f45e30b-66e8-4497-af80-02da8d870b47', '2025-04-29 19:12:59.209', '2025-04-29 19:12:59.209', 'The Menu', 2022, 'A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.', 'https://image.tmdb.org/t/p/original/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg', 'https://image.tmdb.org/t/p/w200/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg');
INSERT INTO public.movie VALUES ('15e6da67-3147-48d0-802b-e237abd3971b', '2025-04-29 19:12:52.239', '2025-04-29 19:12:52.239', 'Moonlight', 2016, 'The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.', 'https://image.tmdb.org/t/p/original/rcICfiL9fvwRjoWHxW8QeroLYrJ.jpg', 'https://image.tmdb.org/t/p/w200/rcICfiL9fvwRjoWHxW8QeroLYrJ.jpg');
INSERT INTO public.movie VALUES ('729cc65d-19e6-4ed3-b254-b8ee52a62da1', '2025-04-29 19:12:52.441', '2025-04-29 19:12:52.441', 'The Shape of Water', 2017, 'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.', 'https://image.tmdb.org/t/p/original/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg', 'https://image.tmdb.org/t/p/w200/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg');
INSERT INTO public.movie VALUES ('129695f1-b7f4-4358-816f-0f6788c03865', '2025-04-29 19:12:52.629', '2025-04-29 19:12:52.629', 'Green Book', 2018, 'Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.', 'https://image.tmdb.org/t/p/original/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg', 'https://image.tmdb.org/t/p/w200/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg');
INSERT INTO public.movie VALUES ('96beef8b-6b66-4ca6-b1fd-e29ca611bc2d', '2025-04-29 19:12:52.85', '2025-04-29 19:12:52.85', 'Parasite', 1982, 'Paul Dean has created a deadly parasite that is now attached to his stomach. He and his female companion, Patricia Welles, must find a way to destroy it while also trying to avoid Ricus & his rednecks, and an evil government agent named Merchant.', 'https://image.tmdb.org/t/p/original/4DGPORlVIDIQvsuSDnM4uXKMjWS.jpg', 'https://image.tmdb.org/t/p/w200/4DGPORlVIDIQvsuSDnM4uXKMjWS.jpg');
INSERT INTO public.movie VALUES ('91347eaf-c599-44f4-adcc-8b61a7a65ff9', '2025-04-29 19:12:53.046', '2025-04-29 19:12:53.046', 'Nomadland', 2021, 'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.', 'https://image.tmdb.org/t/p/original/k5XzjWihzum1YgLMlqRDRZDmVMn.jpg', 'https://image.tmdb.org/t/p/w200/k5XzjWihzum1YgLMlqRDRZDmVMn.jpg');
INSERT INTO public.movie VALUES ('3a4335b6-61db-4e38-8fa1-d3245c8c0ab6', '2025-04-29 19:12:53.27', '2025-04-29 19:12:53.27', 'CODA', 2021, 'As a CODA (Child of Deaf Adults), Ruby is the only hearing person in her deaf family. When the family''s fishing business is threatened, Ruby finds herself torn between pursuing her love of music and her fear of abandoning her parents.', 'https://image.tmdb.org/t/p/original/BzVjmm8l23rPsijLiNLUzuQtyd.jpg', 'https://image.tmdb.org/t/p/w200/BzVjmm8l23rPsijLiNLUzuQtyd.jpg');
INSERT INTO public.movie VALUES ('783cd406-2572-4a3f-8e1c-1810b742c8fb', '2025-04-29 19:12:53.444', '2025-04-29 19:12:53.444', 'Everything Everywhere All at Once', 2022, 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what''s important to her by connecting with the lives she could have led in other universes.', 'https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg', 'https://image.tmdb.org/t/p/w200/u68AjlvlutfEIcpmbYpKcdi09ut.jpg');
INSERT INTO public.movie VALUES ('8b42f1f2-d6a3-425e-af40-7a8f9aa0ebb8', '2025-04-29 19:12:53.633', '2025-04-29 19:12:53.633', 'Oppenheimer', 2023, 'The story of J. Robert Oppenheimer''s role in the development of the atomic bomb during World War II.', 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', 'https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg');
INSERT INTO public.movie VALUES ('9af01fa4-2dad-4213-8f48-4a6e12961c67', '2025-04-29 19:12:53.828', '2025-04-29 19:12:53.828', 'Barbie', 2023, 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.', 'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', 'https://image.tmdb.org/t/p/w200/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg');
INSERT INTO public.movie VALUES ('25708c2c-e479-4695-b32f-228fe1ee6be6', '2025-04-29 19:12:54.016', '2025-04-29 19:12:54.016', 'The Irishman', 2019, 'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.', 'https://image.tmdb.org/t/p/original/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg', 'https://image.tmdb.org/t/p/w200/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg');
INSERT INTO public.movie VALUES ('c93e635e-cb9d-4a2a-9dae-b03fce1ef5ee', '2025-04-29 19:12:54.161', '2025-04-29 19:12:54.161', 'Once Upon a Time... in Hollywood', 2019, 'Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…', 'https://image.tmdb.org/t/p/original/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg', 'https://image.tmdb.org/t/p/w200/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg');
INSERT INTO public.movie VALUES ('21a4a01b-9893-4dc2-ae4e-ea4e9bf4052b', '2025-04-29 19:12:54.374', '2025-04-29 19:12:54.374', '1917', 2019, 'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.', 'https://image.tmdb.org/t/p/original/iZf0KyrE25z1sage4SYFLCCrMi9.jpg', 'https://image.tmdb.org/t/p/w200/iZf0KyrE25z1sage4SYFLCCrMi9.jpg');
INSERT INTO public.movie VALUES ('0435ed88-e513-40e1-a60e-9c37092d265a', '2025-04-29 19:12:54.597', '2025-04-29 19:12:54.597', 'Jojo Rabbit', 2019, 'A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.', 'https://image.tmdb.org/t/p/original/7GsM4mtM0worCtIVeiQt28HieeN.jpg', 'https://image.tmdb.org/t/p/w200/7GsM4mtM0worCtIVeiQt28HieeN.jpg');
INSERT INTO public.movie VALUES ('048ec2cd-40e8-448b-857f-2fcd32930fd3', '2025-04-29 19:12:54.847', '2025-04-29 19:12:54.847', 'Ford v Ferrari', 2019, 'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.', 'https://image.tmdb.org/t/p/original/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg', 'https://image.tmdb.org/t/p/w200/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg');
INSERT INTO public.movie VALUES ('2f996b77-c7ce-4c08-becf-69a7924bfa57', '2025-04-29 19:12:55.09', '2025-04-29 19:12:55.09', 'Joker', 2019, 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.', 'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', 'https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg');
INSERT INTO public.movie VALUES ('1e9b6957-11ef-4bb9-baf4-7d7ba7815f09', '2025-04-29 19:12:55.34', '2025-04-29 19:12:55.34', 'Marriage Story', 2019, 'A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.', 'https://image.tmdb.org/t/p/original/2JRyCKaRKyJAVpsIHeLvPw5nHmw.jpg', 'https://image.tmdb.org/t/p/w200/2JRyCKaRKyJAVpsIHeLvPw5nHmw.jpg');
INSERT INTO public.movie VALUES ('d9194597-3aa5-4adc-9026-c5830042fcc2', '2025-04-29 19:12:55.558', '2025-04-29 19:12:55.558', 'Little Women', 2019, 'Four sisters come of age in America in the aftermath of the Civil War.', 'https://image.tmdb.org/t/p/original/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg', 'https://image.tmdb.org/t/p/w200/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg');
INSERT INTO public.movie VALUES ('ab0f9630-df9e-49ec-b772-e98ab52bb5f7', '2025-04-29 19:12:55.758', '2025-04-29 19:12:55.758', 'Knives Out', 2019, 'When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan''s dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan''s untimely death.', 'https://image.tmdb.org/t/p/original/pThyQovXQrw2m0s9x82twj48Jq4.jpg', 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg');
INSERT INTO public.movie VALUES ('71331083-5c43-4dea-bea3-061ba1cca83d', '2025-04-29 19:12:55.959', '2025-04-29 19:12:55.959', 'Tenet', 2020, 'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', 'https://image.tmdb.org/t/p/original/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg', 'https://image.tmdb.org/t/p/w200/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg');
INSERT INTO public.movie VALUES ('41a1fe5f-b2bb-4076-8389-198ed8fed050', '2025-04-29 19:12:56.185', '2025-04-29 19:12:56.185', 'Dune', 2021, 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet''s exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity''s greatest potential-only those who can conquer their fear will survive.', 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', 'https://image.tmdb.org/t/p/w200/d5NXSklXo0qyIYkgV94XAgMIckC.jpg');
INSERT INTO public.movie VALUES ('6932c696-cb18-4a74-9de8-f4403ee6cee1', '2025-04-29 19:12:56.371', '2025-04-29 19:12:56.371', 'The Power of the Dog', 2021, 'A domineering but charismatic rancher wages a war of intimidation on his brother''s new wife and her teen son, until long-hidden secrets come to light.', 'https://image.tmdb.org/t/p/original/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg', 'https://image.tmdb.org/t/p/w200/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg');
INSERT INTO public.movie VALUES ('bd64aaaa-3f41-4e35-b557-20e8a15d0687', '2025-04-29 19:12:56.577', '2025-04-29 19:12:56.577', 'West Side Story', 2021, 'Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.', 'https://image.tmdb.org/t/p/original/yfz3IUoYYSY32tkb97HlUBGFsnh.jpg', 'https://image.tmdb.org/t/p/w200/yfz3IUoYYSY32tkb97HlUBGFsnh.jpg');
INSERT INTO public.movie VALUES ('7d75ec52-087d-4167-8cd2-72f91bb6b822', '2025-04-29 19:12:56.802', '2025-04-29 19:12:56.802', 'Licorice Pizza', 2021, 'The story of Gary Valentine and Alana Kane growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.', 'https://image.tmdb.org/t/p/original/7F8v5IzhgZSfyTSXpIxXE8d1u8v.jpg', 'https://image.tmdb.org/t/p/w200/7F8v5IzhgZSfyTSXpIxXE8d1u8v.jpg');
INSERT INTO public.movie VALUES ('78c4eb05-bc45-4e93-8e43-d9127e9a7f3d', '2025-04-29 19:12:57.017', '2025-04-29 19:12:57.017', 'Top Gun: Maverick', 2022, 'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.', 'https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', 'https://image.tmdb.org/t/p/w200/62HCnUTziyWcpDaBO2i1DX17ljH.jpg');
INSERT INTO public.movie VALUES ('6ce8fbdb-2cf9-4049-a236-18c04cf6cc72', '2025-04-29 19:12:57.22', '2025-04-29 19:12:57.22', 'The Batman', 2022, 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.', 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg', 'https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg');
INSERT INTO public.movie VALUES ('9c1b6427-c08f-44b6-8533-51133662ff4b', '2025-04-29 19:12:57.455', '2025-04-29 19:12:57.455', 'Elvis', 2022, 'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.', 'https://image.tmdb.org/t/p/original/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg', 'https://image.tmdb.org/t/p/w200/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg');
INSERT INTO public.movie VALUES ('44e95be2-db77-463d-b6ca-5ebfd0a4e18c', '2025-04-29 19:12:57.65', '2025-04-29 19:12:57.65', 'The Whale', 2022, 'A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.', 'https://image.tmdb.org/t/p/original/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg', 'https://image.tmdb.org/t/p/w200/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg');
INSERT INTO public.movie VALUES ('bd9e3220-f5eb-499b-88af-f4583635fd10', '2025-04-29 19:12:57.844', '2025-04-29 19:12:57.844', 'TÁR', 2022, 'As celebrated conductor Lydia Tár starts rehearsals for a career-defining symphony, the consequences of her past choices begin to echo in the present.', 'https://image.tmdb.org/t/p/original/dRVAlaU0vbG6hMf2K45NSiIyoUe.jpg', 'https://image.tmdb.org/t/p/w200/dRVAlaU0vbG6hMf2K45NSiIyoUe.jpg');
INSERT INTO public.movie VALUES ('6fee977d-54ce-4776-a844-e87760855541', '2025-04-29 19:12:58.001', '2025-04-29 19:12:58.001', 'Women Talking', 2022, 'A group of women in an isolated religious colony struggle to reconcile their faith with a series of sexual assaults committed by the colony''s men.', 'https://image.tmdb.org/t/p/original/wcTc9GveMMjAdHSlzdE0FaRCtqi.jpg', 'https://image.tmdb.org/t/p/w200/wcTc9GveMMjAdHSlzdE0FaRCtqi.jpg');
INSERT INTO public.movie VALUES ('000a1697-3410-4847-8578-325d3f8ea0a2', '2025-04-29 19:12:58.186', '2025-04-29 19:12:58.186', 'The Fabelmans', 2022, 'Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.', 'https://image.tmdb.org/t/p/original/h7llKkqkkJtJrTOaDLuVeUYDQ7I.jpg', 'https://image.tmdb.org/t/p/w200/h7llKkqkkJtJrTOaDLuVeUYDQ7I.jpg');
INSERT INTO public.movie VALUES ('0d7e69b3-dab8-4995-a059-b0cb43a95746', '2025-04-29 19:12:58.365', '2025-04-29 19:12:58.365', 'Triangle of Sadness', 2022, 'A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged, alcoholic captain. What first appears Instagrammable ends catastrophically, leaving the survivors stranded on a desert island in a struggle of hierarchy.', 'https://image.tmdb.org/t/p/original/k9eLozCgCed5FGTSdHu0bBElAV8.jpg', 'https://image.tmdb.org/t/p/w200/k9eLozCgCed5FGTSdHu0bBElAV8.jpg');
INSERT INTO public.movie VALUES ('b60f23b3-06cb-4720-9e6b-73f9a986c011', '2025-04-29 19:12:58.612', '2025-04-29 19:12:58.612', 'All Quiet on the Western Front', 2022, 'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.', 'https://image.tmdb.org/t/p/original/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg', 'https://image.tmdb.org/t/p/w200/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg');
INSERT INTO public.movie VALUES ('75333ed1-b67b-419b-b1be-f6afc08c1b0a', '2025-04-29 19:12:58.826', '2025-04-29 19:12:58.826', 'The Banshees of Inisherin', 2022, 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.', 'https://image.tmdb.org/t/p/original/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg', 'https://image.tmdb.org/t/p/w200/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg');
INSERT INTO public.movie VALUES ('843e22a4-bd9f-4072-806d-02464ed19a41', '2025-04-29 19:12:58.996', '2025-04-29 19:12:58.996', 'Avatar: The Way of Water', 2022, 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.', 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg', 'https://image.tmdb.org/t/p/w200/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg');
INSERT INTO public.movie VALUES ('aa415627-9706-43d0-99b5-74626dfa85b5', '2025-04-29 19:12:59.424', '2025-04-29 19:12:59.424', 'Glass Onion: A Knives Out Mystery', 2022, 'World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.', 'https://image.tmdb.org/t/p/original/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg', 'https://image.tmdb.org/t/p/w200/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg');
INSERT INTO public.movie VALUES ('d8405888-f174-49e3-99e1-28b51c52d484', '2025-04-29 19:12:59.666', '2025-04-29 19:12:59.666', 'Black Panther: Wakanda Forever', 2022, 'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.', 'https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg', 'https://image.tmdb.org/t/p/w200/sv1xJUazXeYqALzczSZ3O6nkH75.jpg');
INSERT INTO public.movie VALUES ('059bb373-3ea5-4089-95e7-b2a1e2fe61c7', '2025-04-29 19:12:59.875', '2025-04-29 19:12:59.875', 'Doctor Strange in the Multiverse of Madness', 2022, 'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.', 'https://image.tmdb.org/t/p/original/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg', 'https://image.tmdb.org/t/p/w200/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg');
INSERT INTO public.movie VALUES ('fcffea0e-b5cd-4732-9e43-1e795c7e88dd', '2025-04-29 19:13:00.071', '2025-04-29 19:13:00.071', 'Thor: Love and Thunder', 2022, 'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.', 'https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg', 'https://image.tmdb.org/t/p/w200/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg');
INSERT INTO public.movie VALUES ('898fb5b6-ab7e-42d5-a56b-cd6a65a129d9', '2025-04-29 19:13:00.225', '2025-04-29 19:13:00.225', 'Ant-Man and the Wasp: Quantumania', 2023, 'Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope''s parents Janet van Dyne and Hank Pym, and Scott''s daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.', 'https://image.tmdb.org/t/p/original/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg', 'https://image.tmdb.org/t/p/w200/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg');
INSERT INTO public.movie VALUES ('10b4cbad-6ee8-469e-a082-8675dcd4b0e5', '2025-04-29 19:13:00.4', '2025-04-29 19:13:00.4', 'Guardians of the Galaxy Vol. 3', 2023, 'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.', 'https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg', 'https://image.tmdb.org/t/p/w200/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg');
INSERT INTO public.movie VALUES ('3bdf3b1c-e907-43ec-8f63-c3dd965eae6e', '2025-04-29 19:13:00.578', '2025-04-29 19:13:00.578', 'Spider-Man: No Way Home', 2021, 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.', 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', 'https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg');
INSERT INTO public.movie VALUES ('fd889650-a1d8-48b6-81f6-4d30d03156c8', '2025-04-29 19:13:00.763', '2025-04-29 19:13:00.763', 'Shang-Chi and the Legend of the Ten Rings', 2021, 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.', 'https://image.tmdb.org/t/p/original/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg', 'https://image.tmdb.org/t/p/w200/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg');
INSERT INTO public.movie VALUES ('ee357ec2-fb98-4800-8280-dd1f3bcb6395', '2025-04-29 19:13:00.898', '2025-04-29 19:13:00.898', 'Eternals', 2021, 'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.', 'https://image.tmdb.org/t/p/original/lFByFSLV5WDJEv3KabbdAF959F2.jpg', 'https://image.tmdb.org/t/p/w200/lFByFSLV5WDJEv3KabbdAF959F2.jpg');
INSERT INTO public.movie VALUES ('84834600-cc2e-462d-a5c5-aa58c130ea29', '2025-04-29 19:13:01.113', '2025-04-29 19:13:01.113', 'Black Widow', 2021, 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.', 'https://image.tmdb.org/t/p/original/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg', 'https://image.tmdb.org/t/p/w200/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg');
INSERT INTO public.movie VALUES ('76bbc397-7f1d-4075-82d3-a4d94f510858', '2025-04-29 19:13:01.34', '2025-04-29 19:13:01.34', 'The Suicide Squad', 2021, 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.', 'https://image.tmdb.org/t/p/original/q61qEyssk2ku3okWICKArlAdhBn.jpg', 'https://image.tmdb.org/t/p/w200/q61qEyssk2ku3okWICKArlAdhBn.jpg');
INSERT INTO public.movie VALUES ('ef3bfdc5-796f-4261-b695-3e6a1cf89ad4', '2025-04-29 19:13:01.542', '2025-04-29 19:13:01.542', 'Wonder Woman 1984', 2020, 'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.', 'https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg', 'https://image.tmdb.org/t/p/w200/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg');
INSERT INTO public.movie VALUES ('07047348-6f65-4b83-bbd4-1b89bfc73064', '2025-04-29 19:13:01.785', '2025-04-29 19:13:01.785', 'Zack Snyder''s Justice League', 2021, 'Determined to ensure Superman''s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.', 'https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg', 'https://image.tmdb.org/t/p/w200/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg');
INSERT INTO public.movie VALUES ('17377a8c-d8d2-4f54-b69a-c0b803ebd83b', '2025-04-29 19:13:01.957', '2025-04-29 19:13:01.957', 'The Flash', 2023, 'When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry''s only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?', 'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg', 'https://image.tmdb.org/t/p/w200/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg');
INSERT INTO public.movie VALUES ('c965bcca-86de-43d1-ad52-546e39ec9e56', '2025-04-29 19:13:02.166', '2025-04-29 19:13:02.166', 'Aquaman and the Lost Kingdom', 2023, 'Black Manta seeks revenge on Aquaman for his father''s death. Wielding the Black Trident''s power, he becomes a formidable foe. To defend Atlantis, Arthur (Aquaman) forges an alliance with his imprisoned brother. They must protect the kingdom.', 'https://image.tmdb.org/t/p/original/oEyIhY1WzoFHUDE7U3p1AWwyoSN.jpg', 'https://image.tmdb.org/t/p/w200/oEyIhY1WzoFHUDE7U3p1AWwyoSN.jpg');
INSERT INTO public.movie VALUES ('7542c29e-2682-4776-adfd-f759e3f25d72', '2025-04-29 19:13:05.856', '2025-04-29 19:13:05.856', 'The Color Purple', 2023, 'A decades-spanning tale of love and resilience and of one woman''s journey to independence. Celie faces many hardships in her life, but ultimately finds extraordinary strength and hope in the unbreakable bonds of sisterhood.', 'https://image.tmdb.org/t/p/original/h5bqIxM8GO4TewJ0u6Rzkg58ssJ.jpg', 'https://image.tmdb.org/t/p/w200/h5bqIxM8GO4TewJ0u6Rzkg58ssJ.jpg');
INSERT INTO public.movie VALUES ('09e282ca-38b0-4265-85e5-cd664bb1d84e', '2025-04-29 19:13:02.597', '2025-04-29 19:13:02.597', 'The Marvels', 2023, 'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.', 'https://image.tmdb.org/t/p/original/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg', 'https://image.tmdb.org/t/p/w200/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg');
INSERT INTO public.movie VALUES ('be50990e-4489-4c14-92d6-8e8b7f2c2a1a', '2025-04-29 19:13:02.819', '2025-04-29 19:13:02.819', 'The Hunger Games: The Ballad of Songbirds & Snakes', 2023, '64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.', 'https://image.tmdb.org/t/p/original/lrkOYL5GBTFW9cgs9RlojxAcZZF.jpg', 'https://image.tmdb.org/t/p/w200/lrkOYL5GBTFW9cgs9RlojxAcZZF.jpg');
INSERT INTO public.movie VALUES ('09790272-c1b3-428d-8a2a-b9f15e08cd18', '2025-04-29 19:13:03.048', '2025-04-29 19:13:03.048', 'Dune: Part Two', 2024, 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.', 'https://image.tmdb.org/t/p/original/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg', 'https://image.tmdb.org/t/p/w200/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg');
INSERT INTO public.movie VALUES ('4252e6a2-240f-48ce-825a-90d437f69314', '2025-04-29 19:13:03.281', '2025-04-29 19:13:03.281', 'Mission: Impossible - Dead Reckoning Part One', 2023, 'Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world''s fate at stake and dark forces from Ethan''s past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.', 'https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg', 'https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg');
INSERT INTO public.movie VALUES ('05bcb7bf-1519-4a5a-b292-71782b4c7f57', '2025-04-29 19:13:03.497', '2025-04-29 19:13:03.497', 'John Wick: Chapter 4', 2023, 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.', 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', 'https://image.tmdb.org/t/p/w200/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg');
INSERT INTO public.movie VALUES ('e94a730a-0725-47e7-8c5f-6f566e92b076', '2025-04-29 19:13:03.701', '2025-04-29 19:13:03.701', 'Fast X', 2023, 'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they''ve ever faced: A terrifying threat emerging from the shadows of the past who''s fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.', 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg', 'https://image.tmdb.org/t/p/w200/fiVW06jE7z9YnO4trhaMEdclSiC.jpg');
INSERT INTO public.movie VALUES ('fc9e8355-45a5-4ebe-bfdb-3ae5ab16b905', '2025-04-29 19:13:03.902', '2025-04-29 19:13:03.902', 'Indiana Jones and the Dial of Destiny', 2023, 'Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn''t fall into the wrong hands.', 'https://image.tmdb.org/t/p/original/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg', 'https://image.tmdb.org/t/p/w200/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg');
INSERT INTO public.movie VALUES ('13c94346-5464-4f02-91f0-7aa8befa7853', '2025-04-29 19:13:04.114', '2025-04-29 19:13:04.114', 'Transformers: Rise of the Beasts', 2023, 'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.', 'https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg', 'https://image.tmdb.org/t/p/w200/gPbM0MK8CP8A174rmUwGsADNYKD.jpg');
INSERT INTO public.movie VALUES ('00cbd7f3-5345-4e3e-a6e9-261144590504', '2025-04-29 19:13:04.35', '2025-04-29 19:13:04.35', 'The Little Mermaid', 2018, 'A young reporter and his niece discover a beautiful and enchanting creature they believe to be the real little mermaid.', 'https://image.tmdb.org/t/p/original/qEM80vqREgfjk7YhIbl4AgfZ47S.jpg', 'https://image.tmdb.org/t/p/w200/qEM80vqREgfjk7YhIbl4AgfZ47S.jpg');
INSERT INTO public.movie VALUES ('30e42fb4-e0df-4a79-902f-75a2eeaa1ffd', '2025-04-29 19:13:04.529', '2025-04-29 19:13:04.529', 'Wonka', 2023, 'Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.', 'https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg', 'https://image.tmdb.org/t/p/w200/qhb1qOilapbapxWQn9jtRCMwXJF.jpg');
INSERT INTO public.movie VALUES ('faf1d950-af10-4da9-a011-b25074eba0bc', '2025-04-29 19:13:04.735', '2025-04-29 19:13:04.735', 'Napoleon', 2023, 'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.', 'https://image.tmdb.org/t/p/original/ytFOXyghxLzAM4KZyazDdEkM66q.jpg', 'https://image.tmdb.org/t/p/w200/ytFOXyghxLzAM4KZyazDdEkM66q.jpg');
INSERT INTO public.movie VALUES ('5f3478c4-9243-49af-ad44-1b1b329fc017', '2025-04-29 19:13:04.99', '2025-04-29 19:13:04.99', 'Killers of the Flower Moon', 2023, 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.', 'https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg', 'https://image.tmdb.org/t/p/w200/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg');
INSERT INTO public.movie VALUES ('da0104f2-d33b-4020-ace0-290cb7f698d4', '2025-04-29 19:13:05.196', '2025-04-29 19:13:05.196', 'Poor Things', 2023, 'Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.', 'https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg', 'https://image.tmdb.org/t/p/w200/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg');
INSERT INTO public.movie VALUES ('2c4dfddc-33a8-4afc-af1d-fcdec8362b40', '2025-04-29 19:13:05.427', '2025-04-29 19:13:05.427', 'The Holdovers', 2023, 'A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them — a damaged, brainy troublemaker — and with the school’s head cook, who has just lost a son in Vietnam.', 'https://image.tmdb.org/t/p/original/VHSzNBTwxV8vh7wylo7O9CLdac.jpg', 'https://image.tmdb.org/t/p/w200/VHSzNBTwxV8vh7wylo7O9CLdac.jpg');
INSERT INTO public.movie VALUES ('3c42810b-e956-4ada-aef2-486cefbe0558', '2025-04-29 19:13:05.669', '2025-04-29 19:13:05.669', 'Maestro', 2014, 'Henry, a young actor, finds himself involved in a film by cinema superstar, Cédric Rovere. Charmed by his benevolence, feelings hitherto unknown are aroused, while Rovere, intrigued by Henry''s dream, lives this shoot as an unexpected gift.', 'https://image.tmdb.org/t/p/original/mxMV3gVXXw9J2g3u4BRLKxF2AOe.jpg', 'https://image.tmdb.org/t/p/w200/mxMV3gVXXw9J2g3u4BRLKxF2AOe.jpg');
INSERT INTO public.movie VALUES ('4492cea4-1da1-4f06-85d6-a19a09eb041a', '2025-04-29 19:13:06.041', '2025-04-29 19:13:06.041', 'Next Goal Wins', 2014, 'An inspirational story about the power of hope in the face of seemingly insurmountable odds, and an object lesson in what it really means to be a winner in life.', 'https://image.tmdb.org/t/p/original/xJg8qEBBBc9OwvgkZXiA3hPtZCY.jpg', 'https://image.tmdb.org/t/p/w200/xJg8qEBBBc9OwvgkZXiA3hPtZCY.jpg');
INSERT INTO public.movie VALUES ('0ac4d131-f17a-4e16-9076-60246db2fb7b', '2025-04-29 19:13:06.377', '2025-04-29 19:13:06.377', 'Saltburn', 2023, 'Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family''s sprawling estate, for a summer never to be forgotten.', 'https://image.tmdb.org/t/p/original/zGTfMwG112BC66mpaveVxoWPOaB.jpg', 'https://image.tmdb.org/t/p/w200/zGTfMwG112BC66mpaveVxoWPOaB.jpg');
INSERT INTO public.movie VALUES ('d224eaf2-921f-44af-9cb1-8ad929cee738', '2025-04-29 19:13:06.599', '2025-04-29 19:13:06.599', 'The Creator', 2023, 'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.', 'https://image.tmdb.org/t/p/original/3dSivDtOuyxLDxPH4v2tcNG1fP7.jpg', 'https://image.tmdb.org/t/p/w200/3dSivDtOuyxLDxPH4v2tcNG1fP7.jpg');
INSERT INTO public.movie VALUES ('7cc24ebe-d631-4a88-a28b-810f7826518b', '2025-04-29 19:13:06.815', '2025-04-29 19:13:06.815', 'Wish', 2023, 'Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.', 'https://image.tmdb.org/t/p/original/m9ckCVKU9vW3Dxc8hbodx7mjJbe.jpg', 'https://image.tmdb.org/t/p/w200/m9ckCVKU9vW3Dxc8hbodx7mjJbe.jpg');
INSERT INTO public.movie VALUES ('4312950d-9358-415f-86a4-c7198f2bafa5', '2025-04-29 19:13:07.034', '2025-04-29 19:13:07.034', 'Wish Dragon', 2021, 'Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.', 'https://image.tmdb.org/t/p/original/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg', 'https://image.tmdb.org/t/p/w200/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg');
INSERT INTO public.movie VALUES ('ef81cd65-13f1-45fe-b9d6-224d157e7a8d', '2025-04-29 19:13:07.266', '2025-04-29 19:13:07.266', 'Raya and the Last Dragon', 2021, 'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.', 'https://image.tmdb.org/t/p/original/5nVhgCzxKbK47OLIKxCR1syulOn.jpg', 'https://image.tmdb.org/t/p/w200/5nVhgCzxKbK47OLIKxCR1syulOn.jpg');
INSERT INTO public.movie VALUES ('6cdedabd-7ea9-4064-ba27-e04256d00dba', '2025-04-29 19:13:07.481', '2025-04-29 19:13:07.481', 'Encanto', 2021, 'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family''s last hope.', 'https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg', 'https://image.tmdb.org/t/p/w200/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg');
INSERT INTO public.movie VALUES ('f69c2b33-15f2-4293-8acd-988b099f27c3', '2025-04-29 19:13:07.706', '2025-04-29 19:13:07.706', 'Turning Red', 2022, 'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.', 'https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg', 'https://image.tmdb.org/t/p/w200/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg');
INSERT INTO public.movie VALUES ('2258db08-d4b2-4a27-8b39-215f273f012e', '2025-04-29 19:13:07.905', '2025-04-29 19:13:07.905', 'Luca', 2021, 'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.', 'https://image.tmdb.org/t/p/original/9x4i9uKGXt8IiiIF5Ey0DIoY738.jpg', 'https://image.tmdb.org/t/p/w200/9x4i9uKGXt8IiiIF5Ey0DIoY738.jpg');
INSERT INTO public.movie VALUES ('f2955cfd-bb37-4319-bca6-364e7a93545b', '2025-04-29 19:13:08.113', '2025-04-29 19:13:08.113', 'Lightyear', 2022, 'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.', 'https://image.tmdb.org/t/p/original/b9t3w1loraDh7hjdWmpc9ZsaYns.jpg', 'https://image.tmdb.org/t/p/w200/b9t3w1loraDh7hjdWmpc9ZsaYns.jpg');
INSERT INTO public.movie VALUES ('e2de5ce9-9665-46b8-b7db-9ffe70146b6d', '2025-04-29 19:13:08.318', '2025-04-29 19:13:08.318', 'Elemental', 2023, 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.', 'https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg', 'https://image.tmdb.org/t/p/w200/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg');
INSERT INTO public.movie VALUES ('c00d9044-fa0e-4bc9-a897-50caffb22233', '2025-04-29 19:13:08.53', '2025-04-29 19:13:08.53', 'Strange World', 2022, 'A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.', 'https://image.tmdb.org/t/p/original/jXGMJUq9zcrScs02qkQuCtmWwaI.jpg', 'https://image.tmdb.org/t/p/w200/jXGMJUq9zcrScs02qkQuCtmWwaI.jpg');
INSERT INTO public.movie VALUES ('bbdb70f3-e304-4295-b739-70430159f323', '2025-04-29 19:13:08.702', '2025-04-29 19:13:08.702', 'Soul', 2020, 'Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.', 'https://image.tmdb.org/t/p/original/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg', 'https://image.tmdb.org/t/p/w200/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg');
INSERT INTO public.movie VALUES ('a16965d6-de43-4b39-9682-318689a09fd4', '2025-04-29 19:13:08.892', '2025-04-29 19:13:08.892', 'Onward', 2020, 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.', 'https://image.tmdb.org/t/p/original/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg', 'https://image.tmdb.org/t/p/w200/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg');
INSERT INTO public.movie VALUES ('8036e9ab-be6a-4613-b943-494cb3b1ef03', '2025-04-29 19:13:09.118', '2025-04-29 19:13:09.118', 'Frozen II', 2019, 'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.', 'https://image.tmdb.org/t/p/original/mINJaa34MtknCYl5AjtNJzWj8cD.jpg', 'https://image.tmdb.org/t/p/w200/mINJaa34MtknCYl5AjtNJzWj8cD.jpg');
INSERT INTO public.movie VALUES ('86381b02-f72b-4879-85fa-1385f3438670', '2025-04-29 19:13:09.58', '2025-04-29 19:13:09.58', 'Coco', 2017, 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel''s family history.', 'https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg', 'https://image.tmdb.org/t/p/w200/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg');


--
-- TOC entry 3403 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: rating; Type: TABLE DATA; Schema: public; Owner: moonuser
--



--
-- TOC entry 3405 (class 0 OID 16417)
-- Dependencies: 217
-- Data for Name: seen; Type: TABLE DATA; Schema: public; Owner: moonuser
--

INSERT INTO public.seen VALUES ('9aa9da35-f1db-4b48-a4c0-6b70b5b607b4', '2025-04-29 21:43:58.653', '2025-04-29 21:43:58.653', '99344d8b-2874-4cb0-b133-868abcf0a7e2', '09790272-c1b3-428d-8a2a-b9f15e08cd18');
INSERT INTO public.seen VALUES ('113fdae0-755a-4be8-9e61-b79c3740fbdc', '2025-04-29 21:44:00.328', '2025-04-29 21:44:00.328', '99344d8b-2874-4cb0-b133-868abcf0a7e2', 'e2de5ce9-9665-46b8-b7db-9ffe70146b6d');
INSERT INTO public.seen VALUES ('69a49c97-1dd0-401b-b507-3ad029d70994', '2025-04-29 21:44:09.515', '2025-04-29 21:44:09.515', '99344d8b-2874-4cb0-b133-868abcf0a7e2', 'd224eaf2-921f-44af-9cb1-8ad929cee738');
INSERT INTO public.seen VALUES ('77f0099e-1377-41d7-af8b-6360c1e932f0', '2025-04-29 21:44:10.634', '2025-04-29 21:44:10.634', '99344d8b-2874-4cb0-b133-868abcf0a7e2', '0ac4d131-f17a-4e16-9076-60246db2fb7b');


--
-- TOC entry 3406 (class 0 OID 16426)
-- Dependencies: 218
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: moonuser
--

INSERT INTO public."user" VALUES ('56935265-9783-463e-84f0-44502f50bc49', '2025-04-25 08:08:08.893', '2025-04-25 08:08:08.893', 'Test user', 'test@gmail.com', '$2b$10$U8YWWNpiyboJj0MrtjhgluuMMkQoVLlh6Wz.w2VnzoHFOsOSVg5i6', 'first', 'last');
INSERT INTO public."user" VALUES ('99344d8b-2874-4cb0-b133-868abcf0a7e2', '2025-04-25 10:21:46.208', '2025-04-25 10:21:46.208', 'stevespectre', 'istvan.erdos86@gmail.com', '$2b$10$OAyvr6I15/2mUmW1XXT6deDYH1wM6hegGPVGlk23NST36uZP2Eoxy', 'Istvan', 'Erdos');
INSERT INTO public."user" VALUES ('3a563cb5-51d1-4e94-b8a3-c6e5af3ca9a7', '2025-04-28 12:51:32.585', '2025-04-28 12:51:32.585', 'asd', 'istvan.erdos86+2@gmail.com', '$2b$10$brAi5AabrHOh5cfjeL65Le4pa9mZ41dRy2qfybbwe/wHDRm.r0H6C', 'asd', 'asd');


--
-- TOC entry 3404 (class 0 OID 16408)
-- Dependencies: 216
-- Data for Name: watchlist; Type: TABLE DATA; Schema: public; Owner: moonuser
--

INSERT INTO public.watchlist VALUES ('b952b30d-4036-42fd-af1f-2bcaab33e6b2', '2025-04-29 21:43:59.256', '2025-04-29 21:43:59.258', '99344d8b-2874-4cb0-b133-868abcf0a7e2', '09790272-c1b3-428d-8a2a-b9f15e08cd18');
INSERT INTO public.watchlist VALUES ('447377e7-eeff-4a36-b408-7d5a33e2c7ef', '2025-04-29 21:44:10.016', '2025-04-29 21:44:10.018', '99344d8b-2874-4cb0-b133-868abcf0a7e2', 'd224eaf2-921f-44af-9cb1-8ad929cee738');


--
-- TOC entry 3241 (class 2606 OID 16416)
-- Name: watchlist PK_0c8c0dbcc8d379117138e71ad5b; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.watchlist
    ADD CONSTRAINT "PK_0c8c0dbcc8d379117138e71ad5b" PRIMARY KEY (id);


--
-- TOC entry 3243 (class 2606 OID 16425)
-- Name: seen PK_5321464b1252da7ab15fb6be6a1; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.seen
    ADD CONSTRAINT "PK_5321464b1252da7ab15fb6be6a1" PRIMARY KEY (id);


--
-- TOC entry 3245 (class 2606 OID 16434)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 3251 (class 2606 OID 16454)
-- Name: movie PK_cb3bb4d61cf764dc035cbedd422; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY (id);


--
-- TOC entry 3239 (class 2606 OID 16407)
-- Name: rating PK_ecda8ad32645327e4765b43649e; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY (id);


--
-- TOC entry 3247 (class 2606 OID 16443)
-- Name: like PK_eff3e46d24d416b52a7e0ae4159; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY (id);


--
-- TOC entry 3249 (class 2606 OID 16445)
-- Name: like UQ_00af9ddcc1e778bc47bc83cf336; Type: CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "UQ_00af9ddcc1e778bc47bc83cf336" UNIQUE ("userId", "movieId");


--
-- TOC entry 3254 (class 2606 OID 16465)
-- Name: watchlist FK_03878f3f177c680cc195900f80a; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.watchlist
    ADD CONSTRAINT "FK_03878f3f177c680cc195900f80a" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- TOC entry 3252 (class 2606 OID 16460)
-- Name: rating FK_1a3badf27affbca3a224f01f7de; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT "FK_1a3badf27affbca3a224f01f7de" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON DELETE CASCADE;


--
-- TOC entry 3256 (class 2606 OID 16480)
-- Name: seen FK_4d85eba19a3504512e3de1f6af6; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.seen
    ADD CONSTRAINT "FK_4d85eba19a3504512e3de1f6af6" FOREIGN KEY ("movieId") REFERENCES public.movie(id);


--
-- TOC entry 3253 (class 2606 OID 16455)
-- Name: rating FK_a6c53dfc89ba3188b389ef29a62; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- TOC entry 3255 (class 2606 OID 16470)
-- Name: watchlist FK_e208d245e60584f555df1b35e54; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.watchlist
    ADD CONSTRAINT "FK_e208d245e60584f555df1b35e54" FOREIGN KEY ("movieId") REFERENCES public.movie(id);


--
-- TOC entry 3258 (class 2606 OID 16485)
-- Name: like FK_e8fb739f08d47955a39850fac23; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- TOC entry 3257 (class 2606 OID 16475)
-- Name: seen FK_f1560e817d731da165b05082c46; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public.seen
    ADD CONSTRAINT "FK_f1560e817d731da165b05082c46" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- TOC entry 3259 (class 2606 OID 16490)
-- Name: like FK_fd72fd2d7c017a2ee03592829ae; Type: FK CONSTRAINT; Schema: public; Owner: moonuser
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "FK_fd72fd2d7c017a2ee03592829ae" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON DELETE CASCADE;


-- Completed on 2025-04-30 10:50:10 CEST

--
-- PostgreSQL database dump complete
--

