import './AlumniStory.css';

import React, { useEffect, useState } from 'react';

import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';
import cardPhoto1 from '../../../assets/images/photo1.png';

const dataArray = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/dc64/9c5a/14ae1e4d222ae1724ab795df40fd4224?Expires=1681084800&Signature=LHGHCdWAk0gxhXmZtxMN-MZUOCDCTP6Xm9Pv3yU6x0xIX6pqhq43QOfmwdZr98Kn-09iDBwLZjQdB9xnR9zqhu0j-stBI1Ptl9qaI2qFr3k5MufMdWSx-ThGXoGGIGE-yZ3WVFQN516Y3YpRoTkS9gHxnA8F-e04KepQMzrHHs2Xhhq8vfW18oHo5NAZctMrtRQdZ2rNWbB7RFxEu8EBxk9-eYo6jbp4Uwdfu3k8c9VU4d-via9Gm61FC3N5MfV-tDmJtTw~Igr5J61YQWgmTcdVbO72rSTOqdl67wWsIOvxEVM9w-nT24ybvz8kGGdIEvM~LnddVZA81xPYPRLKMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Nurul Rika Octavia Amd. Kep',
    desc: 'Saya sangat senang bisa kuliah di Mayapada Nursing Academy selama 3 tahun, selama saya berkuliah disana saya dapat mendapatkan banyak ilmu untuk kesiapan saya masuk dunia kerja',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/4f98/af65/64e1234c1be5007cda7f5a1887b3ccbc?Expires=1681084800&Signature=ZyPU3fXf-GqXcNJUCA6~j7OZqFrMpHkoW7cH9jWVzRMrt7MzLtOenyWmeXA4JoamINXKR1fQgiQ3LC0TrkBIlVM8HI5iYCUaalg2qfXeQmiUh2qPjom1Qsn~WlpjCDmT40YrfNOg2Uj2DIOd5lwOp0X0hR9HtbleCbUYBmaQ36VFi9NpDH6y9e0PHBVRgUM8VFnBUccCZuabOCypX54G5naywXCQK0AeRU7GNAHoLhR-5YrZXqeMUO8kMyg8mn4CWIt5GOYiSYxvT9Vxqqrd99p2PbPrH5LXkafoHqHQ5PqD47Lz~NPcOJQMZVrroPBHw~yOtzQbzwhm8mIsb5ZpFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Rifka Friskilla Nee, Amd. Kep',
    desc: 'Saya bangga bisa menjadi bagian dari Mayapada Nursing Academy , fasilitas yang lengkap, ruang kelas yang nyaman dan pembelajaran yang membantu saya untuk berkembang',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/8f60/d1ed/efaafbbd6c097ed1cdd3cb6d78eafc5b?Expires=1681084800&Signature=Q0ONRSO-Gn2J~BqF-tefnCCGzcJSd-JfQWyJKT4HRgfjlOOaMQx6qKt~C9uoHaxcywKZqihCIVm5Uog6fWrcj4jSqaY9enogH~HnJJBQaJZBCcN6ppCLnPTIyhC2gOSPVAUhG7Xmo~LcoAyCHsGT2EDwGPz2ctQZoNREWiAf51uGrC5jAmT6FDsd3aj5EesEyp9GHYzPkTjBEDLL5oDYBYRyw652Qg5wHf6pytD5xqfEedQCf7z5nSqgYzCruLhEscmQTciMH0eJkdFm34AUGQIxwja-v3l7orQyNyrfTQXyf-Bkfg2PoI5QAVqhgo6JfaKe4MeBQrf-DeZIu9Lgfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Kholifah Rosdiana Fitriani, Amd. Kep',
    desc: 'Mayapada Nursing Academy adalah tempat terbaik untuk belajar menjadi seorang perawat yang kompeten dan banyak hal baru yang akan ditemui selama kuliah',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/51cb/0bc6/17d482504c0b23acb4f159fdf9eb7981?Expires=1681084800&Signature=jmxOwFc3tAiirYL7jZLJ~wJwj7h4dZxCWQLVhryxn~zjDd3A6czseodt9H3HGkonwJnLAHmOqSpV1W-lwCGbHb~qzRJKXZMbdMkYz78pavC35EQoL61dRlbqxdaxhBmGR3GQEskxF7UbHb6HSbhvgnlTwRRe-dPGHqe0S944ymY7BgFs67jKP2dcBRmgMBthcHs4DzP7BfZOzt7yvHnKdj744q3fYivcKbipQusYtb~NuQHytKhmFq3DpSO9J6cUhmS6af1pOOn0pGF8kowDZ2oRxKcbqgiIl4KWuxSaZoje2zg1~HbgAYx-HBrMlzj1IhgT98plv2eUJN1FyOasQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/ab3f/7dd0/18efe6db39e4855bddf9f3dd805f486a?Expires=1681084800&Signature=BBtTSY6etHzmPIwUjCzzos5q6dVUKKJ6GIGw323kZwsk8KJFQHqle1SXrB6Bw3ZJqNsgYKUBjjKbL9gJl~Co-Ws-UEvjICh5F81G8oxpN3Z~NriBvBqwQZyo5insrOYugQ4OM~tyAs5ZdroH3rAThJswqfFnllgLdPY51FsfBbFetHQaP5AS8s-eugOO73Fep6hGxFNGsSUiUAuCjdwvjwdfoIfIlmuRuRGTtTRr1o3dZAMBgPXbmb4cShieVsaYeFMPnhLx7mXYj5KvxeUwVyoDCdwxv5q7KN5vY34b~sP3x80XcJvpGqzuVTXENr5m06bFGcFNXmjKuVZK5eBn5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/6454/4b4b/49ce01738df5070061c60d52ed47dbf0?Expires=1681084800&Signature=gYKKAW2e71DEmKtDkKDuGsDVrmaEn-Yc1P1TrEfAUhZyl6oplT9pNrOhkUalOk-V2nKKcA86KSZGbXriYXBLg~gyf02C15ZweSVBN27ypEGZ3iW0cqx~rtUQmhRlJyrF0Y9UBW7gtt5ZGPkj~ppKEYJ0nKpuy6cX8ca9UOEB9TBmAi3WQKV27IsWUNtCv5X65BAtzpLS1Ej0NJn9wE6Y2SpCZC6bEZcLyvGcL2qYhPLj5yGCbXs7UC-wyYktrNwvhWmZgXI8RIeoH2bm3Zhb2KXU4CqQMUWECg0aS4k3Urxr911Eo7E1cWtjCitDY49dKmtZU7baa9uqfwgG1w6pqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];


const AlumniStory = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/alumni/story/alumni'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="alumni-story-container">
        <Typhography
          type="title"
          text="Alumni Story"
          style={{ alignSelf: 'center'}}
        />
        {/* <div className="ikatan-alumni-title">Alumni Story</div> */}
        <div className="alumni-story-card">
          {data &&
            data.map((item) => (
              <div className="card-wrapper">
                <img className="card-img" src={item.alumni_story_img} />
                <div className="card-content">
                  <Typhography
                    type="normal"
                    text={item.alumni_story_name}
                    size="16px"
                    fontWeight="600"
                  />

                  <Typhography
                    type="normal"
                    text={item.alumni_story_history}
                    size="16px"
                    style={{ marginTop: '10px', textAlign: 'justify' }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlumniStory;
