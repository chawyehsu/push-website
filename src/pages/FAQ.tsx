// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react';

import styled from 'styled-components';
import { BsChevronExpand } from 'react-icons/bs';

import { device } from '../config/globals';
import PageMeta from '../config/pageMeta';

import PageWrapper from '../components/PageWrapper';
import HybridSection from '../components/HybridSection';

import { Section, Content, ItemH, ItemV, H1, H2, H3, Para, UL, OL, LI, A, B, Span, HeroHeader, Button } from '../components/SharedStyling';
import ImageFAQ from "../assets/faq-projects.webp"

// define the question and answers seperately in order to seperate data and render logic
const General = [
  {
    question: 'What is Push?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc).</Span>
        <Span>Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.</Span>
      </Answer>
    )
  },
  {
    question: 'What is Push trying to solve?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>Push is building the communication layer for Web3, using which any dApp, smart contracts or backend can send any real time communications (such as notifications, chats, video and more) that are tied directly to a user's wallet address (aka web3 usernames).</Span>
        <Span>This addresses a major gap in the web3 infrastructure, and improving the everyday experience for blockchain users. The notifications (or any other communications) are off-chain, gasless for all scenarios except when a smart contract sends them (in which case the smart contract pays a slightly higher gas fees for the payload that is sent on blockchain).</Span>
        <Span>While communications are encrypted and secure, they utilize Push open network which means any dApp or crypto wallet can easily integrate them making the lives of all web3 users a lot easier and more akin to web2 UX where apps (or protocols) communicate with their users whenever something of importance occurs or is about to occur for them.</Span>
      </Answer>
    )
  },
  {
    question: 'What are the web3 communication products launched by Push?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span><b>⚬ Push Notifications:</b> Enables any smart contract, dApp, backend to deliver critical informations as notifications to web3 users directly to their wallet addresses.</Span>
        <Span><b>⚬ Push Chat(wallet-to-wallet chat):</b> Enabling 2-way communication for web3 users from their wallet addresses.</Span>
      </Answer>
    )
  },
  {
    question: 'How can I use Push as an end-user?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>Connect to the <AMod href="https://app.push.org/#/channels" target={"_blank"}>Push dApp</AMod> & opt-in to channels to get notifications for protocols that are relevant to you. Channels are protocols that activate themselves on Push protocol to send notification.</Span>
        <Span>You can receive notifications from any crypto frontends that have already integrated Push. Alternatively, you can use via <AMod href="https://app.push.org/#/channels"  target={"_blank"}>Push dApp</AMod>, <AMod href="https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg" target={"_blank"}>browser extension</AMod>, and mobile app (<AMod href="https://play.google.com/store/apps/details?id=io.epns.epns&pli=1" target={"_blank"}>Android</AMod> & <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target={"_blank"}>iOS</AMod>) in case your favorite wallet or dApp doesn't have Push support yet.</Span>
        <Span>Push recently launched a wallet-to-wallet communication product called Push Chat which is in alpha stage. Reach out to us on <AMod href="https://discord.com/invite/pushprotocol" target={"_blank"}>Discord</AMod> to get exclusive Push Chat access.</Span>
      </Answer>
    )
  },
  {
    question: 'Is Push a blockchain? Is Push decentralised?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>Push behaves similar to blockchain but is an open network. This means that data is validated and indexed but doesn't have to aligned into blocks as the proof of data validity is supplied with the communication payload itself.</Span>
        <Span>Push operates on network of nodes called Push Nodes which are responsible for the validation, storage, and delivery of notifications & chats.</Span>
        <Span>Major efforts are put into decentralising Push Nodes which is in the final stages now. Any content or payloads getting delivered are already immutable and can't be changed as they are secured using crypto-graphical proofs. The other part which ensures that the content can't be censored is in final stages now of testing and public alpha push nodes are expected to be rolled out soon.</Span>
      </Answer>
    )
  },
  {
    question: 'On which blockchain is Push deployed? Can I send notifications from non-EVM chains as well?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>Push is currently live on Ethereum, Polygon and BNB chain with other major EVM chains and non-EVM / non-Ethereum chains to be supported soon. Push Notifications via gasless sdk and Push Chat sdk supports all EVM chains as of now.
        </Span>
      </Answer>
    )
  },
  {
    question: 'How many projects have integrated with Push so far?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span><Image src={ImageFAQ} alt="" /></Span>
        <Span>More than 400 projects have integrated with Push which includes our 150+ partners including Lens, Polygon, Gitcoin, Decentraland, etc.</Span>
      </Answer>
    )
  }
] 
const Notifs = [
  {
    question: 'Can I integrate notifications on Frontend / Wallet?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>Yes, Push Protocol is an open yet secure network, and behaves similar to a blockchain network but for all things communication. This means that any frontend and / or wallet can integrate notifications or chat on their side and start making the web3 UX and re-engagement a reality.</Span>
        <Span>Learn more about <AMod href="https://docs.push.org/developers/developer-guides/integrating-on-frontend" target={"_blank"}>integrating Push Notification in your dApp</AMod> / <AMod href="https://docs.push.org/developers/developer-guides/receiving-notifications" target={"_blank"}>Push Notification in your crypto wallet.</AMod></Span>
        <Span>Additionally, wallets should check out <AMod href="https://docs.push.org/developers/developer-guides/integrating-on-frontend" target={"_blank"}>fee pool of Push which re-imagines and incentivises their contribution</AMod> acknowledging them as an entry point for web3.</Span>
      </Answer>
    )
  },
  {
    question: 'How can I start receiving notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>To enable an xyz protocol to send a notification, they need your consent before they can do so which is called opt-in which is gasless. They are also fondly called channels in Push protocol terminology</Span>
        <Span>Once you opt-in to any channel that you want to get notifications from, your job is done, the channels will send notifications based on their own logic to you. </Span>
        <Span>
        You can receive notifications from any crypto frontends that have already integrated Push. Alternatively, you can use via <AMod href="https://app.push.org/#/channels" target={"_blank"}>Push dApp</AMod>, <AMod href="https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg" target={"_blank"}>browser extension</AMod>, and mobile app (<AMod href="https://play.google.com/store/apps/details?id=io.epns.epns&pli=1" target={"_blank"}>Android</AMod> & <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target={"_blank"}>iOS</AMod>) in case your favorite wallet or dApp doesn't have Push support yet.
        </Span>
      </Answer>
    )
  },
  {
    question: 'Do I need a channel to receive notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>No, a channel is only required if you want to send a notification. In order to receive notifications, you just need to connect your wallet to the dapp/mobile app/browser extension and Opt-in to the already existing channels that you want to get notifications from. </Span>
      </Answer>
    )
  },
  {
    question: 'Do I need a channel to send notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>Yes, any protocol that wants to send notifications will need to activate themselves on Push protocol, read <AMod href='https://docs.push.org/developers/developer-guides/create-your-notif-channel' target={"_blank"}>How to create channel</AMod> for more details. 
        </Span>
      </Answer>
    )
  },
  {
    question: 'Does Push only handle on-chain notifications? Does Push only handles events based notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>No, Push is extremely versatile and can handle on-chain (coming from smart contracts) or off-chain (coming from backend) notifications apart from notifications generated via sub-graphs.</Span>
        <Span>
        The logic of notification depends on what the xyz protocol wants to send to you which already ranges from a variety of use cases such as near loan liquidations, NFT rebids, on-chain or off chain governance, web3 news, airdrop alerts and so much more. If you imaging a use case that your users will benefit from, chances are Push will be able to enable dispatching those notifications to your users (wallet addresses).
        </Span>
      </Answer>
    )
  },
  {
    question: 'Do I have to pay to send notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>No, Push doesn’t take any fees for you to send notification. Although, there is a nominal charge of 50 PUSH required during Channel creation, which is put in place to prevent spamming.
        </Span>
      </Answer>
    )
  },
  {
    question: 'What are some use case of notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>The most popular ones are Governance, Loan Pool & Staking and Marketing related notifications though we have many other interesting use cases depending upon the protocols on the channel.
        </Span>
      </Answer>
    )
  },
]

