---
title: Conda 使用指南
date: 2023-09-18
category:
  - ops
tag:
  - SSH
isOriginal: true
---

## 什么是 Conda
> 以下摘自[官网](https://docs.conda.io/en/latest/)

Conda is an open source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

Conda as a package manager helps you find and install packages. If you need a package that requires a different version of Python, you do not need to switch to a different environment manager, because conda is also an environment manager. With just a few commands, you can set up a totally separate environment to run that different version of Python, while continuing to run your usual version of Python in your normal environment.

翻译为：

Conda 是一个开源包管理系统和环境管理系统，可在 Windows、macOS 和 Linux 上运行。 Conda 可以快速安装、运行和更新软件包及其依赖项。Conda 可以轻松地在本地计算机上创建、保存、加载环境并在环境之间切换。它是为 Python 程序创建的，但它可以打包和分发任何语言的软件。
Conda 作为包管理器可以帮助您查找和安装包。如果你需要一个需要不同版本Python的包，你不需要切换到不同的环境管理器，因为conda也是一个环境管理器。只需几个命令，您就可以设置一个完全独立的环境来运行不同版本的 Python，同时继续在正常环境中运行常用版本的 Python。

**这个环境管理尤为重要，可以想像你有好多个项目，每个项目所需要的依赖不尽相同，所以没有这个环境管理，自己去管理环境是很繁琐的，有了 Conda 之后就可以针对每个项目使用一个环境，极大减少了管理的工作量。**

## Conda、Anaconda 和 Miniconda 区别
> 引用[知乎回答](https://www.zhihu.com/question/369468216/answer/2805823931)

![区别](/images/use-conda/conda.png)

## 安装

- [Anaconda](https://docs.anaconda.com/free/anaconda/install/index.html)
- [Miniconda](https://docs.conda.io/projects/miniconda/en/latest/)

已安装就不用再次安装了。

## 使用

安装成功会有个默认的环境叫 `base` 除非你知道你在做什么，最好不要去动这个环境。此时应可以看到命令行前有 `(base)` 的提示

- 新建一个名为 `abc` 的环境，指定 Python Release 版本为 `3.11.4` ，如指定为 `3.11` 则使用 `3.11` 版本最新的 Release 版本

    ```shell
    conda create -n abc python=3.11.4
    ```

- 激活环境，激活后可观察到 `(base)` 转为了 `(abc)`，在后续安装软件包都会安装在这个环境中，执行 Python 文件都是使用的该环境中的软件包。

    ```shell
    conda activate abc
    ```

- 安装软件包

    ```shell
    conda install numpy
    # 建议能用 conda 命令装的话就用 conda 吧，能不能用可以去相应软件包官网查看，或者使用 pip 
    pip install numpy
    ```

- 列出所有环境

    ```shell
    conda env list
    ```

- 退出环境，退出后可观察到 `(abc)` 转为了 `(base)`

    ```shell
    conda deactivate
    ```

- 删除环境（慎重考虑）

    ```shell
    conda remove -n abc --all
    ```