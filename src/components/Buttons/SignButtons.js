import styled from 'styled-components'

import google from 'assets/png/google-logo-icon-PNG-Transparent-Background.png'
import slack from 'assets/png/Slack_Mark_White_Web.png'


const Btn = styled.div`
    background-repeat: no-repeat;
    background-position: 10px center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: LatoBold,sans-serif;
    font-size: 14px;
    color: #fff;
    text-align: center;
    height: 30px;
    background-size: 18px 18px;
    cursor: pointer;
`


export const Slack = Btn.extend`
    background-image: url(${slack});
    background-color: #3cb187;
`
Slack.displayName = 'SlackSignIcon'


export const Google = Btn.extend`
  background-image: url(${google});
  background-color: #dc4e41;
`

Google.displayName = 'GoogleSignBtn'