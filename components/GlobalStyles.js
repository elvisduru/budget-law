// Global styles get added in the wrong order when using styled-components.
// Exporting the styles from this file is the current workaround to this issue.
// https://github.com/ben-rogerson/twin.macro/issues/277#issuecomment-754240911

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #05080A;
  }

  h1, h2 {
    ${tw`font-serif`}
  }

  h2 {
    ${tw`text-3xl pb-5 pt-4 px-6 text-white text-opacity-95`}
  }

  p {
      ${tw`font-sans leading-normal text-opacity-90 my-5`}
  }

  div.icon {background-size: cover;}

  div.puzzle {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMy4zMTcgMTIyLjY4NWE2IDYgMCAwIDAgNi02di02LjNhNiA2IDAgMCAwIC0xMiAwdjYuM2E2IDYgMCAwIDAgNiA2eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMy4zMTcgMjE3LjY4NWE2IDYgMCAwIDAgNi02di03NmE2IDYgMCAwIDAgLTEyIDB2NzZhNiA2IDAgMCAwIDYgNnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NjkuMiAxNTUuMjg1YzguNTE1IDAgMTcuMSA2LjExMyAyMS4zNyAxNS4yMTJhNiA2IDAgMCAwIDExLjQzLTIuNTQ4di04My44MzZhNiA2IDAgMCAwIC02LTZoLTg5LjQyOWE2IDYgMCAwIDAgLTYgNnYuODU0YTYgNiAwIDAgMCA0LjAzMiA1LjY2OGMxMC42MjUgMy42ODkgMTguMDQ1IDEyLjk1NCAxOC4wNDUgMjIuNTMxIDAgMTIuOTI0LTEzLjgxNSAyMy40MzgtMzAuOCAyMy40MzhzLTMwLjgtMTAuNTE0LTMwLjgtMjMuNDM4YzAtOS41NzIgNy40MjItMTguODM4IDE4LjA0OC0yMi41MzJhNiA2IDAgMCAwIDQuMDMtNS42Njd2LS44NTRhNiA2IDAgMCAwIC02LTZsLTE2OS44LS4wMDl2LTEuMDMzYzEzLjE4Ni02LjIyIDIyLjA3OC0xOC45NSAyMi4wNzgtMzIuMjIgMC0xOS41NC0xOS4yLTM1LjQzNy00Mi44LTM1LjQzN3MtNDIuOCAxNS45LTQyLjggMzUuNDM3YzAgMTMuMjcgOC44OTEgMjYgMjIuMDc3IDMyLjIydjEuMDI5aC04Mi4yOTRhNiA2IDAgMCAwIC02IDZ2ODEuMDM3Yy02LjIzOC0xMy4xLTE4LjkxOS0yMS45MjItMzIuMTUtMjEuOTIyLTE5LjU0IDAtMzUuNDM3IDE5LjItMzUuNDM3IDQyLjhzMTUuOSA0Mi44IDM1LjQzNyA0Mi44YzEzLjIzNSAwIDI1LjkxNi04LjgyMiAzMi4xNS0yMS45MmwtLjEzOSAxNjkuNTgzYTYgNiAwIDAgMCAxMS40MzIgMi41NTdjNC4yNjYtOS4xIDEyLjg1NC0xNS4yMSAyMS4zNy0xNS4yMSAxMi45MjMgMCAyMy40MzcgMTMuODE2IDIzLjQzNyAzMC44cy0xMC41MTQgMzAuOC0yMy40MzcgMzAuOGMtOC41MTUgMC0xNy4xLTYuMTEzLTIxLjM3LTE1LjIxMmE2IDYgMCAwIDAgLTExLjQzMiAyLjU0OHY4My44MzZhNiA2IDAgMCAwIDYgNmgyMDcuMDU4YTYgNiAwIDAgMCA2LTZ2LTgyLjMyMmgxLjAzNGM2LjIyMSAxMy4xODcgMTguOTUgMjIuMDc5IDMyLjIyIDIyLjA3OSAxOS41NCAwIDM1LjQzNy0xOS4yIDM1LjQzNy00Mi44cy0xNS45LTQyLjgtMzUuNDM3LTQyLjhjLTEzLjI3IDAtMjYgOC44OTEtMzIuMjIgMjIuMDc4aC0xLjAzNHYtNzYuNjYxaDc0LjQ3M2MtMTMuMSA2LjIzNy0yMS45MjMgMTguOTItMjEuOTIzIDMyLjE1IDAgMTkuNTQgMTkuMiAzNS40MzcgNDIuOCAzNS40MzdzNDIuOC0xNS45IDQyLjgtMzUuNDM3YzAtMTMuMjM1LTguODE5LTI1LjkxNi0yMS45MTktMzIuMTVoODMuMjYzYTYgNiAwIDAgMCA2LTZ2LTg1Ljk1NmE2IDYgMCAwIDAgLTExLjQzMi0yLjU0OGMtNC4yNjYgOS4xLTEyLjg1NCAxNS4yMS0yMS4zNyAxNS4yMS0xMi45MjMgMC0yMy40MzctMTMuODE1LTIzLjQzNy0zMC44czEwLjUxNC0zMC43OTIgMjMuNDM5LTMwLjc5MnptLTE2Ny42NDEgMjI5LjU1NGE2IDYgMCAwIDAgNS42NjYtNC4wMjVjMy43MDctMTAuNjI5IDEyLjk3NC0xOC4wNTMgMjIuNTM1LTE4LjA1MyAxMi45MjMgMCAyMy40MzcgMTMuODE1IDIzLjQzNyAzMC44cy0xMC41MTQgMzAuOC0yMy40MzcgMzAuOGMtOS41NjEgMC0xOC44MjgtNy40MjQtMjIuNTM1LTE4LjA1NWE2IDYgMCAwIDAgLTUuNjY2LTQuMDI0aC0xMS4wNTNhNiA2IDAgMCAwIC02IDZ2ODIuMzExaC0xOTUuMDU4di02MC43MjVhMzMuNjE3IDMzLjYxNyAwIDAgMCAyMC44IDcuNTQ2YzE5LjU0IDAgMzUuNDM3LTE5LjIgMzUuNDM3LTQyLjhzLTE1LjktNDIuOC0zNS40MzctNDIuOGEzMy42MjMgMzMuNjIzIDAgMCAwIC0yMC43NzUgNy41MjNsLjEtNjMuMTgzaDc5Ljk2NmE2IDYgMCAwIDAgMi41NDctMTEuNDMzYy05LjEtNC4yNjUtMTUuMjEtMTIuODUzLTE1LjIxLTIxLjM2OSAwLTEyLjkyMiAxMy44MTUtMjMuNDM2IDMwLjgtMjMuNDM2czMwLjggMTAuNTE0IDMwLjggMjMuNDM2YzAgOC41MTYtNi4xMTMgMTcuMS0xNS4yMTEgMjEuMzY5YTYgNiAwIDAgMCAyLjU0OCAxMS40MzNoNzguN3Y4Mi42NzdhNiA2IDAgMCAwIDYgNnptMTMyLjItMTk4Ljc1OGMwIDIzLjYgMTUuOSA0Mi44IDM1LjQzNyA0Mi44YTMzLjYyMiAzMy42MjIgMCAwIDAgMjAuOC03LjU0NXY2Mi44MzloLTgzLjQyNWE2IDYgMCAwIDAgLTYgNnY5Ljg5NWE2IDYgMCAwIDAgMy45NjkgNS43YzEwLjY1OCAzLjY3NiAxOC4xMDggMTIuOTYgMTguMTA4IDIyLjU1NSAwIDEyLjkyMy0xMy44MTUgMjMuNDM3LTMwLjggMjMuNDM3cy0zMC44LTEwLjUxNC0zMC44LTIzLjQzN2MwLTkuNTkgNy40NTEtMTguODc0IDE4LjExLTIyLjU1NWE2IDYgMCAwIDAgMy45NjgtNS43di05Ljg5MmE2IDYgMCAwIDAgLTYtNmgtODEuMTg0di04Mi4zMThhNiA2IDAgMCAwIC02LTZoLTEwLjk4OWE2LjAxMyA2LjAxMyAwIDAgMCAtNS43MSAzLjk2OWMtMy42OTUgMTAuNjYtMTIuOTc3IDE4LjEwOS0yMi41NTUgMTguMTA5LTEyLjkyMyAwLTIzLjQzNy0xMy44MTUtMjMuNDM3LTMwLjc5NXMxMC41MTQtMzAuOCAyMy40MzctMzAuOGM5LjU3OCAwIDE4Ljg2IDcuNDQ5IDIyLjU1NSAxOC4xMDlhNi4wMTMgNi4wMTMgMCAwIDAgNS43MSAzLjk2OWgxMC45ODlhNiA2IDAgMCAwIDYtNnYtMjkuNDIxYTYgNiAwIDAgMCAtNi02IDYgNiAwIDAgMCAtNiA2djIzLjQyNGgtMS4wMzRjLTYuMjIxLTEzLjE4Ny0xOC45NDktMjIuMDc4LTMyLjIyLTIyLjA3OC0xOS41NCAwLTM1LjQzNyAxOS4yLTM1LjQzNyA0Mi44czE1LjkgNDIuNzk1IDM1LjQzNyA0Mi43OTVjMTMuMjcxIDAgMjYtOC44OTEgMzIuMjItMjIuMDc4aDEuMDM0djc2LjNoLTYxLjAxNWEzMy42MjIgMzMuNjIyIDAgMCAwIDcuNTQ1LTIwLjhjMC0xOS41NC0xOS4yLTM1LjQzNi00Mi44LTM1LjQzNnMtNDIuOCAxNS45LTQyLjggMzUuNDM2YTMzLjYyOCAzMy42MjggMCAwIDAgNy41NDUgMjAuOGgtNjIuODN2LTgzLjQzYTYgNiAwIDAgMCAtNi02aC05LjlhNiA2IDAgMCAwIC01LjcgMy45NjljLTMuNjc2IDEwLjY2LTEyLjk1OSAxOC4xMS0yMi41NTQgMTguMTEtMTIuOTE5IDAtMjMuNDMzLTEzLjgxMi0yMy40MzMtMzAuNzk3czEwLjUxNC0zMC44IDIzLjQzNy0zMC44YzkuNTkgMCAxOC44NzMgNy40NSAyMi41NTQgMTguMTA5YTYuMDA1IDYuMDA1IDAgMCAwIDUuNyAzLjk2OWg5Ljg5MmE2IDYgMCAwIDAgNi02di04MS4xOTNoODIuMzE3YTYgNiAwIDAgMCA2LTZ2LTEwLjk4NGE2LjAxNCA2LjAxNCAwIDAgMCAtMy45NjgtNS43MWMtMTAuNjYtMy43LTE4LjEwOS0xMi45NzctMTguMTA5LTIyLjU1NSAwLTEyLjkyMyAxMy44MTUtMjMuNDM3IDMwLjgtMjMuNDM3czMwLjggMTAuNTE0IDMwLjggMjMuNDM3YzAgOS41NzgtNy40NSAxOC44Ni0xOC4xMDkgMjIuNTU1YTYuMDE1IDYuMDE1IDAgMCAwIC0zLjk2OSA1LjcxdjEwLjk4NGE2IDYgMCAwIDAgNiA2aDgyLjYwOHYxMi45YTYgNiAwIDAgMCA2IDYgNiA2IDAgMCAwIDYtNnYtMTIuODg3aDYyLjY0MmEzNC4zIDM0LjMgMCAwIDAgLTkuNTI4IDIzLjA1M2MwIDE5LjU0IDE5LjIgMzUuNDM4IDQyLjggMzUuNDM4czQyLjgtMTUuOSA0Mi44LTM1LjQzOGEzNC4zMDggMzQuMzA4IDAgMCAwIC05LjUyNC0yMy4wNTNoNjQuODU3djYwLjcxOGEzMy42MTcgMzMuNjE3IDAgMCAwIC0yMC44LTcuNTQ2Yy0xOS41NDIgMC0zNS40MzkgMTkuMTk4LTM1LjQzOSA0Mi43OTZ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==)}
  
  div.doc {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE2MS4xNDQgMjM0LjVoLTIuMzQ0YTYgNiAwIDAgMCAwIDEyaDIuMzQ2YTYgNiAwIDAgMCAwLTEyeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMi4yODggMjM0LjVoLTE3LjcyOGE2IDYgMCAwIDAgMCAxMmgxNy43MjhhNiA2IDAgMCAwIDAtMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzUzLjE2OSAyMzQuNWgtMTI3LjA4NWE2IDYgMCAwIDAgMCAxMmgxMjcuMDg1YTYgNiAwIDAgMCAwLTEyeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE3OS43MDYgMTUzLjczOGEyMC45IDIwLjkgMCAwIDAgLTYtNDAuOTMgOC45MDkgOC45MDkgMCAxIDEgOC45MDgtOC45MDkgNiA2IDAgMSAwIDEyIDAgMjAuOTM4IDIwLjkzOCAwIDAgMCAtMTQuOTA4LTIwLjAyMXYtMy4wNzhhNiA2IDAgMCAwIC0xMiAwdjMuMDc5YTIwLjkgMjAuOSAwIDAgMCA2IDQwLjkzIDguOTA2IDguOTA2IDAgMCAxIC4xMDYgMTcuODEyYy0uMDM2IDAtLjA3LS4wMDYtLjEwNi0uMDA2cy0uMDcgMC0uMTA2LjAwNmE4LjkxNiA4LjkxNiAwIDAgMSAtOC44LTguOSA2IDYgMCAxIDAgLTEyIDAgMjAuOTM5IDIwLjkzOSAwIDAgMCAxNC45MDggMjAuMDIydjMuNzU3YTYgNiAwIDAgMCAxMiAweiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzNC43NDEgMTQxLjIxMmgxMS40MjhhNiA2IDAgMCAwIDAtMTJoLTExLjQyOGE2IDYgMCAwIDAgMCAxMnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yODAuNDE4IDE0MS4yMTJoMzIuODIyYTYgNiAwIDAgMCAwLTEyaC0zMi44MjJhNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjU5LjE2OCAxNDEuMjEyYTYgNiAwIDAgMCAwLTEyaC0zNy41YTYgNiAwIDAgMCAwIDEyeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE2MS4xNDQgMTk0LjVoLTIuMzQ0YTYgNiAwIDAgMCAwIDEyaDIuMzQ2YTYgNiAwIDAgMCAwLTEyeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMi4yODggMTk0LjVoLTE3LjcyOGE2IDYgMCAwIDAgMCAxMmgxNy43MjhhNiA2IDAgMCAwIDAtMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjIwLjA4NCAyMDAuNWE2IDYgMCAwIDAgNiA2aDEyNy4wODVhNiA2IDAgMCAwIDAtMTJoLTEyNy4wODVhNiA2IDAgMCAwIC02IDZ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTYxLjE0NCAyNzQuNWgtMi4zNDRhNiA2IDAgMCAwIDAgMTJoMi4zNDZhNiA2IDAgMCAwIDAtMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAyLjI4OCAyNzQuNWgtMTcuNzI4YTYgNiAwIDAgMCAwIDEyaDE3LjcyOGE2IDYgMCAwIDAgMC0xMnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNTMuMTY5IDI3NC41aC0xMjcuMDg1YTYgNiAwIDAgMCAwIDEyaDEyNy4wODVhNiA2IDAgMCAwIDAtMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTYxLjE0NCAzMTQuNWgtMi4zNDRhNiA2IDAgMCAwIDAgMTJoMi4zNDZhNiA2IDAgMCAwIDAtMTJ6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAyLjI4OCAzMTQuNWgtMTcuNzI4YTYgNiAwIDAgMCAwIDEyaDE3LjcyOGE2IDYgMCAwIDAgMC0xMnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNjEuMTQ0IDM1NC41aC0yLjM0NGE2IDYgMCAwIDAgMCAxMmgyLjM0NmE2IDYgMCAwIDAgMC0xMnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMDIuMjg4IDM1NC41aC0xNy43MjhhNiA2IDAgMSAwIDAgMTJoMTcuNzI4YTYgNiAwIDAgMCAwLTEyeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEwMC4zODIgMjk4LjQ4NGE2IDYgMCAwIDAgLTYgNnYxMTMuNDkzYTYgNiAwIDAgMCAxMiAwdi0xMTMuNDkzYTYgNiAwIDAgMCAtNi02eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTkzLjc3NiAyODIuMzYyYTYgNiAwIDAgMCAxMiAwdi00MC42MTRhNiA2IDAgMCAwIC0xMiAweiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTk5Ljc3NiAyMjUuMzYyYTYgNiAwIDAgMCA2LTZ2LTUuNjE0YTYgNiAwIDAgMCAtMTIgMHY1LjYxNGE2IDYgMCAwIDAgNiA2eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzMy4wMTUgMzUzLjYwNmE4Ljc3NSA4Ljc3NSAwIDAgMCAtMi45MzYuNjM5bC0xLjgzNS44NThhMzIuOCAzMi44IDAgMCAxIC0yOS4wNzktLjcyNSA2IDYgMCAwIDAgLTIuODA4LS43aC0zLjg1N3YtMy4wNWE2IDYgMCAwIDAgLTEyIDB2My4wNWgtNC4xNDJhNiA2IDAgMCAwIC0yLjgwNy43IDMyLjc5MyAzMi43OTMgMCAwIDEgLTI5LjA3OS43MjVsLTEuODM1LS44NThhNi4yNjkgNi4yNjkgMCAwIDAgLTguNDM5IDIuOTY3bC0xNy45NTIgNDEuMjQ2YTYgNiAwIDAgMCAtMy4xOTUgNS4zYzAgMTMuODY3IDExLjk1NSAyNS4xNDkgMjYuNjQ5IDI1LjE0OXMyNi42NS0xMS4yODIgMjYuNjUtMjUuMTQ5YTYgNiAwIDAgMCAtMy4yLTUuM2wtMTIuNjE5LTI4Ljk5NGE0NC43NiA0NC43NiAwIDAgMCAyNy4yNTYtMy43ODNoMi43MTN2NTEuNTcyaC0xLjE5YTE3Ljg1NSAxNy44NTUgMCAwIDAgLTE3Ljg1NCAxNy44NTN2NS4xNDNhNiA2IDAgMCAwIDYgNmwzOC4wODcuMDEzYTYgNiAwIDAgMCA2LTZ2LTUuMTUxYTE3Ljg3NSAxNy44NzUgMCAwIDAgLTE3Ljg0My0xNy44NTNoLTEuMnYtNTEuNTc3aDIuNDI2YTQ0Ljg5MyA0NC44OTMgMCAwIDAgMjcuMjU3IDMuNzc5bC0xMi42MiAyOWE2IDYgMCAwIDAgLTMuMiA1LjNjMCAxMy44NjcgMTEuOTU1IDI1LjE0OSAyNi42NSAyNS4xNDlzMjYuNjUtMTEuMjgyIDI2LjY1LTI1LjE0OWE2IDYgMCAwIDAgLTMuMi01LjNsLTE3Ljk1Mi00MS4yNDVhNiA2IDAgMCAwIC01LjQ5Ni0zLjYwOXptLTkzLjMxNSAyMS4wMzUgMTAuMDYzIDIzLjExOWgtMjAuMTI2em0xMy4wMzMgMzUuMTE5YTE1LjQ1NCAxNS40NTQgMCAwIDEgLTI2LjA2NiAwem00MC45NTkgMTkuNWE1Ljg2MyA1Ljg2MyAwIDAgMSA1Ljc5IDVsLTI1Ljk2My0uMDA5YTUuODU2IDUuODU2IDAgMCAxIDUuNzkyLTV6bTM5LjMyNC0xMi4zNDlhMTQuOTMyIDE0LjkzMiAwIDAgMSAtMTMuMDM0LTcuMTQ5aDI2LjA2OGExNC45MzEgMTQuOTMxIDAgMCAxIC0xMy4wMzUgNy4xNDd6bS0xMC4wNjMtMTkuMTUxIDEwLjA2Mi0yMy4xMTkgMTAuMDYyIDIzLjExOXoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zOTMuMjMzIDI4OS42MjF2LTIzMy4xMjFhNDYuMDUyIDQ2LjA1MiAwIDAgMCAtNDYtNDZsLTI3MS41NzMuMDEzYy0uMTY3IDAtLjMzMi0uMDEzLS41LS4wMTNhNTUuNjM2IDU1LjYzNiAwIDAgMCAtNTUuNTcxIDU1LjU3MnYxMTUuNzZhNiA2IDAgMCAwIDkuOTMyIDQuNTMybDI0LjI4OS0yMS4wNyAxOS42NTMgMjAuNjcyYTYgNiAwIDAgMCA0LjI1OCAxLjg2NiA1LjkyNCA1LjkyNCAwIDAgMCA0LjMxMS0xLjczNWwyMC40OTItMjAuMjgzIDE2LjIwOSAxOC45ODZ2MjQ5LjdhNiA2IDAgMCAwIDkuNzQ4IDQuNjg2bDI5LjA3LTIzLjI1MyAyOS4wNyAyMy4yNTNhNiA2IDAgMCAwIDcuNSAwbDI5LjA2Ni0yMy4yNTEgMjkuMDYzIDIzLjI1MWE2IDYgMCAwIDAgNy41IDBsMjMuNTI2LTE4LjgyYTEwNi4wNTUgMTA2LjA1NSAwIDEgMCAxMDkuOTU3LTEzMC43NDV6bS0xNjYuODk3IDc2Ljg3OWg1Ny45ODNhMTA2LjMgMTA2LjMgMCAwIDAgLTMuNCA0MC4zNzVsLTI0LjkyNyAxOS45NDEtMjkuMDYzLTIzLjI1MWE2IDYgMCAwIDAgLTcuNSAwbC0yOS4wNjYgMjMuMjUxLTI5LjA2My0yMy4yNTJhNiA2IDAgMCAwIC03LjUgMGwtMjMuMDcgMTguNDUzdi0yNzkuMDE3YTYgNiAwIDAgMCAtNi02IDYgNiAwIDAgMCAtNiA2djIzLjMxOGwtMTEuMjcyLTEzLjIwOGE2IDYgMCAwIDAgLTguNzg0LS4zNjhsLTIwLjczMyAyMC41MTktMTkuMzg0LTIwLjM4OWE2IDYgMCAwIDAgLTguMjgxLS40bC0xOC42ODcgMTYuMjF2LTEwMS44MzdjMC0yNC4zODEgMTkuOTUxLTQ0Ljc1NiA0NC4zMjgtNDQuMzM5YTQzLjYyNCA0My42MjQgMCAwIDEgNDIuODE2IDQzLjU2NnYzNi45MjhhNiA2IDAgMCAwIDYgNiA2IDYgMCAwIDAgNi02di0zNi45MjhhNTUuNDg3IDU1LjQ4NyAwIDAgMCAtMjEuMTQxLTQzLjU3MmgyMzcuNjQxYTM0IDM0IDAgMCAxIDM0IDM0djIzMy4wMThhMTA1LjU3NiAxMDUuNTc2IDAgMCAwIC02My4zMTQgMjQuOTgyaC05MS41ODNhNi4xNjcgNi4xNjcgMCAwIDAgLTYuMjQ5IDUuODE1IDYgNiAwIDAgMCA2IDYuMTg1aDc5Ljc1N2ExMDYuMjgzIDEwNi4yODMgMCAwIDAgLTE3LjMxMSAyOGgtNjIuNDQ5YTYgNiAwIDAgMCAtNiA2LjE4NSA2LjE2NyA2LjE2NyAwIDAgMCA2LjI1MiA1LjgxNXptMTYwLjAyMSAxMjNhOTQuMDU0IDk0LjA1NCAwIDEgMSA5NC4wNTQtOTQuMDU0IDk0LjE2IDk0LjE2IDAgMCAxIC05NC4wNTQgOTQuMDU0eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=)}

  div.tax {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4yIDUxMi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NjMuNzYyIDUxMi4xMDNoMTIuODg1YzE5LjYwNCAwIDM1LjU1NC0xNS45NDkgMzUuNTU0LTM1LjU1NHYtMjEwLjYyN2MwLTE5LjYwNS0xNS45NDktMzUuNTU0LTM1LjU1NC0zNS41NTRoLTUwLjI4MWM1LjEyLTYyLjUyNS0xNy4xNDMtMTIzLjMwOC02MS44MTEtMTY3Ljg3NC00MC4yNjgtNDAuMTgtOTQuNC02MC40OTMtMTUwLjY2OC02Mi4zNjktMi44MDUtLjA5Ni02OS40MDQtMS43NzctMTI5LjkxNyA0My44OTctMy4zMDYgMi40OTYtMy45NjMgNy4xOTgtMS40NjggMTAuNTA0IDMuMyAzLjQwNSA2LjgwMSAzLjg5NCAxMC41MDQgMS40NjggNDQuOTUtMzMuOTI3IDk0LjY5My0zOS43NDMgMTEzLjA1OC00MC43MDRsLjAwNCAxOTguMDk5YzAgNi40NTkgOC4wMzcgMTAuMDU3IDEyLjc5NyA1LjMxbDE0MC4zOTQtMTQwLjA3MWMzOC4yNDEgNDEuMTQ4IDU2Ljk4NyA5NS43MyA1Mi4wNjMgMTUxLjc0aC02MC45NDFsLTQzLjQ4NC00My40ODVjLTQuNjMzLTQuNjMxLTEyLjgwNC0xLjI0OS0xMi44MDQgNS4zMDN2MzguMTgyaC0xNy42N2MtMTkuNjA0IDAtMzUuNTUzIDE1Ljk0OS0zNS41NTMgMzUuNTU0djE0My4yNjJjLTkuMDEgMS4yMzYtMTguMDM2IDEuODU2LTI3LjAyMiAxLjg1Ni0xNjguMTkuMTA1LTI2MC43NDgtMTk3LjcxOC0xNTEuNDM3LTMyNi4xNTMgMi42ODktMy4xNSAyLjMxNi03Ljg4NC0uODM0LTEwLjU3NC0zLjE1LTIuNjg5LTcuODg0LTIuMzE2LTEwLjU3NC44MzQtMTI1LjU0MiAxNDkuMjYtMi45NjMgMzcyLjcxMyAxODkuODY3IDM0OS4xNzZ2NTIuMjI2YzAgMTkuNjA0IDE1Ljk0OSAzNS41NTQgMzUuNTUzIDM1LjU1NGgxNDcuNDM3YzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0xNDcuNDM3Yy0xMS4zMzMgMC0yMC41NTMtOS4yMi0yMC41NTMtMjAuNTU0di0yMTAuNjI3YzAtMTEuMzM0IDkuMjItMjAuNTU0IDIwLjU1My0yMC41NTRoMjUuMTdjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXYtMjcuNTc1bDMyLjg3OCAzMi44NzhjMS40MDcgMS40MDcgMy4zMTQgMi4xOTcgNS4zMDQgMi4xOTdoMTI5LjM3MmMxMS4zMzMgMCAyMC41NTQgOS4yMiAyMC41NTQgMjAuNTU0djIxMC42MjhjMCAxMS4zMzMtOS4yMjEgMjAuNTU0LTIwLjU1NCAyMC41NTRoLTEyLjg4NWMtOS45MTguMzM5LTkuOTQ2IDE0LjY0MiAwIDE0Ljk5OXptLTEyNC43OTQtNDM0LjQyaC0xMTcuOTA0di0yMy45NWgxMTAuMDUzYzYuMDgzIDQuNDM3IDExLjkyNCA5LjIyMiAxNy40NzYgMTQuMzQ4em0tMzkuMDQgMzguOTUxaC03OC44NjNsLS4wMDEtMjMuOTUxaDEwMi44Njl6bS0zOS4wNCAzOC45NWgtMzkuODIybC0uMDAxLTIzLjk1MWg2My44Mjh6bS0zOS44MjUtMTQwLjE5OGMzMC4xMDkgMS4xNjMgNTkuNjM3IDkuMyA4Ni4wNzEgMjMuMzQ3aC04Ni4wN3ptLjAwMyAxNTUuMTk4aDI0Ljc4N2wtMjQuNzg3IDI0LjczeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNDAuMzU1IDQ2Ni43MjFjMy44NzEgMS40NzUgOC4yMDQtLjQ2OCA5LjY3OS00LjMzOWwzLjk2LTEwLjM5N2gyNy4wNjRsMy45MTYgMTAuMzc2YzMuMzU1IDguODk1IDE3LjQ1NiAzLjc3IDE0LjAzMy01LjI5NmwtMjMuMDc2LTYxLjE0N2MtMi43OTgtNy42NC0xMy43NzgtNy40NjUtMTYuNjI3LS4wMTlsLTIzLjI4OCA2MS4xNDVjLTEuNDc1IDMuODY5LjQ2OCA4LjIwMiA0LjMzOSA5LjY3N3ptMjcuMjMzLTUwLjQzIDcuODA5IDIwLjY5M2gtMTUuNjkxeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00MTIuODU1IDQ2NS44NDNjMy43MzIgMi4zMDQgNy4yMTYgMS43IDEwLjQ1LTEuODEybDE3LjI2MS0yNC41MDIgMTcuMjM0IDI0LjQ5OGM1LjgwNyA4LjI1NiAxNy42OTctLjkxNCAxMi4yNjgtOC42MzFsLTIwLjMyNS0yOC44OTMgMTcuMjUzLTI0LjQ5MWM1LjU4NS03LjkyOC02LjY3OS0xNi41NjctMTIuMjYyLTguNjM5bC0xNC4xNTggMjAuMDk4LTE0LjEzNS0yMC4wOTRjLTUuNTc3LTcuOTMyLTE3Ljg0OC42OTktMTIuMjY4IDguNjMxbDE3LjIyNyAyNC40ODktMjAuMzU2IDI4Ljg5NWMtMi4zODcgMy4zODctMS41NzYgOC4wNjUgMS44MTEgMTAuNDUxeiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMDYuMTkxIDQ2Ny4yMTJjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXYtNTQuNTE5aDkuNjk0YzkuOTMxLS4zNDQgOS45MjMtMTQuNjYgMC0xNWgtMzQuMjVjLTkuOTMxLjM0NC05LjkyMyAxNC42NiAwIDE1aDkuNTU2djU0LjUxOWMwIDQuMTQyIDMuMzU4IDcuNSA3LjUgNy41eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNDQuMjczIDM3NC4xNDJjMy4zMDMgMi4yNDggOC4xOTQgMS4yOSAxMC40Mi0xLjk4bDU2LjgwNC04My40N2MyLjMzMS0zLjQyNSAxLjQ0My04LjA5LTEuOTgtMTAuNDItMy40MjQtMi4zMy04LjA4OS0xLjQ0Mi0xMC40MiAxLjk4MWwtNTYuODA0IDgzLjQ3Yy0yLjMzMSAzLjQyNC0xLjQ0MyA4LjA4OSAxLjk4IDEwLjQxOXoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDI4LjI3NSAzNTAuNzgzYzAtMTMuNTk3LTkuMjQ4LTI0LjY1OS0yMC42MTUtMjQuNjU5LTI3LjM0MSAxLjMyNC0yNy4zMzEgNDggMCA0OS4zMTggMTEuMzY3IDAgMjAuNjE1LTExLjA2MiAyMC42MTUtMjQuNjU5em0tMjYuMjMgMGMwLTUuNTI4IDIuOTY1LTkuNjU5IDUuNjE1LTkuNjU5czUuNjE1IDQuMTMxIDUuNjE1IDkuNjU5LTIuOTY1IDkuNjU5LTUuNjE1IDkuNjU5LTUuNjE1LTQuMTMxLTUuNjE1LTkuNjU5eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNDUuNDEgMzI2LjI5YzExLjM2NyAwIDIwLjYxNC0xMS4wNjIgMjAuNjE0LTI0LjY1OS0uODcyLTMyLjgyNy00MC4yMTgtMzIuNjA0LTQxLjIzIDAgLjAwMSAxMy41OTcgOS4yNDkgMjQuNjU5IDIwLjYxNiAyNC42NTl6bTAtMzQuMzE5YzIuNjUgMCA1LjYxNCA0LjEzMSA1LjYxNCA5LjY1OXMtMi45NjQgOS42NTktNS42MTQgOS42NTktNS42MTUtNC4xMzEtNS42MTUtOS42NTkgMi45NjUtOS42NTkgNS42MTUtOS42NTl6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=)}

  div.bank {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjcxLjI5MyAyOTcuMTA2YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjVjMC0xMy40ODgtMTAuNDkxLTIzLjU2OC0yMi43OTItMjIuODg1di00LjE0N2MwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41LTQuMTQyIDAtNy41IDMuMzU4LTcuNSA3LjV2NC4xNDdjLTEyLjM3LS44MzQtMjIuODE0IDkuNjA4LTIyLjc5MiAyMi44ODV2MTAuMjU2Yy0uMDYyIDEzLjExIDEwLjQyMiAyMy44MzcgMjIuNzkyIDIyLjg4NXYyNi4wMjZjLTQuMjU5LjUxNC03Ljc5Mi0yLjY3OS03Ljc5Mi03Ljg4NSAwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNWMwIDEzLjEwOSAxMC40MjIgMjMuODM4IDIyLjc5MiAyMi44ODV2NC4xNDhjMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNSA0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41di00LjE0OGMxMi4yNTIuNjgyIDIyLjgyNS05LjQ5NiAyMi43OTItMjIuODg1di0xMC4yNTdjLjAzLTEzLjQ5MS0xMC40OTItMjMuNTY1LTIyLjc5Mi0yMi44ODV2LTI2LjAyNWM0LjEzMS0uNzA5IDcuNzkyIDIuODI0IDcuNzkyIDcuODg1em0tMjIuNzkyIDE4LjE0MmMtNC4yNTguNTE1LTcuNzg2LTIuNjgtNy43OTItNy44ODV2LTEwLjI1NmMtLjAxLTQuOTUxIDMuNjczLTguNjUzIDcuNzkyLTcuODg1em0yMi43OTIgMjIuODg0djEwLjI1N2MtLjA2MyA0LjkyNC0zLjYxNSA4LjY3NS03Ljc5MiA3Ljg4NXYtMjYuMDI2YzQuMTMxLS43MTIgNy44IDIuODI0IDcuNzkyIDcuODg0em0xOS4yMDgtMjU4LjIzOGMwLTE5LjAyMy0xNS40NzctMzQuNS0zNC41LTM0LjVzLTM0LjUgMTUuNDc3LTM0LjUgMzQuNSAxNS40NzcgMzQuNSAzNC41IDM0LjUgMzQuNS0xNS40NzcgMzQuNS0zNC41em0tNTQgMGMwLTEwLjc1MiA4Ljc0OC0xOS41IDE5LjUtMTkuNXMxOS41IDguNzQ4IDE5LjUgMTkuNS04Ljc0OCAxOS41LTE5LjUgMTkuNS0xOS41LTguNzQ4LTE5LjUtMTkuNXptMTkuNSAxNTYuOTE2Yy00Ny4zODYgMC04NS45MzggMzguNTUyLTg1LjkzOCA4NS45MzhzMzguNTUyIDg1LjkzOCA4NS45MzggODUuOTM4YzQ3LjM4NyAwIDg1LjkzOC0zOC41NTIgODUuOTM4LTg1LjkzOHMtMzguNTUxLTg1LjkzOC04NS45MzgtODUuOTM4em0wIDE1Ni44NzZjLTM5LjExNSAwLTcwLjkzOC0zMS44MjMtNzAuOTM4LTcwLjkzOHMzMS44MjMtNzAuOTM4IDcwLjkzOC03MC45MzggNzAuOTM4IDMxLjgyMyA3MC45MzggNzAuOTM4LTMxLjgyMyA3MC45MzgtNzAuOTM4IDcwLjkzOHptMjIyLjM3Mi0yMDAuMDljMTcuMzU5IDEuMDg2IDMzLjc3Ni0xMS41MzcgMzMuNjI4LTMwdi0yMi41Yy0uMTI0LTIuMTQ5LS44MzEtNC44NzItMy45NC02LjYwMmwtMjMzLjg3OC0xMjkuNjU3Yy0xMS4zODQtNi4zMTItMjQuOTc5LTYuMzEyLTM2LjM2NCAwbC05NC4zNiA1Mi4zMTJjLTMuNjIzIDIuMDA4LTQuOTMyIDYuNTczLTIuOTIzIDEwLjE5NiAyLjAwOCAzLjYyMyA2LjU3NCA0LjkzMyAxMC4xOTYgMi45MjNsOTQuMzYtNTIuMzEyYzYuODMyLTMuNzg3IDE0Ljk4OC0zLjc4NiAyMS44MTkgMGwyMDguNTk0IDExNS42NGgtNDM5LjAwN2w4My4yNzYtNDYuMTY3YzMuNjIzLTIuMDA4IDQuOTMyLTYuNTczIDIuOTIzLTEwLjE5Ni0yLjAwOC0zLjYyMy02LjU3My00LjkzMi0xMC4xOTYtMi45MjNsLTEwOC41NTggNjAuMTgzYy0xLjcyNCAxLjAxLTMuOTcyIDMuMTctMy45NDIgNi42MDN2MjIuNWMtLjE2IDE3LjY2IDE1LjgwNCAzMS45MjggMzMuNjI4IDMwbDI2LjM3MiAzNy4xMjF2MTg0LjA2MmwtMjYuMzcyIDM3LjEyaC0xNi4xMjhjLTkuNjQ5IDAtMTcuNSA3Ljg1MS0xNy41IDE3LjV2MjVjMCA5LjY0OSA3Ljg1MSAxNy41IDE3LjUgMTcuNWg0NzdjOS42NDkgMCAxNy41LTcuODUxIDE3LjUtMTcuNXYtMjVjMC05LjY0OS03Ljg1MS0xNy41LTE3LjUtMTcuNWgtMTYuMTI4bC0yNi4zNzItMzcuMTJ2LTE4NC4wNjJ6bS00NDguMzcyLTE1Yy04LjI3MSAwLTE1LTYuNzI5LTE1LTE1di0xNWg0ODJ2MTVjMCA4LjI3MS02LjcyOSAxNS0xNSAxNXptMzU0LjI0OSAxNTAuNTkyYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjV2LTg1Ljg2NGg0NS4yNTF2MTczLjg0OGgtNDUuMjUxdi01Mi45ODRjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2NTguMDkxbC0yNi4zNzIgMzcuMTJoLTE4OC43NTNsLTI2LjM3Mi0zNy4xMnYtMTg0LjA2MmwyNi4zNzItMzcuMTIxaDE4OC43NTRsMjYuMzcyIDM3LjEyMXY5MC45NzFjLS4wMDEgNC4xNDIgMy4zNTcgNy41IDcuNDk5IDcuNXptLTMzMi4yMi0xMzUuNTkyaDkxLjE5NWwtMTkuMzQzIDI3LjIyOGgtNTIuNTA5em02OC4yMjMgNDIuMjI4djE3My44NDhoLTQ1LjI1MnYtMTczLjg0OHptLTQ4Ljg4IDE4OC44NDhoNTIuNTA4bDE5LjM0MyAyNy4yMjdoLTkxLjE5NHptNDIzLjEyOCA0Mi4yMjdjMS4zNzkgMCAyLjUgMS4xMjIgMi41IDIuNXYyNWMwIDEuMzc4LTEuMTIxIDIuNS0yLjUgMi41aC00NzdjLTEuMzc4IDAtMi41LTEuMTIyLTIuNS0yLjV2LTI1YzAtMS4zNzggMS4xMjItMi41IDIuNS0yLjV6bS0zNC41MjgtMTVoLTkxLjE5NGwxOS4zNDQtMjcuMjI3aDUyLjUwN3ptLTE5LjM0NC0yMzEuMDc1aC01Mi41MDdsLTE5LjM0NC0yNy4yMjhoOTEuMTk0eiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+)}

  div.crime {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTUxLjgyMiwyNTguNzM0bC4xODIsMGE2LDYsMCwwLDAsNS44MTktNi4xNzZjLS4xLTMuMzc3LS4xNTktNi44NjQtLjE3NC0xMC4zNjRhNiw2LDAsMCwwLTYtNS45NzVoLS4wMjVhNiw2LDAsMCwwLTUuOTc2LDYuMDI1Yy4wMTYsMy42LjA3Niw3LjE5Mi4xNzksMTAuNjcxQTYsNiwwLDAsMCw1MS44MjIsMjU4LjczNFoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik01Mi4zMTQsMjY0LjYwNmE2LDYsMCwwLDAtNS40OTUsNi40NjZjMS44LDIyLjE1MSw1LjYsNDAuMjc1LDEwLjcxNCw1MS4wMzNhNiw2LDAsMCwwLDEwLjgzOS01LjE0OGMtMi4xLTQuNDE5LTcuMjM2LTE3LjgzMi05LjU5Mi00Ni44NTZBNiw2LDAsMCwwLDUyLjMxNCwyNjQuNjA2WiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTQ4MC42ODIsMTIzLjIyOWwxLjYzMi0xNC41NTNBMTguNzg2LDE4Ljc4NiwwLDAsMCw0NTkuNyw4OC4yMTNsMi4wNzMtMTMuNzg4YTE5LjU2MywxOS41NjMsMCwwLDAtMzcuOTI5LTkuMDUxLDIwLjU0OCwyMC41NDgsMCwwLDAtMzEuOTg0LDEyLjczN0wzNjguOTkzLDE5MS43MDVhMTMzLjk4NiwxMzMuOTg2LDAsMCwxLTcuNDMsMjIuOTIxYy0uMTI5LjMxNy0uMjQ5LjYxNy0uMzc0LjkyNi04LjE5MS0xMy40LTIxLjE2NS0zMC4wOTItMzAuNzc5LTM3LjcxMy0xMC4wMy03Ljk0OS0yNC41MTctOS40NTgtMzIuMTkxLTYuMjk1YTE1Ljc5NCwxNS43OTQsMCwwLDAtOS45NTQsMTMuMjczYy0uNzY4LDYuNDUzLDMuMzMzLDExLjQwNyw5LjAxLDE4LjI2NWwxMS45MjQsMTYuNmE1NS4xMiw1NS4xMiwwLDAsMSw4Ljg2LDE5Ljc3OGwzLjYxNywxNS44NDRjMi42MzQsMTEuMDQzLDI4LjY0MSw0OC4yMzgsNTAsNzcuNWE4LjgxNyw4LjgxNywwLDAsMSwxLjUsN2wtMi44NjIsMTMuNkgzNTcuNmE2LDYsMCwwLDAtNiw2VjM3NmgtOS42NjV2LS4yMzVhMTMuNzQ4LDEzLjc0OCwwLDAsMC0xMy43MzMtMTMuNzMzSDMwMi45MjNjLTQuODQ0LDAtOS4wNTgsMi41LTEwLjczNSw2LjM3YTkuNiw5LjYsMCwwLDAsLjA0Miw3LjZIMjgxLjkzOXYtLjIzNWExMy43NDgsMTMuNzQ4LDAsMCwwLTEzLjczMy0xMy43MzNIMjQyLjkyM2ExMy43NDksMTMuNzQ5LDAsMCwwLTEzLjczMywxMy43MzNWMzc2aC03LjI1MXYtLjIzNWExMy43NDgsMTMuNzQ4LDAsMCwwLTEzLjczMy0xMy43MzNIMTgyLjkyM2ExMy43NDksMTMuNzQ5LDAsMCwwLTEzLjczMywxMy43MzNWMzc2SDE2MC40VjM1OS40MDZhNiw2LDAsMCwwLTYtNkgxNDEuNjg5bC0yLjg2Mi0xMy42YTguODE3LDguODE3LDAsMCwxLDEuNS03LjAwNmMyMS4zNTMtMjkuMjU5LDQ3LjM2LTY2LjQ1NCw1MC4wMDctNzcuNTUzbDMuNi0xNS43ODhhNTUuMTIsNTUuMTIsMCwwLDEsOC44Ni0xOS43NzhsMTEuOTI0LTE2LjZjNS42NzctNi44NTgsOS43NzgtMTEuODEyLDkuMDEtMTguMjY1YTE1Ljc5NCwxNS43OTQsMCwwLDAtOS45NTQtMTMuMjczYy03LjY3Mi0zLjE2Mi0yMi4xNjEtMS42NTQtMzIuMTkxLDYuMjk1LTkuNjE0LDcuNjIxLTIyLjU4OCwyNC4zMTUtMzAuNzc5LDM3LjcxMy0uMTI1LS4zMDktLjI0NS0uNjA5LS4zNzQtLjkyNmExMzMuOTg2LDEzMy45ODYsMCwwLDEtNy40My0yMi45MjFMMTIwLjE0NCw3OC4xMTFBMjAuNTQ1LDIwLjU0NSwwLDAsMCw4OC4xNiw2NS4zNzNhMTkuNTY2LDE5LjU2NiwwLDAsMC0zNy45MjksOS4wNTJMNTIuMyw4OC4yMTJhMTguNzg4LDE4Ljc4OCwwLDAsMC0yMi42MTgsMjAuNDY1bDEuNjMyLDE0LjU1MkEyNi4wNCwyNi4wNCwwLDAsMCwxMy42MTEsMTQ5Ljg2bDIuMDk1LDI5LjA2NGMuOTY3LDE0LjgxMSwxLjg4LDI4LjgsMS45NDMsNDQuMzE3LjE0MywzNC42NDEsNC41ODUsNjQuNSwxMS44ODMsNzkuODY0YTI4LjM3MSwyOC4zNzEsMCwwLDEsMi43NTksMTIuMDExYy4wMTcsMS45LjA2Myw0LjE0Ny4yNzUsNi40MDVsMywzMS44ODVIMjQuMTZhNiw2LDAsMCwwLTYsNnY0My4xNzVhNiw2LDAsMCwwLDYsNkgzNi40MDZsMS43NCw0NS41OTFhNiw2LDAsMCwwLDUuOTg4LDUuNzcxbDEwNi42OC4xMzRoLjAwN2E2LDYsMCwwLDAsNS45NDgtNi43OTRsLTUuOTctNDQuN2gzLjZhNiw2LDAsMCwwLDYtNlYzODhoOC43OTR2LjIzNWExMy43NDksMTMuNzQ5LDAsMCwwLDEzLjczMywxMy43MzNoMjUuMjgzYTEzLjc0OCwxMy43NDgsMCwwLDAsMTMuNzMzLTEzLjczM1YzODhoNy4yNTF2LjIzNWExMy43NDksMTMuNzQ5LDAsMCwwLDEzLjczMywxMy43MzNoMjUuMjgzYTEzLjc0OCwxMy43NDgsMCwwLDAsMTMuNzMzLTEzLjczM1YzODhIMjkyLjIzYTkuNiw5LjYsMCwwLDAtLjA0Miw3LjZjMS42NzcsMy44Nyw1Ljg5MSw2LjM3LDEwLjczNSw2LjM3aDI1LjI4M2ExMy43NDgsMTMuNzQ4LDAsMCwwLDEzLjczMy0xMy43MzNWMzg4SDM1MS42djE0LjU4MWE2LDYsMCwwLDAsNiw2aDMuNmwtNS45Nyw0NC43YTYsNiwwLDAsMCw1Ljk0OCw2Ljc5NGguMDA4bDEwNS42OC0uMTM0YTYsNiwwLDAsMCw1Ljk4Ny01Ljc3MWwxLjc0LTQ1LjU5MUg0ODcuODRhNiw2LDAsMCwwLDYtNlYzNTkuNDA2YTYsNiwwLDAsMC02LTZoLTExLjRsMy0zMS44ODRjLjIxMi0yLjI1OS4yNTgtNC41MDYuMjc1LTYuNDA3YTI4LjM3LDI4LjM3LDAsMCwxLDIuNzU5LTEyLjAxYzcuMy0xNS4zNjcsMTEuNzQtNDUuMjIzLDExLjg4My03OS44NjQuMDYzLTE1LjUxNS45NzYtMjkuNTA2LDEuOTQxLTQ0LjI3N2wyLjEtMjkuMUEyNi4wMzksMjYuMDM5LDAsMCwwLDQ4MC42ODIsMTIzLjIyOVpNNDkuOTE3LDQ0Ny45NTFsLTEuNS0zOS4zN2g5MC4yNzdsNS4yNzQsMzkuNDg3Wm05OC40NzktNTEuMzdIMzAuMTZWMzY1LjQwNkg1M2E2LDYsMCwwLDAsNi02aDBhNiw2LDAsMCwwLTYtNkg0Ny42MTZsLTMuMS0zMy4wMDljLS4xNzEtMS44MDctLjIwOC0zLjY1Ny0uMjIzLTUuMzg4YTQwLjMsNDAuMywwLDAsMC0zLjkxOS0xNy4wNTJjLTUuMDgtMTAuNjk1LTEwLjU2My0zNS45NTEtMTAuNzIzLTc0Ljc2NS0uMDY1LTE1Ljg4MS0xLjAzMy0zMC43MS0xLjk3Mi00NS4wOUwyNS41OCwxNDlhMTQuMDgzLDE0LjA4MywwLDAsMSw3LjEzNS0xMy4zMTdsOC45NjcsNzkuOTU2QTYsNiwwLDAsMCw1My42MDcsMjE0LjNsLTEyLTEwNi45NmE2LjgsNi44LDAsMCwxLDUuNi03LjQ0OCw2Ljc1Nyw2Ljc1NywwLDAsMSw3LjUsNC4zNTRsMTQuNSw5Ni40NTZhNiw2LDAsMCwwLDUuOTI2LDUuMTA5LDYuMDA2LDYuMDA2LDAsMCwwLDUuOTA2LTcuMTJMNjIuMSw3Mi42NGE3LjU3NCw3LjU3NCwwLDAsMSwxNC45My0yLjU0OEw5Ni44MTQsMTk3LjU4N2E2LDYsMCwwLDAsMTEuODYyLTEuODE0TDkxLjQyLDgxLjgzNWE4LjYxLDguNjEsMCwwLDEsOC4yNDEtOC4yMjQsNy45MjEsNy45MjEsMCwwLDEsMy4xNzMuNDc5LDguNTIxLDguNTIxLDAsMCwxLDUuNTQ2LDYuMzg5bDIyLjg2MywxMTMuNTk0YTE0My42LDE0My42LDAsMCwwLDguMDg3LDI1LjFjNC4zMzEsMTAuNTkyLDUuODg4LDE1LjY4OSw0Ljg1NiwyNi43NDJhNi4yNDQsNi4yNDQsMCwwLDAsNS4zNzksNi44MTRxLjI5LjAyOS41NzUuMDI4YTYsNiwwLDAsMCw1Ljk2NS01LjQyNSw1OC43NDgsNTguNzQ4LDAsMCwwLS4zLTE1LjgxNGM0LjY0LTEwLjcyNywyMS41NjUtMzUuMDE2LDMzLjI0LTQ0LjI2OSw1LjUxLTQuMzY5LDE1LjMwOC02LjYwNywyMC4xNjQtNC42YTMuODY0LDMuODY0LDAsMCwxLDIuNjExLDMuNmMuMTYsMS4zNDQtMy41OTUsNS44ODEtNi4zMzgsOS4xOTNsLTEyLjQ2MSwxNy4zYTY3LjEsNjcuMSwwLDAsMC0xMC43NzgsMjQuMDYxbC0zLjU5MSwxNS43M2MtMS42LDYuNjkyLTIwLjQ0MywzNS40MjgtNDguMDE0LDczLjIwN2EyMC44MzcsMjAuODM3LDAsMCwwLTMuNTUzLDE2LjU1MmwyLjM0MywxMS4xMjZIOTNhNiw2LDAsMCwwLTYsNmgwYTYsNiwwLDAsMCw2LDZoNTUuNFptNjEuNTQzLTIwLjU2YTUuOTkzLDUuOTkzLDAsMCwwLDAsMTEuOTU4di4yNTZhMS43MzUsMS43MzUsMCwwLDEtMS43MzMsMS43MzNIMTgyLjkyM2ExLjczNiwxLjczNiwwLDAsMS0xLjczMy0xLjczM1YzODhoMi40NTFhNiw2LDAsMCwwLDAtMTJIMTgxLjE5di0uMjM1YTEuNzM2LDEuNzM2LDAsMCwxLDEuNzMzLTEuNzMzaDI1LjI4M2ExLjczNSwxLjczNSwwLDAsMSwxLjczMywxLjczM1ptNjAtLjAyMWgtMS41OGE2LDYsMCwxLDAsMCwxMmgxLjU4di4yMzVhMS43MzUsMS43MzUsMCwwLDEtMS43MzMsMS43MzNIMjQyLjkyM2ExLjczNiwxLjczNiwwLDAsMS0xLjczMy0xLjczM1YzODhoMi40NTFhNiw2LDAsMCwwLDAtMTJIMjQxLjE5di0uMjM1YTEuNzM2LDEuNzM2LDAsMCwxLDEuNzMzLTEuNzMzaDI1LjI4M2ExLjczNSwxLjczNSwwLDAsMSwxLjczMywxLjczM1ptNjAsMGgtMS41OGE2LDYsMCwxLDAsMCwxMmgxLjU4di4yMzVhMS43MzUsMS43MzUsMCwwLDEtMS43MzMsMS43MzNIMzA0LjkzNWE2LjAwOCw2LjAwOCwwLDAsMCwuMjU1LTEuNzMzdi0uNDQ0YTUuOTkzLDUuOTkzLDAsMCwwLDAtMTEuNTgydi0uNDQ0YTYuMDA4LDYuMDA4LDAsMCwwLS4yNTUtMS43MzNoMjMuMjcxYTEuNzM1LDEuNzM1LDAsMCwxLDEuNzMzLDEuNzMzWm0xMzEuMTQ0LDcxLjk1MS05My4wNDkuMTE3LDUuMjc0LTM5LjQ4N2g4OS4yNzdabTIwLjc1Ny04Mi41NDV2MzEuMTc1SDM2My42VjM2NS40MDZaTTQ4Ni40MiwxNDlsLTIuMSwyOS4xNDRjLS45MzYsMTQuMzQtMS45LDI5LjE2OS0xLjk2OSw0NS4wNS0uMTYsMzguODE0LTUuNjQzLDY0LjA3LTEwLjcyMyw3NC43NjVhNDAuMyw0MC4zLDAsMCwwLTMuOTE5LDE3LjA1MWMtLjAxNSwxLjczMi0uMDUyLDMuNTgyLS4yMjMsNS4zOWwtMy4xLDMzLjAwOEgzODIuNTczbDIuMzQzLTExLjEyNmEyMC44NCwyMC44NCwwLDAsMC0zLjU1Mi0xNi41NTJjLTI3LjU3Mi0zNy43NzktNDYuNDE5LTY2LjUxNS00OC03My4xNWwtMy42LTE1Ljc4N0E2Ny4xLDY3LjEsMCwwLDAsMzE4Ljk4LDIxMi43M2wtMTIuNDYxLTE3LjNjLTIuNzQzLTMuMzEyLTYuNS03Ljg0OS02LjMzOC05LjE5M2EzLjg2NCwzLjg2NCwwLDAsMSwyLjYxMS0zLjZjNC44NTQtMiwxNC42NTQuMjM2LDIwLjE2NCw0LjYsMTEuNjc1LDkuMjUzLDI4LjYsMzMuNTQyLDMzLjI0LDQ0LjI2OWE1OC43NDgsNTguNzQ4LDAsMCwwLS4zLDE1LjgxNCw2LDYsMCwwLDAsNS45NjUsNS40MjVxLjI4OSwwLC41ODItLjAyOGE2LDYsMCwwLDAsNS40LTYuNTQ4Yy0xLjA4Mi0xMS4yMzguNDY2LTE2LjMzMiw0LjgzMS0yNy4wMDhhMTQzLjYsMTQzLjYsMCwwLDAsOC4wODctMjUuMDk1TDQwMy42Miw4MC40NzlhOC41NSw4LjU1LDAsMCwxLDExLjE0NS02LjQsOC41NzgsOC41NzgsMCwwLDEsNS44MTUsNy43NThMNDAzLjMyNCwxOTUuNzczYTYsNiwwLDAsMCwxMS44NjIsMS44MTRMNDM0Ljk3Myw3MC4wOTJhNy41NzQsNy41NzQsMCwwLDEsMTQuOTMsMi41NDlMNDMwLjkxNywxOTguOTE3YTYsNiwwLDEsMCwxMS44NjYsMS43ODRsMTQuNS05Ni40NTdhNi43NTgsNi43NTgsMCwwLDEsNy41LTQuMzUzLDYuOCw2LjgsMCwwLDEsNS42LDcuNDQ4bC0xMiwxMDYuOTZhNiw2LDAsMSwwLDExLjkyNSwxLjMzOGw4Ljk2Ny03OS45NTZBMTQuMDgyLDE0LjA4MiwwLDAsMSw0ODYuNDIsMTQ5WiIgZmlsbD0iI2U2Yjg5MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=)}

  div.civil {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0NS40MjIgNDAwLjE3N2E2IDYgMCAxIDAgMS45MDggMTEuODQ3IDU0LjY5MyA1NC42OTMgMCAwIDEgOC42Ny0uNjg4IDYgNiAwIDAgMCAwLTEyIDY2Ljc3NSA2Ni43NzUgMCAwIDAgLTEwLjU3OC44NDF6IiBmaWxsPSIjZTZiODkxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk0LjI2NSAzMTMuMWgtMS40NThsLTY4LjgtMTY1LjVoMjcuMjg0YTI1LjA1NSAyNS4wNTUgMCAxIDAgLS41Ny0zNS41OTFoLTExMS44M2EyNi44NDggMjYuODQ4IDAgMCAwIC0yMC4xNjEtOS4xMTRoLTQ0Ljkzdi00MS4wNjVhMjUuMDU3IDI1LjA1NyAwIDEgMCAtMzUuNTkgMHY0MS4wNTZoLTQ0Ljk0YTI2Ljg0OCAyNi44NDggMCAwIDAgLTIwLjE2MSA5LjExNGgtMTExLjgzYTI1LjA1OSAyNS4wNTkgMCAxIDAgLS41NyAzNS41OTFoMjcuMjg0bC02OC44IDE2NS41aC0xLjQ1OGE2IDYgMCAwIDAgLTYgNmMwIDQzLjQ5NCAzNy45NDggNzguODc5IDg0LjU5MiA3OC44NzlzODQuNTkxLTM1LjM4NSA4NC41OTEtNzguODc5YTYgNiAwIDAgMCAtNi02aC0xLjQ1N2wtNjguOC0xNjUuNWg2OC40NWEyNi44NDMgMjYuODQzIDAgMCAwIDIwLjE2IDkuMTE1aDQ0LjkzNXYyMjIuNDY3Yy0zMC41ODQgNi4zNzItNTQuNTE5IDI4Ljc3My01OS4yNDggNTYuODI4aC0yLjI5NWEzNC45IDM0LjkgMCAwIDAgLTM0Ljg2MyAzNC44NjF2MTUuOTg1YTYgNiAwIDAgMCA2IDZoMjE2LjRhNiA2IDAgMCAwIDYtNnYtMTUuOTg1YTM0LjkgMzQuOSAwIDAgMCAtMzQuODYyLTM0Ljg2MmgtMi4zYy00LjcyOS0yOC4wNTktMjguNjU3LTUwLjQ1OS01OS4yNDYtNTYuODI5di0yMjIuNDY1aDQ0LjkzOGEyNi44NDMgMjYuODQzIDAgMCAwIDIwLjE2LTkuMTE1aDY4LjQ1bC02OC44IDE2NS41aC0xLjQ1N2E2IDYgMCAwIDAgLTYgNmMwIDQzLjQ5NCAzNy45NDcgNzguODc5IDg0LjU5MSA3OC44NzlzODQuNTkyLTM1LjM4NSA4NC41OTItNzguODc5YTYgNiAwIDAgMCAtNi4wMDEtNS45OTF6bS0yNS42NDktMTk2LjY0MmExMy4wNTcgMTMuMDU3IDAgMSAxIC0xMy4wNTYgMTMuMDU3IDEzLjA3MiAxMy4wNzIgMCAwIDEgMTMuMDU2LTEzLjA1N3ptLTQyNS4yMzIgMjYuMTE0YTEzLjA1NyAxMy4wNTcgMCAxIDEgMTMuMDU2LTEzLjA1NyAxMy4wNzIgMTMuMDcyIDAgMCAxIC0xMy4wNTYgMTMuMDU3em01Mi45NDMgMjQzLjRjLTI5Ljc3MyAwLTU1LjQwNi0xNi42LTY2LjU5MS00MC4yODFoMTMzLjE4MWMtMTEuMTg1IDIzLjY4MS0zNi44MTcgNDAuMjgzLTY2LjU5IDQwLjI4M3ptNzAuODM0LTUyLjI4MWgtMTQxLjY2OWE2MS42NzQgNjEuNjc0IDAgMCAxIC0xLjQ2OC04LjZoMTQ0LjZhNjEuNjc0IDYxLjY3NCAwIDAgMSAtMS40NjMgOC42MDJ6bS02LjctMjAuNmgtMTI4LjI3M2w2NC4xMzktMTU0LjI4NXptLTkyLjc3NC0xNzcuNWEyNC45NyAyNC45NyAwIDAgMCAuMTM1LTExLjU5MWg5OS4xNzhhMjYuNzY1IDI2Ljc2NSAwIDAgMCAwIDExLjU5MXptMTg4LjMxMy0xMDQuNDM4YTEzLjA1NyAxMy4wNTcgMCAxIDEgLTEzLjA1NyAxMy4wNTcgMTMuMDcxIDEzLjA3MSAwIDAgMSAxMy4wNTctMTMuMDU3em01LjggMzcuNDN2MzQuM2gtMTEuNTl2LTM0LjNhMjQuODkgMjQuODkgMCAwIDAgMTEuNTkgMHptNTkuMDM0IDM2Ny40MTdoLTEyLjgzNGE2IDYgMCAwIDAgLTYgNiA2IDYgMCAwIDAgNiA2aDI3LjMzOGEyMi44NjEgMjIuODYxIDAgMCAxIDIyLjg2MiAyMi44NjJ2OS45ODVoLTIwNC40di05Ljk4NWEyMi44NjEgMjIuODYxIDAgMCAxIDIyLjg2Mi0yMi44NjJoOTEuMzM4YTYgNiAwIDAgMCA2LTYgNiA2IDAgMCAwIC02LTZoLTU0LjAxM2MuMDQzLS4wOTMuMS0uMTc5LjEzNi0uMjc2IDIuNjk0LTYuNzMgNy44NTItMTIuNiAxNC45MjktMTYuOTkyYTYuMTkzIDYuMTkzIDAgMCAwIDIuMzQxLTguMTkxIDYgNiAwIDAgMCAtOC4zNy0yLjE4OWMtOS40MTkgNS43NjctMTYuMzQ5IDEzLjY5LTIwLjA0IDIyLjkxM2E1Ljk3NiA1Ljk3NiAwIDAgMCAuMTI0IDQuNzM1aC0xMS45NDRjNS42MDktMjYuNjMgMzIuNzU2LTQ2LjY2NSA2NC44MzctNDYuNjY1czU5LjIyNyAyMC4wMzMgNjQuODM0IDQ2LjY2NXptLTcwLjYyOS01OC40NTV2LTIyMC44MzloMTEuNTk1djIyMC44NGMtMS45MTYtLjEyNi0zLjg0NS0uMjEtNS44LS4yMXMtMy44NzkuMDg0LTUuNzk1LjIxem02OC41MjUtMjMyLjg0aC0xMjUuNDZhMTQuOTEgMTQuOTEgMCAwIDEgMC0yOS44MmgxMjUuNDZhMTQuOTEgMTQuOTEgMCAwIDEgMCAyOS44MnptMjYuMjctOS4xMTRhMjYuNzY1IDI2Ljc2NSAwIDAgMCAwLTExLjU5MWg5OS4xNzRhMjQuOTcgMjQuOTcgMCAwIDAgLjEzMSAxMS41OTF6bTcwLjY2OSAyMy4yMTUgNjQuMTQzIDE1NC4yOTRoLTEyOC4yNzd6bTAgMjI3LjE2OGMtMjkuNzcyIDAtNTUuNDA1LTE2LjYtNjYuNTktNDAuMjgxaDEzMy4xODVjLTExLjE4NSAyMy42NzktMzYuODE4IDQwLjI4MS02Ni41OTEgNDAuMjgxem03MC44MzUtNTIuMjgxaC0xNDEuNjY1YTYxLjY3NCA2MS42NzQgMCAwIDEgLTEuNDY4LTguNmgxNDQuNjA1YTYxLjY3NCA2MS42NzQgMCAwIDEgLTEuNDY4IDguNnoiIGZpbGw9IiNlNmI4OTEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+)}
`

export default function GlobalStylesComponent() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}