const Chat = [
  {
    question: 'Is Push Chat end-to-end encrypted?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>Yes, Push Chat is end-to-end encrypted. The encryption is based on PGP Keys. Read more about <AMod href='https://docs.push.org/developers/concepts/push-chat-for-web3' target={"_blank"}>how it works here.</AMod>
        </Span>
      </Answer>
    )
  },
  {
    question: 'How are messages stored in Push Chat?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>Messages are all stored on IPFS in an encrypted manner. So only the wallets that are part of the chat can decrypt the messages.
        </Span>
      </Answer>
    )
  },
  {
    question: 'Will Push charge messaging fees?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>For now Push is not charging any fees for you to message anyone. There are plans to introduce a freemium model in future.
        </Span>
      </Answer>
    )
  },
  {
    question: 'Does Push Chat have notifications?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>Yes. Push Chat has notifications built-in. So there is no need to create a channel or do any extra step to send Push Chat notifications.
        </Span>
      </Answer>
    )
  },
]

const IntegratingPush = [
  {
    question: 'How can I integrate Push as a service/developer?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>Push can be used as a utility for communication. A service/developer can integrate Push to communicate critical information to its users and to improve the user experience through notifications and chat (Push Chat)
        </Span>
        <Span>The <AMod href='https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details' target={"_blank"}>Push JS SDK</AMod> is a major component that makes the integration seamless. A few integration ideas using SDK include</Span>
        <UL>
          <LI>integrate <b>Opt-in</b> feature on your frontend so users wouldn't have to leave your website to enable notifications from your Channel</LI>
          <LI>show the notifications on your frontend</LI>
          <LI>send critical information as notifications</LI>
          <LI>integrate <b>Push Chat</b> on your frontend and enable 2-way communication between your users or use chat as a way to provide support to your users.</LI>
        </UL>
        <Span>Other ways of integrating Push notifications are via <AMod href='https://docs.push.org/developers/developer-guides/sending-notifications/using-smart-contract' target={"_blank"}>smart contracts</AMod>, <AMod href='https://docs.push.org/developers/developer-guides/sending-notifications/using-subgraph-gasless' target={"_blank"}>subgraphs</AMod>, and <AMod href='https://docs.push.org/developers/developer-guides/sending-notifications/using-showrunners-scaffold-gasless' target={"_blank"}>showrunners framework.</AMod></Span>
      </Answer>
    )
  },
  {
    question: 'How can I test Push integration during the development?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>Push has a <AMod href='https://staging.push.org/#/channels' target={"_blank"}>Staging dApp</AMod> for developers that points to Ethereum Goerli testnet, Polygon Mumbai testnet and BNB testnet.
        </Span>
      </Answer>
    )
  },
  {
    question: 'Where can I find the code samples for integration?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>Push Chat integration - <AMod href='https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-uiweb/uiweb-0.2.3-push-support-chat'  target={"_blank"}>Docs</AMod>,<AMod href='https://github.com/ethereum-push-notification-service/push-sdk-sandbox'  target={"_blank"}>Github</AMod>
        </Span>
        <Span>Push Notifications  - <AMod href='https://docs.push.org/developers/'  target={"_blank"}>Docs</AMod>,<AMod href='https://github.com/ethereum-push-notification-service/push-for-hackers'  target={"_blank"}>Github</AMod>
        </Span>
        <Span><AMod href='https://github.com/ethereum-push-notification-service/push-showrunners-framework'  target={"_blank"}>Showrunners Framework</AMod>, a scaffold solution to integrate Push Notification can also used to get started.</Span>
      </Answer>
    )
  },
  {
    question: 'How I can be assisted in case of any blockers during integration?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>You can just drop your queries on the <AMod href='https://discord.com/invite/pushprotocol'>Push Discord</AMod> and the community managers will be able to assist you.
        </Span>
      </Answer>
    )
  },
]

