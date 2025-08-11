# Pagination
<p align="center">
<img width="520" align="center" altlt="Image" src="https://github.com/user-attachments/assets/8c0eca2d-6d63-4cbe-9526-c892d28e6c41" />
</p>
<p align="center">
<img width="520" align="center" altlt="Image" src="https://github.com/user-attachments/assets/d5ab60eb-ac46-437c-8bf9-b387a00efe2c" />
</p>
<p align="center">
<img width="520" align="center" altlt="Image" src="https://github.com/user-attachments/assets/16ea2582-3456-4aa6-a1ff-5e04c6c4e7f2" />
</p>


## Resources

**Read or watch:**

- [REST API Design: Pagination](#)
- [HATEOAS](#)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to paginate a dataset with simple `page` and `page_size` parameters
- How to paginate a dataset with hypermedia metadata
- How to paginate in a deletion-resilient manner

## Requirements

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3 (version 3.7)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `pycodestyle` style (version 2.5.*)
- The length of your files will be tested using `wc`
- All your modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
- All your functions should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`)
- Documentation is not a simple word; it’s a real sentence explaining the purpose of the module, class, or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

## Setup

**Popular_Baby_Names.csv**  
Use this data file for your project. https://intranet.hbtn.io/rltoken/7IKLZ7i4pO4MJ9CQoGHfVw

## Tasks  

| Number | Name                              | Short Description                                               | Filename                    |
|--------|-----------------------------------|-----------------------------------------------------------------|-----------------------------|
| 0      | Simple Helper Function            | Write a function `index_range` to calculate start and end indexes | `0-simple_helper_function.py` |
| 1      | Simple Pagination                 | Implement `Server` class and `get_page` method for pagination      | `1-simple_pagination.py`      |
| 2      | Hypermedia Pagination             | Extend `Server` class with `get_hyper` to include hypermedia pagination | `2-hypermedia_pagination.py`  |
| 3      | Deletion-Resilient Hypermedia Pagination | Implement `get_hyper_index` to handle deleted rows and pagination | `3-hypermedia_del_pagination.py` |

## Author :black_nib:

* __Fahad Alonazi__ <[Froot1](https://github.com/Froot1)>

* GitHub: [Froot1](https://github.com/Froot1)


