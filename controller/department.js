import department from "../models/department.js";

export const all= async (req,res) => {
    const departments = await department.find({}, {name: 1}).lean();

    
    res.render('departments/all', { departments })
};

export const create = (req,res) => {
    res.render('departments/create');
};

export const store = async (req,res) => {
    const { name , code } = req.body;

    await department.create({
        name,
        code,
    });
    res.redirect('/departments')
};

export const show = async (req,res) => {
    // 1- Grab the _id
    const { _id } = req.params;
    console.log(_id);

    //2- Use _id to get department
    const singledepartment = await department.findById(_id).lean();

    //3- Render show templets
    res.render('departments/show', { department:singledepartment });
};

export const edit = async (req,res) => {
    const {_id} = req.params;
    const editFormDepartment = await department.findById(_id).lean();
    res.render('departments/edit', {department: editFormDepartment});
};

export const update = async (req,res) => {
    const { name , code } = req.body;
    const {_id} = req.params;

    // set    بكتب جواها الحاجه اللي عايز اغير فيها 
    await department.findByIdAndUpdate(_id, { $set: { name , code  }})

    res.redirect('/departments')
};

export const deleteOne = async(req,res) => {
    const {_id}= req.params;
    await department.findByIdAndDelete(_id);

    return res.redirect('/departments');
};