const Governance = [
  {
    question: 'I want to apply for a grant to build on Push Protocol, how can I do this?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>Reach out to the Push team on <AMod href='https://discord.com/invite/pushprotocol'  target={"_blank"}>Discord</AMod> or schedule a pitch in the office hours or directly dropping a proposal on the <AMod href='https://gov.push.org/c/grants/10'  target={"_blank"}>Push Governance Forum.</AMod>
        </Span>
      </Answer>
    )
  },
  {
    question: 'If I have queries about grants where’s the best place to direct them?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>The <AMod href='https://discord.com/invite/pushprotocol'  target={"_blank"}>Push Discord</AMod> is really active when it comes to Push DAO related conversations, try redirecting your queries there and we will be there to help you out.
        </Span>
      </Answer>
    )
  },
  {
    question: 'How can I attend PushDAO Calls and Meetings?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>Office Hours are hosted on the <AMod href='https://discord.com/invite/pushprotocol'>Push Discord</AMod> for DAO related meetings, try joining the discord for more information.
        </Span>
      </Answer>
    )
  },
]

const Token = [
  {
    question: 'What’s the utility of $PUSH token?',
    section: 'Token',
    renderAnswer: () => (
      <Answer>
        <Span>Push Protocol aims to achieve a circular economy for its protocol by engendering a communication layer that is run by the community and for the community. The goal is for every participant to be rewarded for their participation while simultaneously discouraging behaviour that would be detrimental to the network.
        </Span>
        <Span>
        $PUSH is the native token of Push Protocol. It achieves the circular economy today through four major use cases: securing the network, network utility, Push DAO and governance, and reward pool fee.
        </Span>
        <Span>Read in detail 👉 <AMod href='https://docs.push.org/hub/pusheconomics'  target={"_blank"}>Pusheconomics</AMod></Span>
      </Answer>
    )
  },
  {
    question: 'From where can I get $PUSH?',
    section: 'Token',
    renderAnswer: () => (
      <Answer>
        <Span>You can swap any token to $PUSH from <AMod href='https://app.uniswap.org/#/swap?inputCurrency=0xf418588522d5dd018b425e472991e52ebbeeeeee' target={"_blank"}>Uniswap</AMod> or from any of the <AMod href='https://coinmarketcap.com/currencies/epns/markets/' target={"_blank"}>listed exchanges.</AMod>
        </Span>
      </Answer>
    )
  },
];


