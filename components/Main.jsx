import React, { useState, Fragment } from "react";

const newJeansAlbums = [
  {
    id: 1,
    title: "New Jeans",
    releaseDate: "2022-08-01",
    tracks: ["Attention", "Hype Boy", "Cookie", "Hurt"],
    coverImage:
      "https://search.pstatic.net/sunny/?src=http%3A%2F%2Ffile3.instiz.net%2Fdata%2Fcached_img%2Fupload%2F2022%2F11%2F22%2F22%2F247e8b94090b42da6fd4b996d3d70677.jpg&type=sc960_832",
  },
  {
    id: 2,
    title: "Get Up",
    releaseDate: "2023-07-01",
    tracks: ["Super Shy", "ETA", "Cool for the Summer", "Candy"],
    coverImage:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjlfMjMy%2FMDAxNjkwNjE3MjE1NTQ1.cCGDSnRFRAHfAncDRC6-1MU8Og8zFM4dYT0Mg6_DqdMg.FlvjuQ08nNMRTGlY99CphAExjHN2CdCh91-9IEN8tH0g.PNG.whalepiano%2F%25EC%25BA%25A1%25EC%25B2%2598.PNG&type=sc960_832",
  },
];

export default function Main() {
  const [contents, setContents] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function submitForm() {
    if (text.trim()) {
      setContents((prev) => [...prev, text]);
      setText("");
    }
  }

  return (
    <main className="Main">
      <div className="content">
        <h2>뉴진스 앨범 정보</h2>

        <section className="albums">
          {newJeansAlbums.map((album) => (
            <div key={album.id} className="album-card">
              <img
                src={album.coverImage}
                alt={`${album.title} cover`}
                className="album-cover"
              />
              <div className="album-details">
                <h3>{album.title}</h3>
                <p>
                  <strong>Release Date:</strong> {album.releaseDate}
                </p>
                <p>
                  <strong>Tracks:</strong>
                </p>
                <ul>
                  {album.tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <h2>검색어</h2>

        <Fragment>
          <textarea
            onChange={handleChange}
            placeholder="내용을 검색하세요"
            value={text}
            className="textarea"
          ></textarea>
          <button onClick={submitForm} className="search-button">
            검색
          </button>
        </Fragment>

        <ul className="content-list">
          {contents.map((content, index) => (
            <li key={index} className="content-item">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
