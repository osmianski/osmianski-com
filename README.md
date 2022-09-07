This is the source code for my personal website, `osmianski.com`.

* [Developing Locally](#developing-locally)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Create Notion Integration](#create-notion-integration)
    * [Share Notion Blog Posts](#share-notion-blog-posts)
    * [Run The Project](#run-the-project) 

## Developing Locally

### Prerequisites

1. Install [PHP, Composer, Docker](https://laravel.com/docs/9.x). 
2. Create an [alias for `sail` command](https://laravel.com/docs/9.x/sail#configuring-a-shell-alias)

### Installation

Clone the project from GitHub:

```shell
cd ~/projects
git clone git@github.com:osmianski/osmianski-com.git
```

### Create Notion Integration

1. In Settings & members -> Integrations
   -> Develop your own integrations, click New Integration.
2. Enter the name "Sync To osmianski.com", click Submit.
3. Copy the token from Secrets -> Internal Integration Token into the `.env` file:

    ```
    NOTION_TOKEN=...
    ``` 

### Share Notion Blog Posts

1. In the Posts database, click Share, and invite
   the "Sync To osmianski.com" integration.
2. Copy the database ID from the URL into the `.env` file:

    ```
    NOTION_BLOG_POSTS=...
    ``` 

### Run The Project

Start the Docker containers for the project:

```shell
cd ~/projects/osmianski-com
sail up
```

In a separate terminal window, run Vite asset build script:

```shell
cd ~/projects/osmianski-com
npm run dev
```

Open the local copy of the website in the browser: <http://127.0.0.1:8000/>.
 