function FAQ() {

  const [showAnswers, setShowAnswers] = React.useState([]);
  const [active, setActiveSection] = React.useState();

  const toggleShowAnswer = (id, section) => {
    setActiveSection(section);
    if(active === section){
    
      setShowAnswers((oldAnswers) => {
      return {
        ...oldAnswers,
        [id]: !oldAnswers[id]
      };
    });

  }
  else{
    setShowAnswers([]);
    setShowAnswers((oldAnswers) => {
          return {
            [id]: !oldAnswers[id]
          };
        });
  }
  };

  const Items = ({body}) => {
    return(
    <ItemH flexDirection="column">
                {
                  body?.map(({question, section ,renderAnswer}, index) => (
                    <QnAItem key={index} justifyContent="flex-start">
                      <Question
                        onClick={() => {toggleShowAnswer(index,section);}}
                        hover="#e20880"
                        isOpen={showAnswers[index] && active === section }
                      >
                        <Span>
                          {question}
                        </Span>
                        <BsChevronExpand size={20} color={'#ddd'}/>
                      </Question>
  
                      {showAnswers[index] && active === section &&
                        renderAnswer()
                      }
                    </QnAItem>
                  ))
                }
    </ItemH>
  )};
  

  return (
    <PageWrapper
      pageName={PageMeta.FAQS.pageName}
      pageTitle={PageMeta.FAQS.pageTitle}
    >
      <FAQWrapper>
        <ResponsiveSection curve="bottom" padding="80px 0px 20px 0px" data-bkg="dark">
          <Content className="contentBox" flex="0">
            <ItemH flexDirection="column" justifyContent="flex-start">
              <HeroHeader>FREQUENTLY ASKED QUESTIONS</HeroHeader>
              <Para margin="20px 0 0 0" size="1.5rem">Frequently asked Questions and their answers!</Para>

              <ItemV align="flex-start" margin="0">
                <H3 maxWidth="400px">GET ANSWERS FOR SOME OF THE POPULAR QUESTIONS ASKED BY PUSH COMMUNITY!</H3>
              </ItemV>

            </ItemH>
          </Content>
        </ResponsiveSection>

        
        <ResponsiveSection curve="bottom" padding="80px 0px 0px 0px" data-bkg="light">
          <Content className="contentBox">
            
            {/* Questions and answers */}
            <Title>General</Title>
            <Items body={General} />

            <Title>Push Notifications</Title>
            <Items body={Notifs} />

            <Title>Push Chat</Title>
            <Items body={Chat} />

            <Title>Integrating Push</Title>
            <Items body={IntegratingPush} />

            <Title>Push Governance</Title>
            <Items body={Governance} />

            <Title>$PUSH Token</Title>
            <Items body={Token} />
            
         
          </Content>
        </ResponsiveSection>
      </FAQWrapper>
    </PageWrapper>
  );
}

const ResponsiveSection = styled(HybridSection)`
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  &[data-bkg="dark"] {
    & h1 {
        color: #FFF;
    }

    & h3 {
        color: #FFF;
    }

    & span {
        color: #FFF;
    }

    & p {
        color: #FFF;
    }
}

&[data-bkg="light"] {
    & h1 {
        color: #000;
    }

    & h3 {
        color: #000;
    }

    & span {
        color: #000;
    }

    & p {
        color: #000;
    }
  }
`;

const FAQWrapper = styled.main`
  & .contentBox {
    // row-gap: 18px;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

// css style
const Question = styled(Button)`
  align-items: center;
  align-self: stretch;
  width: 100%;

  background: ${props => props.isOpen ? '#e20880' : '#fff'};

  & span {
    color: ${props => props.isOpen ? '#FFF !important' : '#000'}; 
  }

  &: hover {
    color: #FFF !important;
  }
`;

const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;

`;

const QnAItem = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;
  color: #fff;



  & ${Question} {
    // background: transparent;
    justify-content: flex-start;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: rgb(31,23,47);
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #fff;
      font-size: 1.05em;
    }
  }
`;

const AMod = styled(A)`
  color: #fff;
  font-weight: 400;
  text-decoration: underline;
`;

const LIMod = styled(LI)`
  color: white;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #FFF !important;
`;

const Image = styled.img`
  width: 400px;
`;

const Title = styled.div`
  font-family: 'Strawford';
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  margin-top: 50px;
`;



export default FAQ;