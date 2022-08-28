This is the source code for my personal website, `osmianski.com`.

* [Developing Locally](#developing-locally)
    * [Installation](#installation)
    * [Running The Project](#running-the-project) 

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

### Running The Project
   
Start the Docker containers for the project:

```shell
cd ~/projects/osmianski-com
sail up
```

Open the local copy of the website in the browser: <http://127.0.0.1:8000/>. 
