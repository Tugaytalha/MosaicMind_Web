# MosaicMind_Web Drogon C++

This is a C++ backend server built using the Drogon framework. The server listens on port 8080 and has two main controllers: `DashBoardController` and `MainPageController`.


## Usage
You can access website by visiting 'https://elegant-sable-b636ee.netlify.app/'. And you can send requests to the server by 'https://mosaicmind-web.onrender.com/'. No need to build or run separately. Also, when you build the project yourself, you cannot access the database correctly due to security rules.

## Prerequisites

To build and run this application, you need:

- C++17 compatible compiler
- CMake 3.8 or higher
- Drogon framework

## Building and Running

### Clone the Repository

```sh
git clone https://github.com/your-repo/drogon-backend.git
cd drogon-backend
```

### Build the Application

1. Create a build directory and navigate to it:
```sh	
mkdir build
cd build
```

2. Run CMake to configure the project:
```sh
cmake ..
```

3. Build the project:
```sh
make
```

### Run the Application
After building the project, you can run the application:
```sh	
./MosaicMind_Web
```
By default, the server listens on 0.0.0.0:8080.
