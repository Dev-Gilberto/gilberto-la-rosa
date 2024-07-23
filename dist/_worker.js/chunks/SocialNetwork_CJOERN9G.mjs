globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, F as spreadAttributes, d as addAttribute, a as renderComponent, G as unescapeHTML, H as Fragment } from './astro/server_DF50JbGT.mjs';

const icons = {"local":{"prefix":"local","lastModified":1721754125,"icons":{"cpu":{"body":"<defs><style>.b974054b-9ad9-46d9-a72e-743e212492b7{fill:#1d1d1b}</style></defs><path d=\"M401.82 456.47c-5.52 13.54-30.93 20.43-40.07 6.66-9.41 5-15.42 13.74-20.67 23.23a56 56 0 0 0 19.25 20.55c9.57 7.26 18.16-8.87 28.12-7.05 5.89 1.08 19.47 17.64 19.38 16.57 1.16 14.4-49.87 39.2-76.53 25.39-16.22-8.4-35.6-57.09-17.31-80.25 8.69-11 25-15.74 40.84-30.54 19.25 5.12 40.17 8.71 46.99 25.44Zm-67.54-6.19c-32 18.58-25.5 83.44 17.05 88.21 15.15 1.7 39.21-4.33 40.71-26.56-23.32 3.52-28.87 7.51-43.65-5.41-18.93-16.55-14.61-34 5.54-47.63 12.59-10.14 29.86 10.16 36.07-6.79-17.62-12.99-40.55-10.62-55.72-1.82ZM414.53 433c37-1.2 68 3.22 82.94 22.62-5.17 16.47-.17 19.52 6.92 32.1-6.88 6.39-3.93 23.27-5.15 35.69 9.52 14.23 33.73 14.71 55.2 17.74 14.6-10.85 20.63-66.07 10.82-87.3-3.1 18.12 2.65 75.38-38 66.49-11.94-16.82-11.22-44.63-5.75-67.91 2.9-15.58-27.58.11-23.36-16.7 11.45.84 26.12-1.34 31.7 5-6.22 20.21-7.23 51.07-2.33 71.64 36 6.47 31.12-46.64 26.21-70.86 11.15 3.66 10.5-5.27 20-3.33 6 31.74 5.21 90.21-11.6 111.18-27.35-.1-47.5-7-67.27-14.14q.9-27.87 1.82-55.73c-19.12 4.28-30.68 16.67-44.68 26.43q-.66 19.89-1.3 39.8c-13.62-2.19-22.36.84-32 2.94-8.7-31.17-7.8-85.02-4.17-115.66Zm3.6 12.07c6.54 30.35-9.35 87.95 16.78 96.17 13.07-3.9 7.47-27.72 9.39-43.52 11.91-14.75 42.73-9.31 41.1-38.51-9.54-15.13-45.4-23.12-67.27-14.16Z\" class=\"b974054b-9ad9-46d9-a72e-743e212492b7\"/><path d=\"M491.54 148.62c8.73 31.95-2.2 86.2 3.68 131.6 1.73 13.37 0 35.39 18.86 32.49 7.82-7.67-2.17-14.1-3.2-24C507 251.25 516 192.86 503.09 161 508 147.46 520 139.06 532 130c3.47-2.63 8.92-.84 12.07-3.59 10.75-9.38 32.13-23.71 45.08-38.37.51-.59 3.63-7.38 4.24-7.83 3.43-2.56 9.32-.49 12.06-3.6 3.54-4-1-5.3 4.25-7.83 3.84-1.83 15-10 19.9.66C631 82 620.67 81.9 609.3 80.75c-32.06 27.55-69.2 49.69-98.25 80.46 10.4 45.56.95 109.72 15 151.89 22.28.41 6-24.51 5.28-39.67-1.59-32.72 2-78.4-8.57-103.87 20-19.86 45.72-33.57 65.5-53.64-3.19-14.78 21.23-6.56 24-3.21-.8 13-16.82 22-24.4 15.15C568.69 139 554.6 155.53 534.8 166c-3.81 17.13 1.5 33.32 2.29 51.87 1.48 34.64-5.42 74.41 16.92 92.19 3.25-26.8-4.45-75.12-4.33-111.7 1.07-12.57-10.14-13.65-7-28.12C587 154.05 628.34 128 664.5 98.49c11.68-.66 11.93 9.39 23.62 8.73 37.29 1.37 75.43 3.63 107.59-.47 11.77-6.91 35.6-13.33 35.56 9.12-26.47 0-52 1.13-79.73 1.39-30 .28-62.67-8.77-91.54-3-13.18 2.65-38.11 21.2-52.78 30.16-19.39 11.85-35.06 26.24-52.78 30.15-1.65 20.43 4.34 41.52 5.76 67.92 1.23 23.07-7.67 56.83 13.84 64.2 9.87-37.58 2.9-92.72-7.92-123.77 7.65-1.45 7.58-11.14 20.16-7.31 10.66 11.32-4.12 16.51-4.89 27.73 1.61 35.79-1.57 76.07 8.57 103.87 12.48.62 10.51-31.1 9.52-47.5-.66-10.87-6.38-19.92-3.07-28 1.47-14.24-11.48-15-11-28.25 8.61-8.41 11.3 2.36 23.89.78 10.5 11.14-10.63 9.56-8.75 23.62 2.11 22.46 3.65 45.45 5.76 67.92 7.28 11.18 18 19.11 39.28 17.21 2.7 16.62-24.6 1.2-28.25 11 3.39 7.11 13.71 7.73 19.51 12.58-2.8 8-18.69 2-20.29 11.3-4.52 13.24 12.18 6.6 19.64 8.61 3.36 15.93-22.3.91-20.42 15.27-6.67 17.83 26.06-1.26 19.38 16.57l-19.9-.66c.9 30.82 51.08 13 59.7 1.95 6.13-8.56.5-29.67 13-31.45 24.85 3.47 4.86 28.7-8.87 27.6-.53 14.54-11.9 17.51-16.82 27.34l-43.78-1.42c-1.88 21.05 31 9.55 47.36 13.5 15.06-.95 23.73-24.19 40.19-10.65-.8 4.61.65 7.12 3.73 8.09-6 13.67-35.08 14.09-56.25 14.11-11.85 0-24.84.55-31.71-5-8 17.77 14.09 7.38 15.4 16.43l27.86.92c9.24 1.63 17 4.63 19.52 12.59 15-2.56 28.43-4 27.34 16.82C687.25 489 676.45 457.3 653 452.71c-10.25-2-17.17 10.42-27.87-.91-5.26 16.5 5.48 18 19.38 16.56 5.6 17-20.61 0-20.28 11.3-4.24 14.25 15.49 6.06 23.62 8.74 5.58 17-20.62 0-20.29 11.28-.53 12.07 13.64 10.38 23.49 12.73-6.59 15.8-24.56-6.15-24.4 15.14 62.36 10.26 147.5 9.19 210.94 6.88 18.59 2.83 17.14-31.22 32.5-18.87 7.17 9.1-5.8 19.77-12.73 23.49-4.39 2.36-38.44 5.09-52 6.28-59.46 5.17-128.6-14.33-179.28-1.87-2.55 14.44 15.43 2.56 23.75 4.76 3.72 1 6.45 7.64 11.68 8.36 26.2 3.57 75.16 1.88 103.61-.61 41.67-3.65 89.35-.87 108.11-16.39 3.09-2.56 9.84-4.51 12.2-7.57 6.85-8.9 7.19-32 28.51-19q.67 21.29-20.55 19.24c-13.26 6.43-19.49 20.39-32.75 26.82-83 2.52-160.41 16.06-234.95-3.67-2.6 18 24.71 23.14 43 25.3 39.06 4.63 71.15-5.71 111.84-8.3 38.19-2.43 75.59 5.11 95.91-8.82 5.15-3.55 7.2-7.18 12.32-11.55 8.56-7.33 27.13-18.22 36.73-26.7-2-15.9 5.75-21.32 12.85-27.47 12.72.94 17.21 9.6 15.14 24.4-4.73 3.19-115.94 12.16-20 3.33-18.88 18.29-45.22 28.61-57.54 53.9-87.73-6.52-169.2 21.18-247-.08-8.14 23.27 21.37 15.1 31.32 17 8.2 1.53 20.9 5 27.72 4.9 32.35-.28 62.29-14.27 95.78-4.85-.29 11.74 6.76 16.35 15 28.38 30 14.29 46.66 41.16 77.91 54.34L875.48 715c1.46 14.85 22.27 11.53 11 28.25-30.23 6.47-16.37-28.38-18.34-48.41-.65-3.24-3.86-4.1-3.72-8.09-29.16-30.55-66.51-53.44-96.9-82.84-21.75-2.35-63 .37-103.62.61-14.81.08-33.86-6.65-40.06 6.66 11.3 12 32.74 13.49 51.35 13.62 8.75.07 17.95-6 28.12-7 21.67-2.32 45.88 7 63.81-1.9 26 30.94 65.62 49.14 97.17 74.89-8.87 15.23-3.49 45.7-6.19 67.52 5.59 7.64 21.69 5.42 19.25 20.56-3.87 0-3.24 4.77-4.23 7.82-6.64-.2-13.28-.43-19.9-.64-7.16-25.45-.18-64.15-.87-95.65-14.53 2.87-10.15 26.43-9.26 39.54 1.52 22.4-3.15 45.22-2.21 67.66-4.74 14.73 9.51 11.66 7.18 24.14-3.86 6.86-7.84 13.59-20.28 11.29-8-9.08-2.26-26.61 5-31.71-.71-32.77 6.48-72.94-.73-99.63-1.58-7.38-9.51-11-15.4-16.44a160.51 160.51 0 0 0-27.21-20.81c-4.94-3.08-17.45-14.56-27.34-16.83-7.2-1.66-9.92 3.51-12.08 3.59-6.36.24-6.91-4.79-11.8-4.37-8.29.71-19.37 6.65-28.12 7-31 1.43-58.95-5.68-87.56-2.85-10 3.52 5 15.46-.91 27.86-10.16-.78-7.47-13.59-7.18-24.14-9.55 3.54-19.79 6.34-16.7 23.36-2 13.42 17.41 6.83 11.16 24.27-4.73 3.19-10.84 4.9-20 3.33-3.51-13.44 11.57-44.28-10.64-40.19-11.39 1.23 9.49 23.69-4.89 27.73 1.43 12.81 14.7 14.53 15 28.38-10.95 4.58-10.41 15-24.14 7.18 3.39-23.65 8.29-45.23-1.9-63.81-16.16 1.93-3.61 17.51-4.76 23.75-1.93 10.35-13.12 17.64-9 31.59-.06 15.24 24.59 36.11 2.42 47.88-21.49-.43-7.15-22.09-6.79-36.08.57-22.28 5-48.69-1.9-63.81-16.56-5.91-3.19 17.94-4.76 23.75-.35 1.27-7.51-.61-8.09 3.72-3.06 23 3.41 52.35 1.38 79.73.85 14.64 15.25 16.58 10.77 36.21-11.11 4.42-16.9 8.11-28 3.07-7.21-14.31 2-21.74 9-31.58 4.09-26.15-.94-51.85-1.51-75.75-.31-13 16.68-37.6-6.66-40.06-11.84-.66.12 12.69-.52 15.92-1.81 9-7.77 8.51-8.48 15.66-1.63 16.27 5.2 34.31-1.43 43.78-2.29 12.44 10.37 10.86 11.29 20.3-5.5 3.73-8.3 10.35-12.46 15.52-20.09-4.5-16.45-27.65-2.81-35.94-1.86-22.7 7.05-55.48-1.64-71.77-13.86-3.95-4.48 10.18-.4 11.93-2.53 9.66-15.67 8-12.71 23.5-2.59 19.26 19 18.21 6.79 36.08-13.87 2.7-16.66-5-23.62-8.74C467 721 479.53 723.39 481.07 714c-2.09-13.48 6.33-36.79-2.55-43.91-16.65-2-3.27 12.88-4.63 19.78-14.83 2.31-6.31-17.24-15.27-20.42-19.24-1.14 1.14 20.77-8.74 23.62-14.36 1.88.66-23.78-15.28-20.42-9.59-6.51-12.14 13.13-4.36 11.8-8.63 13.92-10.72-10.09-15.53-12.45-17-1.93-11.25 14.15-8.75 23.62-17 3-3.31-22.62-19.24-20.55-1.22 12.76-1.19 30-1.56 47.76-.34 16.23-1.93 34.76-1.69 51.74.54 38.66 9.73 74.12-18.9 91-5.43 12.06-7 28.26-20.94 31.2 2.06-21.76 28.34-41.44 34-66.63 2-8.69-3.41-10.3-3.46-16.06 0-6.13 4.66-15.06 4.63-19.76-.16-28.31 3.73-72.18-.73-99.63-1.44-8.86-2.07-25.11-15.15-24.4-5.83 4.55 2.78 10 3.47 16 2 17.17-1.56 47.82-2.47 75.62-.84 25.94 2 55.15-2.34 71.64s-20 29.08-29.28 42.87c-10.47 15.56-15 34.49-29.16 38.9-2.26-9.56 8.29-13 12.58-19.52 3.88-5.86 4.27-12.89 8.62-19.63 1.69-2.63 6.65-5.35 8.22-7.71 8.44-12.46 18.7-30.22 21.75-54.96 3.52-28.5 9.48-81.7 3.77-115.42-1.55-9.12-1-23.9-15.27-20.42-8.1 30-3.65 61.75-3.12 95.53.29 18.35 2.57 42.85-1.95 59.7-4.33 16.18-22.26 31.94-33.4 46.71-6.38 8.48-10.43 16-16.69 23.36-12.81 15-24.3 24.28-33.4 46.73C249.14 928.71 274 908.82 288 891a704.84 704.84 0 0 0 41.75-58.4c4.88-50.53-3.8-92.31 4.42-135.32-6.25-3.14 1.54-19.44-11.42-16.3-12.06 1.54 3.26 15.39-.78 23.87-1.28 2.67-7.65-2-8.09 3.72-.53 6.76 2.95 8.95 3.46 16.06 2.42 33.35-2.81 74.46.48 107.58-33.58 49.29-78.6 86.35-108.16 139.91-5-14.39 9.95-29 17.22-39.28C250.6 899.38 289 867.86 310 828c2-52 2.21-102.38-3.15-147.51-14.27-4.24-6.07 15.49-8.74 23.61-11-1.29-.7-22.49-15.27-20.41-14.27-4.24-6.06 15.49-8.74 23.62-6-6-7.85-15.8-7.05-28.12l-27.87-.91c.1-13.63 24.31-1.52 24.41-15.15-1.71-15.39-15.49 2.57-23.62-8.73 3.41-8.72 24.61 1.56 20.41-15.28-.21-8.8-16.83-2.24-23.75-4.75-5.5-18.23 25.92 3 20.42-15.27-3.45-13.76-23.31 9.89-27.73-4.9-11 3.39-8.27 21.38-28.37 15q.39-12 .77-23.88c17.42-2 44.82 6.66 55.86-2.17 3.84-12.89-12.63-7.37-19.65-8.61-12.64-2.23-21.63-6.73-35.82-1.16-22.82 9-19.56 34.67-37.38 46.59-9.2-1.68-18.56-3.18-15.4-16.44.32-13.39 18.7-7.51 24.4-15.14 14.15-4.12 15.31-22.1 28.77-26.95 12.19-3.27 22 4.66 31.71 5 3.26.12 4-4.1 8.09-3.72 1.2.1 20.74 11.29 16.31-11.42-10.75-1.5-27.77-6.21-43.65-5.41-16.74.84-34.66 23-39.8-1.3-2.39-4.09 10.19-15.19 12.46-15.53 9.4-1.41 11.17 8 19.64 8.61 20.34 1.33 42 9.41 51.87-2.3 4.52-13.24-12.17-6.59-19.64-8.6-3.34-14.55 17.31-3.49 20.29-11.3 3.07-15.74-20.64-6.38-19.25-20.54 7.08-.68 19.8 4.66 16.18-7.45 4.52-13.24-12.18-6.6-19.65-8.6-3.33-14.55 17.32-3.49 20.3-11.3 2.81-14.2-23.77-.88-19.38-16.56 6.31-.13 15.11 2.41 16-3.47 8.65-22.25-20.86-8.75-19.13-24.53 9.25 1.52 16.88 9.06 20-3.32-5-8.89-36.78-13.8-51.34-13.63-20 .23-32.06 12.36-44.57 22.45-6.32 5.64 1.78 18.24-8.73 23.62-7.1 3.63-15.65 3.92-19.65-8.61-2.31-14.82 14.28-9.47 20.42-15.27A144.25 144.25 0 0 1 184 417.49c23.69-2.79 48.24 13.83 67.66 2.21 8-17.78-14.08-7.39-15.4-16.45-69.19-15.84-86.72 23.82-117.24 52-6.07 12.73-1.47 36.87-21.07 35.17-18.65-17 8.8-30.75 21.2-39.15 15.12-22.3 32.35-42.36 53.69-58 14.21.59 31.52.89 47.76 1.57 12.46.52 29.59 8.74 32-2.94.82-10.14-23.16-11.81-31.45-13-14.5-2.05-38.9-3.71-47.76-1.56-18.54 4.51-39.39 34.29-53.43 50.05-18.46 20.74-33.25 40.38-49.45 50.18C84.62 494.58 53.1 512 46 492.68c0-15.14 11-18.45 24.53-19.12 27.82-36.21 64-63.46 87.09-104.74 30.14 2.63 67.71-1.7 91.41 7q.25-8 .52-15.93c-.21-8.8-16.83-2.23-23.75-4.75.78-10.15 13.58-7.47 24.14-7.18 3.22-17.18-18.12-11.32-31.45-13 5.89-11.55 30-3.65 36.34-14.76-6.14-19.86 3.85-33.6 1.95-59.69 1.52-15.59-13.92-15.27-10.91-32.24 7.28-8.94 15.38-14.08 28.12-7 1.27 15.08-8.45 18.42-12.84 27.46-2.79 27.05.35 48.55 1.64 71.78l15.92.51c9.09-7.53-4.36-26.56 1.42-43.78 2-14.73-15.78-10.93-11-28.25 11.61 1.42 12.51-8.59 24.13-7.18 8.43 10.2-7.58 19.3-9 31.58 3.22 17.57-1.63 42.7 14.37 48.29 8.29-2.13 15.27-5.67 12.58-19.52-.89-7.15 4-8.05 4.12-3.85-2.33 12.41 5.17 15.69 7.19 24.09 3.27-2 6.59-3.94 12.07-3.59 12.25-4.51-3.87-13.83.78-23.88 17.05-3.11-.6 26.28 15.14 24.4 15.63-3.5 1.06-13.68 4.89-27.73 16.85-.36.06 30.81 23.1 24.66 6.84-8.49-2.49-14.69-3.2-24-.82-10.71 4.52-20.55 5-31.71s-3.37-24.05-2.81-36c1.8-39.33 11.47-80.82 3.89-119.4 2-13.42-17.41-6.84-11.16-24.27 4.72-3.19 10.84-4.91 20-3.34 4.81 52.25-12.49 143.87-6.74 207 1 11.13.87 25.66 10.9 32.23 12-4.33 4.7-21.26 5.41-43.65.55-17.4 5.14-35.23 5.67-51.61.28-9-4-15.77-3.21-24 3.16-33.48 5-83.89 0-123.52 1.47-12.95-12-11.9-15.27-20.41 8.31-16.17 15.93-14.91 32.09-6.93 6.39-21.41-18-14-10.76-36.2 4.72-3.19 10.83-4.91 20-3.34 11.39 14.31-5 30.16-5.53 47.64-.7 22.33 8.33 51.53 9.21 84 .58 21.63 2.54 44.85 1.77 67.79-1.34 40-18.39 83.23 4.46 107.72 12.35-74.89.46-164.29 7.78-238.81.8-14.89-16.76-12.59-10.9-32.23 6.41-6.35 15.47 1.87 23.76 4.76 3.77 15-10.26 11-8.74 23.62-.38 67.59-2.1 118.42 1.47 199.27.66 14.94-10.22 33.81 6.53 44 3.25-.64 4.1-3.86 8.09-3.71 6.08-23.5-1.6-66.62-.61-103.62.9-33.63 7-68.07 3.25-99.5-1.34-11.13-8.85-20.25-6.92-32.1a33.4 33.4 0 0 1 23.88.78c1.64 15.48-10.68 16.06-12.85 27.47 2.38 45.57 2.94 107.51 2.9 155.48 0 10-12.39 47 10.25 52.13 7.83-43.42 7.47-85.33 4-123.38-1.15-12.61-9.84-28-6.67-40.06C488.24 130.71 524 111 541 98.44c10-7.4 19.07-15.85 28.64-23 3.2-2.38 8.46-1.07 12.07-3.6 2.1-1.46 2.27-6.43 4.24-7.83 4.36-3.09 13.17-4.92 16.18-7.43 14.21-11.88 19.41-32.37 41-34.53 10.3 13.05-.07 30.42-20.67 23.24-43.95 34.17-93.2 62.61-130.92 103.33Zm-81.25-74.36c7.94 70.47-9.69 152-3 215 1 9.42-2.44 27.08 11 28.25 12.79-4.77.44-16.66.92-27.85 2.8-66.31 16.42-174.16-.69-223.14-.78-3.13-3.18-4.74-7.83-4.24-.13 4.02-.27 7.99-.4 11.98ZM517.8 320.8c-16.27.52-34.64-3.4-51.74-1.69-17.43 1.75-33 7.59-52 6.28-22.14-1.52-71.53 1.6-91.8 5-2.92.49-4.42-4.09-3.85-4.11-16 .67-31.83-4.36-44 6.54C322.25 339.58 376.2 335 433.7 334c37.4-.68 80.49-6.16 111.83-8.31 18.69-1.28 40.77 6.38 56-6.14-26.19-11.09-55.01.34-83.73 1.25ZM278 344.86a2711.54 2711.54 0 0 0 13.85 307.24c37.23-7.32 75.22-5 115.8-8.18 21.5-1.71 42.47-4.81 63.94-5.88 44.69-2.25 88.62-1.67 127.88-11.77-1.4-90.78.1-190.12-2.59-286.95-99.41-9.09-226.8 6.56-318.88 5.54Zm324.85 177.93c-.63 4 3.77 4.83 3.72 8.09-.25 13.58-1.42 27.4-1.3 39.8.23 22.19-5.53 47.09 9.87 64.07 14.57-100.65-3-198.67-10.17-299.15-6.41 54.59 5.87 135.98-2.12 187.19ZM253.82 352c8 44.17 5.36 84 7.79 127.76 1.54 27.95 4.89 56.67 5.23 83.83.22 17.87-2.65 35.21-1.69 51.75 1.13 19.22-.62 43.62 14.36 48.28 7.05-70-7.19-157.21-8.26-235.35-.35-25.76.61-51.73-1.77-67.79-.58-3.87 5.12-19.35-7.44-16.17-.78-3.14-3.18-4.74-7.83-4.24Zm513 275.71c-36.56-7.17-72.52 4.08-91.81 5-17.81.83-36.27-3.82-51.73-1.68-1.52 9.61 4.66 6.16 11.68 8.35 42.22 13.14 100.52-.15 135.45.43 7.3 0 12.8 20.84 19.64 8.61-8.93-5.83-15.05-14.27-23.28-20.68Zm-279.57 18.8c-12.91.66-22.89-1.6-35.82-1.16-30.42 1-61.12 8.13-87.95 9.08-37.7 1.34-59.58-3.1-76.27 17.43 25 9 50.07-6.85 80-9.34 20.26-1.69 42.22 3.19 63.68 2.08 26.78-1.39 53.17-8.69 80-9.35 34.15-.83 73.6 10.5 96-12.8-34.12-6.51-74.45 1.76-119.64 4.06Z\" class=\"b974054b-9ad9-46d9-a72e-743e212492b7\"/><path d=\"M441.75 453.79c12.58-1.5 15.37 6.17 23.62 8.73-1.46 13.55-9.19 20.4-24.53 19.13q.45-13.93.91-27.86Z\" class=\"b974054b-9ad9-46d9-a72e-743e212492b7\"/>","width":1000,"height":1000},"github":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>"},"linkedin":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0\" clip-rule=\"evenodd\"/>"},"logo":{"body":"<path fill=\"currentColor\" d=\"M21.163 13.184a2.852 2.852 0 0 0-.678.084 8.737 8.737 0 0 0-6.917-6.445 8.393 8.393 0 0 0-.441-.067c.026-.825.064-1.779 1.278-2.636l-.192-.484s-2.37.735-2.639 2.76c-.117-.551-1.22-1.24-1.767-1.371l-.272.438s.724.362.901 1.361a8.737 8.737 0 0 0-6.92 6.44 2.834 2.834 0 1 0-1.362 5.502 2.835 2.835 0 0 0 1.72-.114 8.682 8.682 0 0 0 .92 1.712l2.352-1.585c-.638-.807-1.02-1.988-1.087-3.173-.07-1.294.244-2.576 1.07-3.33 1.702-1.449 3.556-.788 4.713.6h.312c1.16-1.388 3.017-2.048 4.713-.6.825.754 1.14 2.038 1.07 3.33-.065 1.185-.448 2.366-1.087 3.173l2.353 1.585a8.685 8.685 0 0 0 .922-1.712 2.833 2.833 0 0 0 2.082-5.27 2.835 2.835 0 0 0-1.044-.198M2.786 16.848a.836.836 0 0 1 0-1.672.844.844 0 0 1 .469.144c.007.44.037.878.09 1.314-.148.134-.374.233-.559.214m18.427 0a.836.836 0 0 1-.558-.215 12.679 12.679 0 0 0 .09-1.314.835.835 0 0 1 1.304.693c.007.457-.383.858-.836.836\"/>"},"mail":{"body":"<path fill=\"currentColor\" d=\"m15.95 22-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20zm8-7 8-5V6l-8 5-8-5v2z\"/>"},"rss":{"body":"<g fill=\"currentColor\"><path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z\"/><path d=\"M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1\"/></g>","width":16,"height":16},"share":{"body":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M15 5.5a3.5 3.5 0 1 1 .994 2.443L11.67 10.21c.213.555.33 1.16.33 1.79a4.99 4.99 0 0 1-.33 1.79l4.324 2.267a3.5 3.5 0 1 1-.93 1.771l-4.475-2.346a5 5 0 1 1 0-6.963l4.475-2.347A3.524 3.524 0 0 1 15 5.5\"/></g>"},"travel-explore":{"body":"<path fill=\"currentColor\" d=\"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8\"/>"},"x":{"body":"<path fill=\"currentColor\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/node_modules/astro-icon/components/Icon.astro", void 0);

const $$SocialNetwork = createComponent(($$result, $$props, $$slots) => {
  const rrss = [
    {
      url: "https://www.linkedin.com/in/gilberto-la-rosa/",
      name: "linkedin",
      icon: "linkedin"
    },
    {
      url: "https://twitter.com/gilbertoxdev",
      name: "x",
      icon: "x"
    },
    {
      url: "mailto:gilberto.larosa@codafter.codes",
      name: "gilberto.larosa@codafter.codes",
      icon: "mail"
    },
    {
      url: "https://github.com/gilbertoxdev",
      name: "github",
      icon: "github"
    },
    {
      url: "/rss.xml",
      name: "rss",
      icon: "rss"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<aside> <nav> <ul class="flex flex-wrap justify-center gap-4 items-center"> ${rrss.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")}${addAttribute(item, "sr-only")} target="_blank"${addAttribute(item.name, "title")} class="hover:text-[#f79533] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "class": "hover:text-[#f79533] duration-150", "size": 35 })} </a> </li>`)} </ul> </nav> </aside>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/SocialNetwork.astro", void 0);

export { $$SocialNetwork as $, $$Icon as a };
