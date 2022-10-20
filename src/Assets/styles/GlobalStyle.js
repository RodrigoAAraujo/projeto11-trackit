import { createGlobalStyle} from "styled-components";
import { White, LightBlue, LetterGray, BorderLightGray, LetterGrayDisabled, BackgroundGrayDisabled} from "../../Constants/colors";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a{
        text-decoration: none;
        color: none;
        cursor: pointer;
    }
    *{
        box-sizing: border-box;
    }

    //General Settings

    button{
        outline: none;
        box-shadow: none;
        border: none;
        color: ${White};
        background-color: ${LightBlue};
        width: 100%;
        border-radius: 5px;
        padding: 10px 0px;
        
        cursor: pointer;

        :hover{
            opacity: 0.9;
        }
        :disabled{
            opacity: 0.5;
        }
    }
    
    input{
        width: 100%;
        padding: 10px 4px ;
        border: ${BorderLightGray} 1px solid;
        border-radius: 5px;
        background-color: ${White};

        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: ${LetterGray};

        cursor: text;

        :focus-within{
            outline: none;
            border: ${LightBlue} 2px solid;
        }

        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            text-align: left;
            color: ${LetterGray};
        }

        :disabled{
            background-color: ${BackgroundGrayDisabled};
            &::placeholder{
                color: ${LetterGrayDisabled};
            }
        }
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 0px auto;
    }

`

export default GlobalStyle